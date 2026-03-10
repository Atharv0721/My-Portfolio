import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", icon: "🎨" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "⚡" },
  { name: "React", level: 90, category: "frontend", icon: "⚛️" },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: "🎨" },


  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: "🟢" },
  { name: "Express", level: 75, category: "backend", icon: "🚂" },
  { name: "MongoDB", level: 70, category: "backend", icon: "🍃" },
  { name: "PostgreSQL", level: 65, category: "backend", icon: "🐘" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: "🐙" },
  { name: "VS Code", level: 95, category: "tools", icon: "💻" },
];

const categories = [
  { id: "all", key: "skills_category_all", icon: "✨" },
  { id: "frontend", key: "skills_category_frontend", icon: "🎨" },
  { id: "backend", key: "skills_category_backend", icon: "⚙️" },
  { id: "tools", key: "skills_category_tools", icon: "🔧" },
];

export const SkillsSection = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center relative">
          <span className="text-gradient">{t("skills_title")}</span>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </h2>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-500 relative group overflow-hidden",
                activeCategory === category.id
                  ? "cosmic-button"
                  : "glass-card hover:scale-105"
              )}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>{category.icon}</span>
                <span className="capitalize">{t(category.key)}</span>
              </span>
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group relative opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="gradient-border p-8 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <h3 className="font-semibold text-xl text-gradient">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="relative">
                    <div className="w-full bg-secondary/30 h-3 rounded-full overflow-hidden backdrop-blur-sm">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative"
                        style={{
                          width: "0%",
                          animation: `grow-bar 1.5s ease-out forwards`,
                          animationDelay: `${index * 100}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"
                          style={{ backgroundSize: '200% 100%' }} />
                      </div>
                    </div>

                    <div className="absolute -top-8 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-bold text-gradient">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 text-right">
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {t("skills_proficiency_level")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes grow-bar {
          from { width: 0%; }
          to { width: ${(props) => props.width}%; }
        }
      `}</style>
    </section>
  );
};