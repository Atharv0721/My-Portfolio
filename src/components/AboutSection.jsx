import { Briefcase, Code, Sparkles, Users } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-accent/5 to-transparent" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center relative">
          <span className="text-gradient">{t("about_title")}</span>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8 glass-card p-8 rounded-2xl">
            <h3 className="text-3xl font-semibold text-gradient">
              {t("about_heading")}
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("about_paragraph")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button text-center">
                {t("btn_get_in_touch")}
              </a>

              <a
                href="https://drive.google.com/file/d/1_UumUHIpvohPfjYiIe6BFURhNLu0MqFM/view?usp=sharing"
                className="px-6 py-2 rounded-full border-2 border-primary/50 text-primary 
                         hover:bg-primary/10 transition-all duration-300 hover:scale-105 
                         hover:border-primary hover:shadow-lg hover:shadow-primary/20 text-center"
              >
                {t("btn_download_cv")}
              </a>
            </div>
          </div>

          {/* Right column - Cards */}
          <div className="grid grid-cols-1 gap-8">
            <div className="gradient-border p-8 card-hover group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-6 relative z-10">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-xl mb-2 text-gradient">{t("about_card_webdev_title")}</h4>
                  <p className="text-muted-foreground">
                    {t("about_card_webdev_body")}
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-8 card-hover group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-6 relative z-10">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-xl mb-2 text-gradient">{t("about_card_uiux_title")}</h4>
                  <p className="text-muted-foreground">
                    {t("about_card_uiux_body")}
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-8 card-hover group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-6 relative z-10">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-xl mb-2 text-gradient">{t("about_card_innovative_title")}</h4>
                  <p className="text-muted-foreground">
                    {t("about_card_innovative_body")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
