"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Database,
  Layout,
  Server,
  Cloud,
  Shield,
  Wrench,
} from "lucide-react"

const skillCategories = [
  {
    name: "Languages & Frameworks",
    icon: <Code2 className="h-5 w-5" />,
    skills: ["PHP", "JavaScript (ES6+)", "TypeScript", "HTML", "CSS"],
  },
  {
    name: "Frontend",
    icon: <Layout className="h-5 w-5" />,
    skills: ["Tailwind CSS", "Bootstrap", "Vue.js", "React"],
  },
  {
    name: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: ["Laravel", "RESTful APIs", "Microservices"],
  },
  {
    name: "Databases",
    icon: <Database className="h-5 w-5" />,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    name: "DevOps/Tools",
    icon: <Wrench className="h-5 w-5" />,
    skills: ["Git", "GitHub/GitLab", "Docker", "Kubernetes", "CI/CD Pipelines"],
  },
  {
    name: "Cloud/Deployment",
    icon: <Cloud className="h-5 w-5" />,
    skills: ["AWS (EC2, S3, RDS)", "Firebase", "Digital Ocean", "Hostinger"],
  },
  {
    name: "Testing & Security",
    icon: <Shield className="h-5 w-5" />,
    skills: ["PHPUnit", "OWASP Security Standards"],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-2">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A categorized view of the tools, languages, and platforms I use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
