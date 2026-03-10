import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t("contact_toast_title"),
        description: t("contact_toast_description"),
        duration: 5000,
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-accent/5 to-transparent" />

        {/* Animated grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.1) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center relative">
          <span className="text-gradient">{t("contact_title")}</span>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </h2>

        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          {t("contact_intro")}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-8 text-gradient">
                {t("contact_information")}
              </h3>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: t("contact_label_email"), value: "guptaatharv748@gmail.com", href: "mailto:guptaatharv748@gmail.com", color: "from-blue-500/20 to-purple-500/20" },
                  { icon: Phone, label: t("contact_label_phone"), value: "+91 7983723036", href: "tel:+917983723036", color: "from-green-500/20 to-teal-500/20" },
                  { icon: MapPin, label: t("contact_label_location"), value: "Bareilly, Uttar Pradesh, India", href: null, color: "from-red-500/20 to-orange-500/20" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className={cn(
                      "p-4 rounded-2xl bg-gradient-to-br transition-all duration-300 group-hover:scale-110",
                      item.color
                    )}>
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-1">
                        {item.label}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors text-lg"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground text-lg">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-2xl">
              <h4 className="font-medium text-lg mb-6 text-gradient">{t("contact_connect_with_me")}</h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/atharv-gupta-545623324/", label: "LinkedIn", color: "from-blue-600/20 to-blue-400/20" },
                  { icon: Instagram, href: "https://www.instagram.com/ath.arv.7/", label: "Instagram", color: "from-pink-500/20 to-purple-500/20" },
                  { icon: Github, href: "https://github.com/Atharv0721", label: "GitHub", color: "from-gray-600/20 to-gray-400/20" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "p-4 rounded-2xl bg-gradient-to-br transition-all duration-300",
                      "hover:scale-110 hover:shadow-lg group/icon",
                      social.color
                    )}
                  >
                    <social.icon className="h-6 w-6 text-foreground group-hover/icon:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-8 text-gradient">
              {t("contact_send_message")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">
                  {t("contact_your_name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 
                           focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent
                           transition-all duration-300 placeholder:text-muted-foreground/50"
                  placeholder={t("contact_placeholder_name")}
                />
              </div>

              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">
                  {t("contact_your_email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 
                           focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent
                           transition-all duration-300 placeholder:text-muted-foreground/50"
                  placeholder={t("contact_placeholder_email")}
                />
              </div>

              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">
                  {t("contact_your_message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 
                           focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent
                           transition-all duration-300 placeholder:text-muted-foreground/50 resize-none"
                  placeholder={t("contact_placeholder_message")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-3 py-3 text-lg relative overflow-hidden group",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    {t("contact_sending")}
                  </>
                ) : (
                  <>
                    {t("contact_send_message")}
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};