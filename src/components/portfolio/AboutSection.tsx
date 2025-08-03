import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Code2, 
  Lightbulb, 
  Target, 
  Heart,
  Trophy,
  BookOpen,
  Rocket
} from "lucide-react";

// CONFIGURATION: Update these personal details
const aboutData = {
  introduction: "I'm a passionate Computer Science Engineering student in my final year, driven by an insatiable curiosity to solve complex problems using technology. My journey in programming began during my first year of college, and since then, I've been on an exciting adventure of continuous learning and innovation.",
  
  highlights: [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Final year CSE student with a strong foundation in algorithms, data structures, and software engineering principles."
    },
    {
      icon: Code2,
      title: "Cloud & DevOps Enthusiast",
      description: "Passionate about streamlining infrastructure and automating workflows to deliver fast, scalable, and resilient cloud-native solutions."
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Love tackling challenging problems and finding innovative solutions through creative thinking and technical expertise."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Always setting new goals and pushing boundaries to achieve excellence in everything I undertake."
    }
  ],

  interests: [
    "Cloud Computing & DevOps",
    "Artificial Intelligence & Machine Learning",
    "Open Source Contributions",
    "Tech Blogging & Knowledge Sharing",
    "Startup Ecosystem & Innovation"
  ],

  achievements: [
    {
      icon: BookOpen,
      title: "Research Paper",
      description: "Published a paper titled “Implementation and Performance Analysis of K-NN Algorithm for Classification”, highlighting its real-world performance."
    },
    {
      icon: Trophy,
      title: "Scholarship",
      description: "Received the Study in India (SII) Scholarship (2022–2026) to pursue a degree in Computer Science."
    }
  ],

  philosophy: "I believe that technology should be a force for good, solving real-world problems and making life better for everyone. My approach to development is user-centric, focusing on creating solutions that are not just technically sound but also intuitive and accessible.",

  futureGoals: [
    "Contribute to impactful open-source projects",
    "Build scalable solutions for global challenges",
    "Pursue advanced studies in AI/ML",
    "Launch a tech startup focused on social impact"
  ]
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code - my journey, passions, and what drives me forward
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="glass-card glow-on-hover">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
                {aboutData.introduction}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {aboutData.highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card glow-on-hover h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Interests & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card glow-on-hover h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <Heart className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold">Interests & Passions</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {aboutData.interests.map((interest, index) => (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="secondary" className="text-sm py-2 px-3">
                        {interest}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card glow-on-hover h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Lightbulb className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">My Philosophy</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {aboutData.philosophy}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Recent Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {aboutData.achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card glow-on-hover text-center">
                  <CardContent className="p-6">
                    <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                      <achievement.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <Card className="glass-card glow-secondary">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Future Goals</h3>
                <p className="text-muted-foreground">
                  Where I see myself heading and what I aim to achieve
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {aboutData.futureGoals.map((goal, index) => (
                  <motion.div
                    key={goal}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-lg bg-card/50 text-center"
                  >
                    <p className="text-sm font-medium">{goal}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
