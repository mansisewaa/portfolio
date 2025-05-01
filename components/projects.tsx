"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projectCategories = ["All", "Web Applications", "APIs", "Mobile", "Enterprise"]

const projects = [
  
  {
    title: "Assam Police Seva Setu",
    description: "Complaint tracking portal for citizens to file and track police complaints.",
    category: "Web Applications",
    image: "/project.png",
    technologies: ["Laravel", "Livewire", "MySQL", "Bootstrap", "jQuery"],
    features: [
      "User authentication and role-based access control",
      "Complaint filing and tracking system",
      "Real-time status updates and notifications",
      "Admin dashboard for police personnel",
    ],
    // demoLink: "#",
    // githubLink: "#",
  },
  {
    title: "GMDWSB (Jal Board)",
    description: "A comprehensive water management system with online billing and payment integration.",
    category: "Enterprise",
    image: "/project.png",
    technologies: ["Laravel", "Livewire", "MySQL", "Razorpay", "Tailwind CSS"],
    features: [
      "Online bill payment through Razorpay integration",
      "Real-time water usage monitoring and reporting",
      "Admin dashboard with analytics and user management",
      "Mobile-responsive interface for accessibility",
    ],
    // demoLink: "#",
    // githubLink: "#",
  },
  {
    title: "Fertilizer Tracking System",
    description: "GIS-based system for tracking fertilizer distribution and usage.",
    category: "Web Applications",
    image: "/project.png",
    technologies: ["Laravel", "GIS", "MySQL", "JavaScript", "Bootstrap"],
    features: [
      "Real-time GIS tracking of fertilizer distribution",
      "Automated report generation",
      "Inventory management system",
      "Mobile app integration for field agents",
    ],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "HRMIS (APCL)",
    description: "Human Resource Management Information System for Assam Power Company Limited.",
    category: "Enterprise",
    image: "/project.png",
    technologies: ["Laravel", "MySQL", "jQuery", "Bootstrap", "AJAX"],
    features: [
      "Employee database management",
      "Payroll processing and management",
      "Leave tracking and approval workflow",
      "Performance review system",
    ],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Healthcare Lab System",
    description: "Secure cloud-based laboratory record management system for healthcare providers.",
    category: "Web Applications",
    image: "/project.png",
    technologies: ["Laravel", "MySQL", "AWS", "Bootstrap", "jQuery"],
    features: [
      "Secure patient record management",
      "Lab test result tracking and reporting",
      "Doctor and patient portals",
      "Integration with existing healthcare systems",
    ],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Pragya Survey App",
    description: "Offline sync survey platform for field data collection with robust backend infrastructure.",
    category: "APIs",
    image: "/project.png",
    technologies: ["Laravel", "PostgreSQL", "Livewire", "jQuery", "Offline Sync"],
    features: [
      "Backend infrastructure with Laravel and PostgreSQL",
      "Field survey data collection and synchronization",
      "Dynamic form handling with Livewire and jQuery",
      "Improved data accuracy and collection efficiency",
    ],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "HR Tracking Mobile App",
    description: "Mobile application for HR and admin tracking developed during internship.",
    category: "Mobile",
    image: "/project.png",
    technologies: ["Laravel", "React Native", "MySQL", "RESTful API"],
    features: [
      "Employee attendance tracking",
      "Leave application and approval",
      "Task assignment and tracking",
      "Push notifications for updates",
    ],
    demoLink: "#",
    githubLink: "#",
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my key projects and technical achievements.
          </p>
        </motion.div>

        <Tabs defaultValue="All" className="mb-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
            {projectCategories.map((category) => (
              <TabsTrigger key={category} value={category} onClick={() => setActiveCategory(category)}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-primary/10">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* <div className="flex gap-2 mt-auto">
                    <Button variant="outline" size="sm" className="gap-1" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github size={14} />
                        Code
                      </a>
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
