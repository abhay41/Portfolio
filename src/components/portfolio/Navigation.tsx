import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Code, 
  Github, 
  Mail, 
  Award,
  Download,
  Moon,
  Sun,
  Palette
} from "lucide-react";

// CONFIGURATION: Navigation items
const navItems = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Award },
  { label: "Projects", href: "#projects", icon: Code },
  { label: "GitHub", href: "#github", icon: Github },
  { label: "Contact", href: "#contact", icon: Mail },
];

// Theme configuration
const themes = [
  { name: "Default", value: "default" },
  { name: "Ocean", value: "ocean" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("default");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace("#", ""));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(href.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    const currentIndex = themes.findIndex(theme => theme.value === currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex].value;
    setCurrentTheme(nextTheme);
    
    // Apply theme to document root
    document.documentElement.className = nextTheme === 'default' ? '' : nextTheme;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md bg-background/80" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button
                variant="ghost"
                onClick={() => scrollToSection("#hero")}
                className="text-xl font-bold hover:text-primary"
              >
                AT
              </Button>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden md:flex items-center space-x-1"
            >
              {navItems.map((item, index) => (
                <Button
                  key={item.label}
                  variant={activeSection === item.href.replace("#", "") ? "default" : "ghost"}
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className="transition-all duration-200"
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-2"
            >
              {/* Theme Switcher */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hidden sm:flex"
                title={`Switch to ${themes[(themes.findIndex(t => t.value === currentTheme) + 1) % themes.length].name} theme`}
              >
                <Palette className="w-4 h-4" />
              </Button>

              {/* Resume Download */}
              <Button variant="gradient" size="sm" className="hidden sm:flex" asChild>
                <a href="/Resume_Abhay.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  View Resume
                </a>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -20
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-16 left-0 right-0 z-40 md:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <Card className="mx-4 glass-card">
          <div className="p-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant={activeSection === item.href.replace("#", "") ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className="w-full justify-start transition-all duration-200"
              >
                <item.icon className="w-4 h-4 mr-3" />
                {item.label}
              </Button>
            ))}
            
            {/* Mobile Action Buttons */}
            <div className="pt-2 mt-2 border-t border-border">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-full justify-start mb-2"
              >
                <Palette className="w-4 h-4 mr-3" />
                Change Theme ({themes.find(t => t.value === currentTheme)?.name})
              </Button>
              
              <Button variant="gradient" size="sm" className="w-full justify-start" asChild>
                <a href="/Resume_Abhay.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-3" />
                  View Resume
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Floating Action Button (Mobile) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed bottom-6 right-6 z-40 md:hidden"
      >
        <Button
          variant="gradient"
          size="icon"
          className="w-14 h-14 rounded-full glow-on-hover"
          onClick={() => scrollToSection("#contact")}
        >
          <Mail className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
        style={{
          scaleX: typeof window !== 'undefined' ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0,
          transformOrigin: "0%"
        }}
      >
        <div className="h-full bg-gradient-to-r from-primary to-secondary w-full" />
      </motion.div>
    </>
  );
};

export default Navigation;