import { ArrowRight, ExternalLink, Github, Sparkles } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const projects = [
  {
    id: 1,
    titleKey: "project_1_title",
    descKey: "project_1_desc",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "IoT Sensors", "Blockchain", "Spring Boot", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/ast-haaa/astra-core",
    featured: true,
  },
  {
    id: 2,
    titleKey: "project_2_title",
    descKey: "project_2_desc",
    image: "/projects/project2.png",
    tags: ["MERN", "Firebase", "Razorpay", "AI APIs"],
    demoUrl: "#",
    githubUrl: "https://github.com/Atharv0721/AI-Interview-Platform",
    featured: true,
  },
  {
    id: 3,
    titleKey: "project_3_title",
    descKey: "project_3_desc",
    image: "/projects/project3.png",
    tags: ["Google Maps API", "Node.js", "JavaScript", " Web APIs"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

export const ProjectsSection = () => {
  const { t } = useLanguage();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="py-32 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center relative">
          <span className="text-gradient">{t("projects_title")}</span>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </h2>

        <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
          {t("projects_intro")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="gradient-border overflow-hidden card-hover h-full">
                <div className="relative h-56 overflow-hidden">
                  {/* Image with overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Floating tags */}
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium glass-card rounded-full backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary to-accent text-white rounded-full flex items-center gap-1">
                        <Sparkles size={12} />
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-8 relative">
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold mb-3 text-gradient">
                      {t(project.titleKey)}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {t(project.descKey)}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full glass-card hover:bg-primary/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-white/10">
                      <div className="flex space-x-4">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 group/link"
                        >
                          <ExternalLink size={20} className="group-hover/link:text-primary transition-colors" />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 group/link"
                        >
                          <Github size={20} className="group-hover/link:text-primary transition-colors" />
                        </a>
                      </div>

                      <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        {t("projects_view_project")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect on hover */}
              {hoveredId === project.id && (
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl -z-10 animate-pulse" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            className="cosmic-button inline-flex items-center gap-3 px-8 py-3 text-lg group"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Atharv0721"
          >
            {t("btn_check_github")}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};