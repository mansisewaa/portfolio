"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    company: "Indigi Consulting and Solutions Pvt. Ltd.",
    location: "Guwahati",
    position: "Full-Stack Developer",
    period: "Feb 2024 – Present",
    responsibilities: [
      "Developed full-stack enterprise apps using Laravel for both backend and frontend (Livewire, JS)",
      "Designed RESTful APIs to power mobile apps (Flutter, Android)",
      "Created admin dashboards with role-based access, analytics, and reporting tools",
    ],
    projects: [
      {
        name: "GMDWSB (Jal Board)",
        highlights: [
          "Integrated Razorpay for online billing/payments",
          "Revamped UI/UX for performance & accessibility",
          "Built real-time usage reports and dashboards",
        ],
      },
    ],
    technologies: ["Laravel", "Livewire", "JavaScript", "RESTful APIs", "Flutter", "Android"],
  },
  {
    company: "Web.com (India) Pvt. Ltd.",
    location: "Guwahati",
    position: "Programmer / Full-Stack Developer",
    period: "Nov 2021 – Jan 2024",
    responsibilities: [
      "Led backend development using Laravel + Livewire on large-scale platforms",
      "Delivered 6+ key projects for government & private sector",
    ],
    projects: [
      {
        name: "Assam Police Seva Setu",
        highlights: ["Complaint tracking portal", "Livewire UI", "Passed Gov audit"],
      },
      {
        name: "Fertilizer Tracking System",
        highlights: ["Real-time GIS tracking", "Automated reports"],
      },
      {
        name: "HRMIS (APCL)",
        highlights: ["Payroll", "Leave tracking", "Performance reviews"],
      },
      {
        name: "Healthcare Lab System",
        highlights: ["Secure cloud-based lab record management"],
      },

      {
        name: "Pragya Survey App",
        highlights: ["Mobile app for survey data collection", "Offline data sync"],
      },
    ],
    technologies: ["Laravel", "Livewire", "MySQL", "GIS", "Cloud Services"],
  },
  {
    company: "Rashtriya Uchattar Shiksha Abhiyan",
    location: "Guwahati",
    position: "Intern",
    period: "Feb 2021 – Jul 2021",
    responsibilities: [
      "Built mobile app (Laravel + React Native) for HR and admin tracking",
      "Designed internal portals for communication and resource sharing",
    ],
    projects: [],
    technologies: ["Laravel", "React Native", "MySQL"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key projects I've worked on.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.position}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 text-primary">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{exp.position}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-lg font-medium mb-4">
                        {exp.company}, {exp.location}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Responsibilities:</h4>
                          <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                        </div>

                        {exp.projects.length > 0 && (
                          <div>
                            <h4 className="font-medium mb-2">Key Projects:</h4>
                            <div className="space-y-3">
                              {exp.projects.map((project, i) => (
                                <div key={i} className="pl-4 border-l-2 border-primary/30">
                                  <h5 className="font-medium">{project.name}</h5>
                                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-1">
                                    {project.highlights.map((highlight, j) => (
                                      <li key={j}>{highlight}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
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
