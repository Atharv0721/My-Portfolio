import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const navItems = [
  { key: "nav_home", href: "#hero" },
  { key: "nav_about", href: "#about" },
  { key: "nav_skills", href: "#skills" },
  { key: "nav_projects", href: "#projects" },
  { key: "nav_contact", href: "#contact" },
];

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold flex items-center group"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-gradient text-2xl"> Portfolio </span>

          </span>
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex space-x-1">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group",
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {t(item.key)}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute inset-0 bg-primary/10 rounded-full animate-pulse-subtle" />
                )}
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>

          {/* language selector */}
          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-3 py-1 rounded-full text-xs font-medium bg-background/70 border border-white/10 text-foreground/80 focus:outline-none cursor-pointer"
              aria-label={t("nav_language_label")}
            >
              <option value="en">EN</option>
              <option value="hi">HI</option>
              <option value="es">ES</option>
              <option value="ja">JA</option>
              <option value="fr">FR</option>
              <option value="ar">AR</option>
              <option value="de">DE</option>
            </select>
          </div>
        </div>

        {/* mobile nav button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 relative group"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center",
            "transition-all duration-500 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-6 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "px-6 py-3 rounded-full transition-all duration-300 relative group",
                  activeSection === item.href.substring(1)
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80 hover:text-primary hover:bg-white/5"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
            <div className="pt-8 flex justify-center">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-4 py-2 rounded-full text-sm font-medium bg-background/80 border border-white/10 text-foreground/80 focus:outline-none cursor-pointer"
                aria-label={t("nav_language_label")}
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
                <option value="es">Español</option>
                <option value="ja">日本語</option>
                <option value="fr">Français</option>
                <option value="ar">العربية</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};