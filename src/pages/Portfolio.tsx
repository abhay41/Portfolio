import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import GitHubProfile from "@/components/portfolio/GitHubProfile";
import ContactSection from "@/components/portfolio/ContactSection";

/**
 * PORTFOLIO CUSTOMIZATION GUIDE
 * ============================
 * 
 * This portfolio is designed to be easily customizable. Here's how to update key information:
 * 
 * 1. PERSONAL INFORMATION:
 *    - Update name, tagline, and bio in HeroSection.tsx
 *    - Update contact details in ContactSection.tsx
 *    - Update GitHub username in GitHubProfile.tsx
 * 
 * 2. SKILLS:
 *    - Modify the skillCategories array in SkillsSection.tsx
 *    - Adjust proficiency levels (0-100) for each skill
 *    - Add or remove skill categories as needed
 * 
 * 3. PROJECTS:
 *    - Update the projects array in ProjectsSection.tsx
 *    - Add your own project details, links, and technologies
 *    - Update project categories for filtering
 * 
 * 4. ABOUT SECTION:
 *    - Modify aboutData object in AboutSection.tsx
 *    - Update introduction, interests, achievements, and future goals
 * 
 * 5. NAVIGATION:
 *    - Customize navigation items in Navigation.tsx
 *    - Add or remove sections as needed
 * 
 * 6. DESIGN SYSTEM:
 *    - Modify colors and themes in src/index.css
 *    - Update button variants in button.tsx
 *    - Customize animations and effects
 * 
 * 7. EXTERNAL LINKS:
 *    - Update resume download link
 *    - Update social media profiles
 *    - Update GitHub repositories
 * 
 * ACCESSIBILITY FEATURES:
 * - Keyboard navigation support
 * - Screen reader friendly
 * - High contrast mode ready
 * - Mobile responsive design
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * - Lazy loading for images
 * - Efficient animations with Framer Motion
 * - Optimized API calls for GitHub data
 * - Responsive image loading
 */

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section - First impression with personal intro */}
        <HeroSection />
        
        {/* About Section - Personal story and journey */}
        <AboutSection />
        
        {/* Skills Section - Technical proficiency visualization */}
        <SkillsSection />
        
        {/* Projects Section - Portfolio showcase with filtering */}
        <ProjectsSection />
        
        {/* GitHub Profile - Live data from GitHub API */}
        <GitHubProfile />
        
        {/* Contact Section - Contact form and information */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 bg-card/30 backdrop-blur-sm border-t border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2024 Abhay Thakur. All rights reserved.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                "Strive not to be a success, but rather to be of value." – Albert Einstein
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;