import React from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageSelectorProps {
  open: boolean;
  onSelect: (lang: "nl" | "en") => void;
}

export function LanguageSelector({ open, onSelect }: LanguageSelectorProps) {
  if (!open) return null;
  
  return (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in p-4"
    >
      <div 
        className="bg-background border border-border/50 rounded-lg p-6 sm:p-8 shadow-2xl w-full max-w-md animate-scale-in"
      >
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 text-primary">
            <Globe className="h-7 w-7 sm:h-8 sm:w-8" />
          </div>
          
          <div className="text-center space-y-1.5 sm:space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-foreground">
              Kies je taal / Choose your language
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Selecteer je voorkeurstaal / Select your preferred language
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full mt-2">
            <Button
              onClick={() => onSelect("nl")}
              className="w-full gap-2"
              size="lg"
            >
              🇳🇱 Nederlands
            </Button>
            <Button
              onClick={() => onSelect("en")}
              variant="outline"
              className="w-full gap-2"
              size="lg"
            >
              🇬🇧 English
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}