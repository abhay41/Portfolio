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
  title: "Microservices Application Deployment with Ingress",
  description: "A DevOps project that demonstrates end-to-end deployment of a microservices-based application on AWS EKS using Docker, Jenkins, and Kubernetes. Includes CI/CD automation, monitoring with Prometheus & Grafana, and GitOps deployment using ArgoCD.",
  image: "https://raw.githubusercontent.com/abhay41/Microservices-Ingress/main/screenshot/Screenshot.png",
  technologies: ["Docker", "Kubernetes", "AWS EKS", "Jenkins", "Prometheus", "Grafana", "ArgoCD"],
  category: "DevOps",
  demoLink: "https://github.com/abhay41/Microservices-Ingress.git",
  githubLink: "https://github.com/abhay41/Microservices-Ingress.git",
  featured: true,
  status: "Completed",
  year: "2025",
  teamSize: "Solo Project",
  highlights: [
    "CI/CD Pipeline with Jenkins",
    "Microservices deployment on EKS",
    "Ingress Controller setup",
    "Monitoring with Prometheus & Grafana",
    "GitOps deployment using ArgoCD"
  ]
}

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

const ProjectsSection = () => {

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


        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`glass-card glow-on-hover h-full ${project.featured ? 'ring-2 ring-primary/20' : ''}`}>
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Source Code Button */}
                  <div className="mt-4">
                    <Button variant="outline" size="sm" className="group" asChild>
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
