import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ThemeDropdown } from "@/components/ThemeDropdown";
import { LanguageDropdown } from "@/components/LanguageDropdown";
import { translations } from "@/lib/i18n/translations";
import codeboLogo from "@/components/codebo-logo.png";
import codeboLogoDark from "@/components/codebo-logo.darkmode.png";

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
        { href: "/apps", label: t.apps[language] },
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
                ? "bg-background border-b border-border py-4"
                : "bg-background border-b border-border/30 py-6"
                }`}
        >
            <nav className="container flex items-center justify-between">
                <Link
                    to="/"
                    className="hover:opacity-80 transition-opacity"
                >
                    <img src={isDark ? codeboLogoDark : codeboLogo} alt="Codebo" className="h-12 w-auto" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={`text-sm font-medium transition-colors duration-200 relative pb-1 ${location.pathname === link.href
                                ? "text-secondary border-b-2 border-primary"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    {/* Theme Dropdown */}
                    <ThemeDropdown />

                    {/* Language Dropdown */}
                    <LanguageDropdown />

                    <Button asChild variant="default" size="default" className="bg-primary hover:bg-primary/85 text-primary-foreground font-bold px-6 py-2 shadow-lg hover:shadow-xl transition-all">
                        <Link to="/contact">{t.startProject[language]}</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 -mr-2 text-secondary hover:text-primary transition-colors"
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
                <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
                    <div className="container py-6 flex flex-col gap-4">
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

                        {/* Mobile Theme Dropdown */}
                        <div className="py-2">
                            <ThemeDropdown />
                        </div>

                        {/* Mobile Language Dropdown */}
                        <div className="py-2">
                            <LanguageDropdown />
                        </div>

                        <Button asChild variant="default" size="lg" className="mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                            <Link to="/contact">{t.startProject[language]}</Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}