import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ThemeDropdown } from "@/components/ThemeDropdown";
import { LanguageDropdown } from "@/components/LanguageDropdown";
import { translations } from "@/lib/i18n/translations";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { language } = useLanguage();

    const t = translations.nav;

    const navLinks = [
        { href: "/", label: t.home[language] },
        { href: "/work", label: t.work[language] },
        { href: "/services", label: t.services[language] },
        { href: "/why", label: t.why[language] },
        { href: "/about", label: t.about[language] },
        { href: "/contact", label: t.contact[language] },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-4"
                : "bg-transparent py-6"
                }`}
        >
            <nav className="container flex items-center justify-between">
                <Link
                    to="/"
                    className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
                >
                    Nova Studio
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.href
                                ? "text-foreground"
                                : "text-muted-foreground"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-2">
                    {/* Theme Dropdown */}
                    <ThemeDropdown />

                    {/* Language Dropdown */}
                    <LanguageDropdown />

                    <Button asChild variant="default" size="default">
                        <Link to="/contact">{t.startProject[language]}</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 -mr-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in">
                    <div className="container py-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`text-lg font-medium py-2 transition-colors ${location.pathname === link.href
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Mobile Theme Dropdown */}
                        <div className="py-2">
                            <ThemeDropdown />
                        </div>

                        {/* Mobile Language Dropdown */}
                        <div className="py-2">
                            <LanguageDropdown />
                        </div>

                        <Button asChild variant="default" size="lg" className="mt-4">
                            <Link to="/contact">{t.startProject[language]}</Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}