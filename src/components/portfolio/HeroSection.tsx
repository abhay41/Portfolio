import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const ParticleBackground = () => {
  return (
    <div className="particles">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${Math.random() * 4 + 4}s`,
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center hero-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 42, 69, 0.8), rgba(34, 42, 69, 0.8)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <ParticleBackground />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Main Greeting */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hey there 👋 I'm{" "}
            <span className="gradient-text">Abhay Thakur</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="text-xl md:text-2xl text-white/90 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Making The Impossible Possible. Using 1's and 0's.
          </motion.p>

          {/* Problem solving statement */}
          <motion.p 
            className="text-lg md:text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Problem solving is what makes me unique.
          </motion.p>

          {/* Quote */}
          <motion.div 
            className="mt-8 p-6 glass-card rounded-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-lg italic text-foreground/90">
              "Strive not to be a success, but rather to be of value."
            </p>
            <p className="text-sm text-muted-foreground mt-2">– Albert Einstein</p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button variant="glass" size="xl" className="group" asChild>
              <a 
                href="https://github.com/abhay41"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                GitHub Profile
              </a>
            </Button>
            
            <Button variant="glass" size="xl" className="group" asChild>
              <a 
                href="https://www.linkedin.com/in/abhay-thakur-614b1a2b4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              variant="glass" 
              size="xl" 
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={scrollToAbout}
              className="mx-auto text-white/70 hover:text-white animate-bounce"
            >
              <ChevronDown className="w-6 h-6" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;