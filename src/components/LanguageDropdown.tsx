import { useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Languages } from 'lucide-react';

export function LanguageDropdown() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { value: 'nl' as const, label: 'Nederlands', flag: '🇳🇱' },
        { value: 'en' as const, label: 'English', flag: '🇬🇧' },
        { value: 'fr' as const, label: 'Français', flag: '🇫🇷' },
    ];

    const currentLanguage = languages.find(l => l.value === language) || languages[0];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
            >
                <Languages className="h-4 w-4" />
                <span className="uppercase">{currentLanguage.value}</span>
                <svg
                    className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-20 overflow-hidden">
                        {languages.map(({ value, label, flag }) => (
                            <button
                                key={value}
                                onClick={() => {
                                    setLanguage(value);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-colors ${language === value
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-foreground hover:bg-secondary/50'
                                    }`}
                            >
                                <span className="text-lg">{flag}</span>
                                <span>{label}</span>
                                {language === value && (
                                    <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}