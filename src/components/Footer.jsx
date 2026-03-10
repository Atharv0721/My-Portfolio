import { ArrowUp, Github, Heart, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-12 px-4 relative border-t border-white/10 mt-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © {new Date().getFullYear()} DevAtharv. {t("footer_rights")}
            <span className="flex items-center gap-1">
              {t("footer_made_with")} <Heart size={14} className="text-red-500 animate-pulse" /> {t("footer_by")}
            </span>
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Atharv0721"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
            >
              <Github size={18} className="group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/atharv-gupta-545623324/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin size={18} className="group-hover:text-primary transition-colors" />
            </a>

          </div>

          <a
            href="#hero"
            className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 group relative overflow-hidden"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="group-hover:text-primary transition-colors relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};