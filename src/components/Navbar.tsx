import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FlowHoverButton } from "@/components/ui/flow-hover-button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ThemeDropdown } from "@/components/ThemeDropdown";
import { LanguageDropdown } from "@/components/LanguageDropdown";
import { translations } from "@/lib/i18n/translations";
import codevioLogo from "@/components/codevio-logo.png";
import codevioLogoDark from "@/components/codevio-logo.darkmode.png";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
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
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const checkDarkMode = () => {
            setIsDark(document.documentElement.classList.contains("dark"));
        };
        checkDarkMode();
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-lg border-b border-border/50 py-3"
                : "bg-background/70 backdrop-blur-md border-b border-transparent py-5"
                }`}
        >
            <nav className="container flex items-center justify-between">
                <Link to="/" className="hover:opacity-70 transition-opacity">
                    <img src={isDark ? codevioLogoDark : codevioLogo} alt="Codevio" className="h-10 w-auto" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={`text-sm font-medium transition-all duration-200 relative ${location.pathname === link.href
                                ? "text-primary"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {link.label}
                            {location.pathname === link.href && (
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full" />
                            )}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-3">
                    <ThemeDropdown />
                    <LanguageDropdown />
                    <FlowHoverButton asChild size="default" variant="default">
                        <Link to="/contact">{t.startProject[language]}</Link>
                    </FlowHoverButton>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
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
                <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/30">
                    <div className="container py-6 space-y-6">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={`text-base font-medium py-2 transition-colors ${location.pathname === link.href
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div className="border-t border-border/30 pt-6 space-y-4">
                            <div className="flex gap-3">
                                <ThemeDropdown />
                                <LanguageDropdown />
                            </div>
                            <FlowHoverButton asChild size="lg" variant="default" className="w-full">
                                <Link to="/contact">{t.startProject[language]}</Link>
                            </FlowHoverButton>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}