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
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                zIndex: 99999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '8px',
                    maxWidth: '500px',
                    width: '90%',
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <Globe style={{ width: '32px', height: '32px', margin: '0 auto 1rem', color: '#3b82f6' }} />
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', marginBottom: '0.5rem' }}>
                        Kies je taal / Choose your language
                    </h2>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        Selecteer je voorkeurstaal / Select your preferred language
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                    <Button
                        onClick={() => onSelect("nl")}
                        style={{ width: '100%', padding: '1rem', fontSize: '1.125rem' }}
                        size="lg"
                    >
                        🇳🇱 Nederlands
                    </Button>
                    <Button
                        onClick={() => onSelect("en")}
                        variant="outline"
                        style={{ width: '100%', padding: '1rem', fontSize: '1.125rem' }}
                        size="lg"
                    >
                        🇬🇧 English
                    </Button>
                </div>
            </div>
        </div>
    );
}