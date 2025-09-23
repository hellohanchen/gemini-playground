"use client";

import { RoomComponent } from "@/components/room-component";
import { Header } from "@/components/header";
import { HelpModal, useFirstVisitHelp } from "@/components/help-modal";

export default function Dashboard() {
  const { showHelpModal, setShowHelpModal } = useFirstVisitHelp();

  return (
    <div className="flex flex-col h-dvh bg-background">
      <Header />
      <main className="flex flex-col flex-grow overflow-hidden">
        <RoomComponent />
      </main>
      
      <HelpModal 
        open={showHelpModal} 
        onOpenChange={setShowHelpModal} 
      />
    </div>
  );
}
