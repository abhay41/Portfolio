import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  Play, 
  Filter,
  Calendar,
  Users,
  Star
} from "lucide-react";

// CONFIGURATION: Update these projects with your actual projects
const projects = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "An intelligent task management application that uses machine learning to prioritize tasks, predict completion times, and suggest optimal schedules. Features natural language processing for voice commands and smart notifications.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "Python", "TensorFlow", "MongoDB", "WebSocket"],
    category: "AI/ML",
    demoLink: "https://demo-taskmanager.vercel.app",
    githubLink: "https://github.com/abhay41/ai-task-manager",
    featured: true,
    status: "Completed",
    year: "2024",
    teamSize: "Solo Project",
    highlights: ["Smart Task Prioritization", "Voice Commands", "Predictive Analytics"]
  },
  {
    id: 2,
    title: "E-Commerce Microservices Platform",
    description: "A scalable e-commerce platform built with microservices architecture, featuring user authentication, product catalog, order management, payment processing, and real-time inventory tracking.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
    category: "Web Development",
    demoLink: "https://ecommerce-demo.netlify.app",
    githubLink: "https://github.com/abhay41/ecommerce-microservices",
    featured: true,
    status: "In Progress",
    year: "2024",
    teamSize: "3 Developers",
    highlights: ["Microservices Architecture", "Real-time Updates", "Payment Integration"]
  },
  {
    id: 3,
    title: "Blockchain Voting System",
    description: "A secure, transparent voting system built on Ethereum blockchain ensuring vote integrity, anonymity, and tamper-proof results. Features smart contracts and a user-friendly web interface.",
    image: "/api/placeholder/600/400",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS", "MetaMask"],
    category: "Blockchain",
    demoLink: "https://blockchain-voting.herokuapp.com",
    githubLink: "https://github.com/abhay41/blockchain-voting",
    featured: false,
    status: "Completed",
    year: "2023",
    teamSize: "2 Developers",
    highlights: ["Smart Contracts", "Secure Voting", "Blockchain Technology"]
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description: "A modern chat application with real-time messaging, file sharing, group chats, video calls, and end-to-end encryption. Built with modern web technologies for optimal performance.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Socket.io", "Node.js", "WebRTC", "MongoDB", "JWT"],
    category: "Web Development",
    demoLink: "https://realtime-chat-app.vercel.app",
    githubLink: "https://github.com/abhay41/realtime-chat",
    featured: false,
    status: "Completed",
    year: "2024",
    teamSize: "Solo Project",
    highlights: ["Real-time Messaging", "Video Calls", "End-to-End Encryption"]
  },
  {
    id: 5,
    title: "IoT Weather Monitoring System",
    description: "An IoT-based weather monitoring system using sensors to collect environmental data, with a web dashboard for real-time visualization and historical data analysis.",
    image: "/api/placeholder/600/400",
    technologies: ["Arduino", "Python", "Flask", "React", "SQLite", "Chart.js"],
    category: "IoT",
    demoLink: "https://weather-monitor.netlify.app",
    githubLink: "https://github.com/abhay41/iot-weather-monitor",
    featured: false,
    status: "Completed",
    year: "2023",
    teamSize: "Solo Project",
    highlights: ["IoT Integration", "Real-time Data", "Data Visualization"]
  },
  {
    id: 6,
    title: "Mobile Fitness Tracker",
    description: "A comprehensive fitness tracking mobile app with workout planning, progress tracking, social features, and AI-powered coaching recommendations.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Firebase", "TensorFlow Lite", "Redux", "Expo"],
    category: "Mobile Development",
    demoLink: "https://fitness-tracker-demo.expo.dev",
    githubLink: "https://github.com/abhay41/fitness-tracker",
    featured: false,
    status: "In Progress",
    year: "2024",
    teamSize: "2 Developers",
    highlights: ["Mobile App", "AI Coaching", "Social Features"]
  }
];

const categories = ["All", "Web Development", "AI/ML", "Mobile Development", "Blockchain", "IoT"];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory;
    const featuredMatch = !showFeaturedOnly || project.featured;
    return categoryMatch && featuredMatch;
  });

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my technical skills and problem-solving abilities
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
          
          <Button
            variant={showFeaturedOnly ? "default" : "outline"}
            size="sm"
            onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
            className="flex items-center gap-2"
          >
            <Star className="w-4 h-4" />
            Featured Only
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`glass-card glow-on-hover h-full ${project.featured ? 'ring-2 ring-primary/20' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        {project.featured && (
                          <Badge variant="default" className="text-xs">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.year}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {project.teamSize}
                        </div>
                        <Badge 
                          variant={project.status === "Completed" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.highlights.map((highlight) => (
                        <Badge key={highlight} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="default" size="sm" asChild className="flex-1">
                      <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Play className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                    
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Filter className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters to see more projects.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass-card glow-primary">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub profile for a complete list of projects and contributions
              </p>
              <Button variant="gradient" size="lg" asChild>
                <a 
                  href="https://github.com/abhay41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  View All Projects on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;