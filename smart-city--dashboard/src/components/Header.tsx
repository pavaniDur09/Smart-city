import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

 /* useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };*/

  return (
    <header className="sticky top-0 z-50 py-2 sm:py-4">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 pill-nav px-4 sm:px-6">
          <div className="flex items-center min-w-0">
            <a href="/" className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-base sm:text-lg">S</span>
              </div>
              <span className="text-base sm:text-xl font-bold font-serif truncate">Smart City</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            <a href="/" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">Home</a>
            <a href="/dashboard" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">Dashboard</a>
            <a href="/about" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">About</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <Button onClick={() => window.location.href = '/dashboard'} className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-2 hover:scale-105 transition-all">
              Open Dashboard
            </Button>
            <button className="md:hidden p-1.5 sm:p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

       {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="/" className="text-sm font-medium hover:text-accent transition-colors">Home</a>
              <a href="/dashboard" className="text-sm font-medium hover:text-accent transition-colors">Dashboard</a>
              <a href="/about" className="text-sm font-medium hover:text-accent transition-colors">About</a>
              <Button onClick={() => window.location.href = '/dashboard'} className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full">
                Open Dashboard
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
