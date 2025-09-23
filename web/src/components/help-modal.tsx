"use client";

import { useState, useEffect } from "react";
import { HelpCircle, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface HelpModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function HelpModal({ open, onOpenChange }: HelpModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md mx-auto bg-card border-border text-card-foreground max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-foreground">
            <HelpCircle className="h-5 w-5 text-orange-500" />
            Welcome to All You Can Cook
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            An AI-powered cooking app
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 text-sm text-foreground">
          <div>
            <p className="mb-3">
              Our AI cooking assistant <span className="font-semibold text-orange-500">"Acai"</span> will help you prepare food and improve cooking skills.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-medium">1</span>
                <p>To start, simply select a recipe from any of the tags or use the search bar</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-medium">2</span>
                <p>Click "Start Cooking with Acai" to begin a cooking session</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-medium">3</span>
                <p>Talk with Acai and ask him/her to guide you through the steps</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-4">
            <h4 className="font-semibold mb-2 text-orange-500">More features coming</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Multi-language support</li>
              <li>• Better recipe management</li>
              <li>• Multi-recipe planning</li>
              <li>• Personalized AI assistant</li>
              <li>• More</li>
            </ul>
          </div>

          <div className="border-t border-border pt-4">
            <h4 className="font-semibold mb-3 text-orange-500">Join our community</h4>
            <div className="flex gap-2 justify-center">
              <a
                href="https://www.reddit.com/r/allyoucancook/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 p-2 rounded-md hover:bg-accent transition-colors text-sm text-foreground hover:text-accent-foreground"
                title="Reddit Community"
              >
                <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">R</span>
                </div>
                <span className="hidden sm:inline">Reddit</span>
              </a>
              
              <a
                href="https://www.facebook.com/groups/1985719762246706"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 p-2 rounded-md hover:bg-accent transition-colors text-sm text-foreground hover:text-accent-foreground"
                title="Facebook Group"
              >
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">f</span>
                </div>
                <span className="hidden sm:inline">Facebook</span>
              </a>
              
              <a
                href="https://x.com/acaicook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 p-2 rounded-md hover:bg-accent transition-colors text-sm text-foreground hover:text-accent-foreground"
                title="Twitter/X"
              >
                <div className="w-5 h-5 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <span className="text-white dark:text-black text-xs font-bold">𝕏</span>
                </div>
                <span className="hidden sm:inline">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <Button 
            onClick={() => onOpenChange?.(false)}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Got it!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function HelpButton() {
  const [showHelpModal, setShowHelpModal] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setShowHelpModal(true)}
        className="h-7 w-7 hover:bg-accent relative"
        title="Help"
      >
        <HelpCircle className="absolute h-4 w-4 text-foreground scale-100" />
        <span className="sr-only">Help</span>
      </Button>
      
      <HelpModal 
        open={showHelpModal} 
        onOpenChange={setShowHelpModal} 
      />
    </>
  );
}

// Hook to manage first visit detection and auto-show help modal
export function useFirstVisitHelp() {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('all-you-can-cook-visited');
    if (!hasVisited) {
      setIsFirstVisit(true);
      setShowHelpModal(true);
      localStorage.setItem('all-you-can-cook-visited', 'true');
    }
  }, []);

  return {
    showHelpModal,
    setShowHelpModal,
    isFirstVisit,
  };
}
