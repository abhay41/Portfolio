import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  Wrench,
  Brain,
  Shield
} from "lucide-react";

// CONFIGURATION: Update these skills and proficiency levels
const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
      { name: "Go", level: 70 },
      { name: "Rust", level: 65 }
    ]
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: [
      { name: "React/Next.js", level: 92 },
      { name: "Node.js/Express", level: 88 },
      { name: "HTML/CSS", level: 95 },
      { name: "GraphQL", level: 78 },
      { name: "REST APIs", level: 90 },
      { name: "WebSockets", level: 75 }
    ]
  },
  {
    title: "Databases & Storage",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "Redis", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "Elasticsearch", level: 70 },
      { name: "Firebase", level: 85 }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 72 },
      { name: "CI/CD", level: 78 },
      { name: "Linux/Unix", level: 82 },
      { name: "Terraform", level: 68 }
    ]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 78 },
      { name: "Android (Java/Kotlin)", level: 75 },
      { name: "iOS (Swift)", level: 65 },
      { name: "Progressive Web Apps", level: 88 }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "TensorFlow/PyTorch", level: 75 },
      { name: "scikit-learn", level: 80 },
      { name: "OpenAI APIs", level: 85 },
      { name: "Computer Vision", level: 70 },
      { name: "NLP", level: 72 },
      { name: "Data Analysis", level: 85 }
    ]
  },
  {
    title: "Security & Tools",
    icon: Shield,
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Cybersecurity", level: 75 },
      { name: "Testing (Jest/Cypress)", level: 82 },
      { name: "Code Review", level: 88 },
      { name: "System Design", level: 80 },
      { name: "Agile/Scrum", level: 85 }
    ]
  },
  {
    title: "Development Tools",
    icon: Wrench,
    skills: [
      { name: "VS Code", level: 95 },
      { name: "IntelliJ IDEA", level: 85 },
      { name: "Postman", level: 90 },
      { name: "Figma", level: 78 },
      { name: "Webpack/Vite", level: 82 },
      { name: "ESLint/Prettier", level: 88 }
    ]
  }
];

const SkillsSection = () => {
  const getSkillColor = (level: number) => {
    if (level >= 90) return "from-green-500 to-emerald-500";
    if (level >= 80) return "from-blue-500 to-cyan-500";
    if (level >= 70) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-pink-500";
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My proficiency across various technologies, frameworks, and tools that I use to build amazing solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card glow-on-hover h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.1 
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar h-2">
                        <motion.div
                          className={`skill-progress bg-gradient-to-r ${getSkillColor(skill.level)}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Overall Proficiency Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="glass-card glow-primary">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Overall Technical Proficiency</h3>
                <p className="text-muted-foreground">
                  Based on years of experience, project complexity, and continuous learning
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Years Coding</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-glow mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Learning Mode</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;