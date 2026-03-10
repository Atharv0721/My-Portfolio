import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export const HeroSection = () => {
  const { t } = useLanguage();
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const translateX = x * 12; // subtle movement
      const translateY = y * 12;

      heroRef.current.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    };

    const handleMouseLeave = () => {
      if (!heroRef.current) return;
      heroRef.current.style.transform = "translate3d(0, 0, 0)";
    };

    const el = heroRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (el) {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden transition-transform duration-200 ease-out"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shape w-96 h-96 -top-48 -left-48 bg-primary/30" />
        <div className="floating-shape w-96 h-96 -bottom-48 -right-48 bg-accent/30" style={{ animationDelay: '-2s' }} />
        <div className="floating-shape w-64 h-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500/20" style={{ animationDelay: '-4s' }} />
      </div>

      <div className="container max-w-4xl mx-auto text-center z-10 relative">
        <div className="space-y-8">
          {/* Glowing orb effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight relative">
            <span className="block opacity-0 animate-fade-in-up text-foreground/90"> {t("hero_greeting")} </span>
            <span className="block text-7xl md:text-8xl mt-2">
              <span className="inline-block opacity-0 animate-fade-in-up [animation-delay:200ms]">
                <span className="text-gradient">
                  Atharv
                </span>
              </span>
              <span className="inline-block ml-4 opacity-0 animate-fade-in-up [animation-delay:400ms]">
                <span className="text-gradient">
                  Gupta
                </span>
              </span>
            </span>

            {/* Animated underline */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full animate-shimmer"
              style={{ backgroundSize: '200% 100%' }} />
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up [animation-delay:600ms] leading-relaxed">
            {t("hero_description")}
          </p>

          <div className="pt-8 opacity-0 animate-fade-in-up [animation-delay:800ms] relative group">
            <a href="#projects" className="cosmic-button inline-block px-8 py-3 text-lg">
              {t("btn_view_my_work")}
            </a>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center group cursor-pointer">
        <span className="text-sm text-muted-foreground mb-2 opacity-70 group-hover:opacity-100 transition-opacity">
          {t("hero_scroll")}
        </span>
        <ArrowDown className="h-5 w-5 text-primary animate-bounce group-hover:scale-110 transition-transform" />
      </div>
    </section>
  );
};