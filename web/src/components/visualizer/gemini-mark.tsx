"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { AgentState } from "@livekit/components-react";
import { useTheme } from "@/components/theme-provider";

// Theme-aware color function
const getThemeColors = (theme: string) => {
  if (theme === "light") {
    return {
      accentColor: "#d97706", // Softer amber-orange for light mode (less bright)
      disconnectedColor: "#666666", // Gray for light mode
    };
  } else {
    return {
      accentColor: "#5282ed", // Blue for dark mode (original)
      disconnectedColor: "#030303", // Almost black for dark mode
    };
  }
};

const Shape: React.FC<{ volume: number; state: AgentState; theme: string }> = ({
  volume,
  state,
  theme,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const colors = getThemeColors(theme);

  const emissiveColor = useRef(new THREE.Color(colors.accentColor));
  const targetColor = useRef(new THREE.Color(colors.accentColor));
  const isDisconnected = state === "disconnected";

  useFrame((frameState) => {
    if (meshRef.current) {
      if (state !== "speaking") {
        if (state === "disconnected") {
          meshRef.current.rotation.y += 0.05;
          meshRef.current.rotation.x = -0.15;
        } else {
          meshRef.current.rotation.y += 0.025;
          meshRef.current.rotation.x = 0;
        }
      } else {
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
          meshRef.current.rotation.y,
          Math.round(meshRef.current.rotation.y / Math.PI) * Math.PI,
          0.05
        );
      }

      if (state === "disconnected") {
        meshRef.current.position.y = THREE.MathUtils.lerp(
          meshRef.current.position.y,
          -1,
          0.1
        );
      } else {
        const elapsedTime = frameState.clock.getElapsedTime();
        meshRef.current.position.y = THREE.MathUtils.lerp(
          meshRef.current.position.y,
          Math.sin(elapsedTime * 3) * 0.1,
          0.1
        );
      }

      const scale = THREE.MathUtils.lerp(
        meshRef.current.scale.x,
        1 + volume * 0.5,
        0.2
      );
      meshRef.current.scale.setScalar(scale);

      const targetHex = isDisconnected ? colors.disconnectedColor : colors.accentColor;
      targetColor.current.set(targetHex);
      emissiveColor.current.lerp(targetColor.current, 0.1);

      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      material.emissive = emissiveColor.current;
    }
  });

  const createGeminiShape = (): THREE.Shape => {
    const shape = new THREE.Shape();
    const size = 1;
    const curveControl = size * 0.05;

    shape.moveTo(0, size);
    shape.quadraticCurveTo(curveControl, curveControl, size, 0);
    shape.quadraticCurveTo(curveControl, -curveControl, 0, -size);
    shape.quadraticCurveTo(-curveControl, -curveControl, -size, 0);
    shape.quadraticCurveTo(-curveControl, curveControl, 0, size);

    return shape;
  };

  const shape = createGeminiShape();
  const extrudeSettings: THREE.ExtrudeGeometryOptions = {
    depth: 0.3,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 24,
  };
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geometry.center();

  const createSolidColorTexture = (color: string): THREE.CanvasTexture => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    canvas.width = 512;
    canvas.height = 512;

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    return new THREE.CanvasTexture(canvas);
  };

  const texture = createSolidColorTexture(
    isDisconnected ? colors.disconnectedColor : colors.accentColor
  );

  const material = new THREE.MeshStandardMaterial({
    map: texture,
    emissiveMap: texture,
    roughness: isDisconnected ? 0.8 : 1,
    metalness: isDisconnected ? 0.2 : 0.6,
    side: THREE.DoubleSide,
    emissive: emissiveColor.current,
    emissiveIntensity: isDisconnected ? 0.5 : volume > 0 ? 3.5 : 0.25,
  });

  return <mesh ref={meshRef} geometry={geometry} material={material} />;
};

export const GeminiMark = ({
  volume,
  state,
}: {
  volume: number;
  state: AgentState;
}) => {
  const { theme } = useTheme();
  
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
      <ambientLight intensity={1} />
      <pointLight position={[2, 0, 0]} intensity={5} />
      <Shape volume={volume} state={state} theme={theme} />
      <Environment preset="night" background={false} />
      <EffectComposer>
        <Bloom
          intensity={volume > 0 ? 2 : 0}
          radius={50}
          luminanceThreshold={0.0}
          luminanceSmoothing={1}
        />
      </EffectComposer>
    </Canvas>
  );
};
