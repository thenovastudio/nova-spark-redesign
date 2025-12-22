import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageSelectorProps {
  open: boolean;
  onSelect: (lang: "nl" | "en") => void;
}

export function LanguageSelector({ open, onSelect }: LanguageSelectorProps) {
  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md border-border/50 bg-background/95 backdrop-blur-sm" hideCloseButton>
        <div className="flex flex-col items-center gap-6 py-4">
          <div className="flex items-center gap-2 text-primary">
            <Globe className="h-8 w-8" />
          </div>
          
          <div className="text-center space-y-2">
            <h2 className="text-xl font-semibold text-foreground">
              Kies je taal / Choose your language
            </h2>
            <p className="text-sm text-muted-foreground">
              Selecteer je voorkeurstaal / Select your preferred language
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button
              onClick={() => onSelect("nl")}
              className="flex-1 gap-2"
              size="lg"
            >
              🇳🇱 Nederlands
            </Button>
            <Button
              onClick={() => onSelect("en")}
              variant="outline"
              className="flex-1 gap-2"
              size="lg"
            >
              🇬🇧 English
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
