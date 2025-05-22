
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface WelcomeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WelcomeDialog: React.FC<WelcomeDialogProps> = ({ open, onOpenChange }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className={`p-0 overflow-hidden border-none rounded-xl shadow-xl transition-all duration-300 ease-in-out ${
          isHovering ? 'sm:max-w-[800px]' : 'sm:max-w-[700px]'
        }`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="border-8 border-white">
          {/* Background with gradient overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/lovable-uploads/dfd4d879-0d56-4702-865e-92a31a874ae7.png')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-tech-600/90 to-tech-500/80"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 flex flex-col items-center text-center">
            {/* Centered image with white border */}
            <div className="mb-6 w-48 h-48 overflow-hidden mx-auto border-4 border-white">
              <img 
                src="/lovable-uploads/a647c2dd-f9c1-4fb9-9379-8ab0edf3185a.png" 
                alt="Kfir Shuster" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <DialogHeader className="mb-4">
              <DialogTitle className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                Kfir Shuster
              </DialogTitle>
              <h2 className="text-xl text-primary font-medium">
                Junior Software Engineer
              </h2>
            </DialogHeader>
            
            <DialogFooter className="mt-6 flex justify-center w-full">
              <Button 
                onClick={() => onOpenChange(false)} 
                className="text-base px-8 py-6 h-auto bg-primary hover:bg-primary/80 text-white transition-all duration-300 font-medium"
              >
                Explore Portfolio
              </Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeDialog;
