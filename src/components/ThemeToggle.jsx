import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-[60] p-3 rounded-full transition-all duration-500",
        "focus:outline-none group overflow-hidden",
        isDarkMode 
          ? "bg-yellow-500/20 hover:bg-yellow-500/30" 
          : "bg-blue-500/20 hover:bg-blue-500/30"
      )}
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" 
           style={{ backgroundSize: '200% 100%' }} />
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-400 relative z-10 animate-spin-slow" />
      ) : (
        <Moon className="h-6 w-6 text-blue-400 relative z-10" />
      )}
    </button>
  );
};