'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const screenshots = [
  {
    title: "Expand Your Taste, Enjoy Life",
    description: "Discover new flavors and broaden your culinary journey.",
    image: "/find_recipes.png"
  },
  {
    title: "Learn. Cook. Improve",
    description: "Clear guides and tutorials to elevate your kitchen skills.",
    image: "/recipe_details.png"
  },
  {
    title: "AI Voice Interaction",
    description: "Hands-free interaction for a smooth, enjoyable experience.",
    image: "/ai_cooking_assistant.png"
  }
];

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-16">Cook Smarter, Cook Better</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {screenshots.map((screenshot, index) => (
          <motion.div
            key={screenshot.title}
            className="rounded-2xl bg-card p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
                <div className="relative mb-6 rounded-lg overflow-hidden h-[500px] w-full">
                  <Image
                    src={screenshot.image}
                    alt={screenshot.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
            <h3 className="text-xl font-semibold mb-2">{screenshot.title}</h3>
            <p className="text-muted-foreground">{screenshot.description}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <a 
          href="https://demo.allyoucancook.life/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 font-semibold"
        >
          Try the App Now
        </a>
      </motion.div>
    </section>
  );
}
