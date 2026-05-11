import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { FlowHoverButton } from "@/components/ui/flow-hover-button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { CurtainThemeToggle } from "@/components/ui/curtain-theme-toggle";
import { LanguageDropdown } from "@/components/LanguageDropdown";
import { ServicesDropdown } from "@/components/ServicesDropdown";
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
        { href: "/pricing", label: t.pricing[language] },
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

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isMobileMenuOpen]);

    // ── Mobile Menu (rendered via Portal on document.body) ──────
    const mobileMenu = createPortal(
        <div
            className={`lg:hidden fixed inset-0 z-[9998] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                isMobileMenuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            }`}
            style={{ backgroundColor: "hsl(var(--background))" }}
        >
            <div className="flex flex-col justify-between h-full pt-24 pb-8 px-6">
                {/* Links */}
                <div className="flex flex-col gap-1">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={`group flex items-center gap-4 py-3 px-4 rounded-xl transition-all duration-300 ${
                                location.pathname === link.href
                                    ? "bg-primary text-primary-foreground"
                                    : "text-foreground hover:bg-muted/50"
                            }`}
                            style={{
                                transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-30px)",
                                opacity: isMobileMenuOpen ? 1 : 0,
                                transition: `transform 0.4s cubic-bezier(0.76, 0, 0.24, 1) ${i * 60 + 100}ms, opacity 0.4s ease ${i * 60 + 100}ms`,
                            }}
                        >
                            <span className={`text-xs font-bold tabular-nums w-6 ${
                                location.pathname === link.href ? "text-primary-foreground/50" : "text-primary/50"
                            }`}>
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-xl font-semibold tracking-tight">
                                {link.label}
                            </span>
                            {location.pathname === link.href && (
                                <ArrowRight className="h-4 w-4 ml-auto opacity-60" />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Bottom section */}
                <div
                    className="space-y-5"
                    style={{
                        transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                        opacity: isMobileMenuOpen ? 1 : 0,
                        transition: "transform 0.5s cubic-bezier(0.76, 0, 0.24, 1) 0.35s, opacity 0.5s ease 0.35s",
                    }}
                >
                    <div className="border-t border-border/30 pt-5 flex items-center justify-between">
                        <div className="flex items-center border border-border/50 rounded-lg">
                            <CurtainThemeToggle buttonSize={38} duration={600} />
                            <div className="w-px h-5 bg-border/50" />
                            <LanguageDropdown />
                        </div>
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            {language === "nl" ? "Beschikbaar" : language === "fr" ? "Disponible" : "Available"}
                        </span>
                    </div>
                    <FlowHoverButton asChild size="lg" variant="default" className="w-full">
                        <Link to="/contact">
                            {t.startProject[language]}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </FlowHoverButton>
                </div>
            </div>
        </div>,
        document.body
    );

    return (
        <>
            {mobileMenu}
            <header
                className={`fixed z-[9999] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isScrolled
                    ? "top-4 left-4 right-4 lg:left-8 lg:right-8 xl:max-w-7xl xl:mx-auto bg-background/80 backdrop-blur-xl border border-border/50 py-3 rounded-2xl shadow-sm"
                    : "top-0 left-0 right-0 bg-background/70 backdrop-blur-md border-b border-transparent py-5"
                    }`}
            >
                <nav className="container px-4 md:px-6 flex items-center justify-between">
                    <Link to="/" className="hover:opacity-70 transition-opacity">
                        <img src={isDark ? codevioLogoDark : codevioLogo} alt="Codevio" className="h-10 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isServices = link.href === "/services";
                            const linkElement = (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={`text-sm font-medium transition-all duration-200 px-3 py-1.5 rounded-lg ${location.pathname === link.href && !isServices
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );

                            if (isServices) {
                                return (
                                    <ServicesDropdown key={link.href} isActive={location.pathname === link.href}>
                                        {link.label}
                                    </ServicesDropdown>
                                );
                            }

                            return linkElement;
                        })}
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <div className="flex items-center border border-border/50 rounded-lg">
                            <CurtainThemeToggle buttonSize={36} duration={600} />
                            <div className="w-px h-5 bg-border/50" />
                            <LanguageDropdown />
                        </div>
                        <FlowHoverButton asChild size="default" variant="default">
                            <Link to="/contact">{t.startProject[language]}</Link>
                        </FlowHoverButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted/50 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-5 h-4">
                            <span className={`absolute left-0 w-full h-[2px] bg-foreground rounded-full transition-all duration-300 ${isMobileMenuOpen ? "top-[7px] rotate-45" : "top-0"}`} />
                            <span className={`absolute left-0 w-full h-[2px] bg-foreground rounded-full transition-all duration-300 top-[7px] ${isMobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"}`} />
                            <span className={`absolute left-0 w-full h-[2px] bg-foreground rounded-full transition-all duration-300 ${isMobileMenuOpen ? "top-[7px] -rotate-45" : "top-[14px]"}`} />
                        </div>
                    </button>
                </nav>
            </header>
        </>
    );
}