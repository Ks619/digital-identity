
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Sparkles } from "lucide-react";

interface WelcomeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WelcomeDialog: React.FC<WelcomeDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden border-none rounded-xl shadow-xl">
        <div className="relative">
          {/* Background with gradient overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/lovable-uploads/9f0c6e4e-fcc7-41b9-afec-7bd8e402bc01.png')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-tech-600/90 to-tech-500/80"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 flex flex-col items-center md:flex-row md:items-start gap-6">
            <Avatar className="h-32 w-32 border-4 border-white/20">
              <AvatarImage src="/lovable-uploads/a647c2dd-f9c1-4fb9-9379-8ab0edf3185a.png" alt="Kfir Shuster" />
              <AvatarFallback>KS</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 md:ml-2">
              <DialogHeader className="mb-4">
                <DialogTitle className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                  Welcome to My Portfolio!
                </DialogTitle>
                <h2 className="text-xl text-primary font-medium">
                  Junior Software Engineer
                </h2>
              </DialogHeader>
              
              <DialogFooter className="mt-6">
                <Button 
                  onClick={() => onOpenChange(false)} 
                  className="text-base px-8 py-6 h-auto bg-primary hover:bg-primary/80 text-white transition-all duration-300 font-medium"
                >
                  Explore Portfolio
                </Button>
              </DialogFooter>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeDialog;
