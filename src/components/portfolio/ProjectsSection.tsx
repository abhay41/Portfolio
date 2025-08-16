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
  technologies: ["Docker", "Kubernetes", "AWS EKS", "Jenkins", "Prometheus", "Grafana", "ArgoCD","Nginx"],
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
},

  {
    id: 2,
    title: "Brain Tumor Detection App",
    description: "A full-stack machine learning application that detects brain tumors from MRI images.",
    image: "https://raw.githubusercontent.com/abhay41/Brain_Tumor_Detection_App/main/docs/screenshots/homepage.png",
    technologies: ["Flask", "MySQL", "HTML", "CSS", "JavaScript", "Docker", "Kubernetes", "AWS EC2","Nginx"],
    category: "Web Development & DevOps",
    demoLink: " ",
    githubLink: "https://github.com/abhay41/Brain_Tumor_Detection_App.git",
    featured: true,
    status: "In Progress",
    year: "2025",
    teamSize: "2 Developers",
    highlights: ["MRI Image Classification",
    "Full-Stack Implementation",
    "Dockerized & Kubernetes Orchestration",
    "AWS EC2 Deployment"]
  },
  {
    id: 3,
    title: "Amazon Prime Clone",
    description: "A full-scale DevOps deployment of an Amazon Prime clone demonstrating automated CI/CD, containerization, and cloud-native orchestration.",
    image: "https://raw.githubusercontent.com/abhay41/Prime-Video/main/docs/screenshots/homepage.png",
    technologies: ["NodeJS","React" "Terraform", "Jenkins", "SonarQube", "Trivy", "Docker", "AWS ECR", "AWS EKS", "ArgoCD", "Prometheus", "Grafana"],
    category: "DevOps & Cloud",
    demoLink: "",
    githubLink: "https://github.com/abhay41/Prime-Video.git",
    featured: true,
    status: "Completed",
    year: "2023",
    teamSize: "Solo Project",
    highlights: ["Automated CI/CD Pipeline with Jenkins",
    "Infrastructure as Code using Terraform",
    "Containerization with Docker & ECR",
    "Kubernetes Orchestration on AWS EKS",
    "Continuous Deployment with ArgoCD",
    "Monitoring with Prometheus & Grafana",
    "Code Quality Analysis with SonarQube",
    "Security Scanning with Trivy"]
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description: "A full-stack real-time chat application enabling secure and scalable messaging.",
    image: "https://raw.githubusercontent.com/abhay41/full-stack_chatApp/main/frontend/public/chat.png",
    technologies: ["Node.js", "Express", "MongoDB", "React","Socket.io", "Docker", "Kubernetes", "Nginx", "JWT","AWS(EC2)"],
    category: "Web Development",
    demoLink: "",
    githubLink: "https://github.com/abhay41/full-stack_chatApp.git",
    featured: true,
    status: "Completed",
    year: "2024",
    teamSize: "Solo Project",
    highlights: ["Real-Time Messaging with Socket.io",
    "User Authentication & JWT Authorization",
    "Profile Management & Online Status",
    "Responsive Modern UI with React & TailwindCSS",
    "Dockerized Frontend & Backend Containers",
    "Planned Kubernetes Orchestration",
    "Secure and Scalable Architecture"]
  },
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
