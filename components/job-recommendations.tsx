"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, ExternalLink, MapPin, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

// Mock job data - in a real implementation, this would come from an API
const mockJobs = [
  {
    id: 1,
    title: "Senior Laravel Developer",
    company: "TechCorp Solutions",
    location: "Remote",
    type: "Full-time",
    description: "Looking for an experienced Laravel developer to join our team and work on enterprise applications.",
    skills: ["Laravel", "PHP", "MySQL", "Vue.js", "RESTful APIs"],
    link: "#",
    postedDate: "2 days ago",
    matchScore: 95,
  },
  {
    id: 2,
    title: "Full-Stack Web Developer",
    company: "Digital Innovations",
    location: "Guwahati, Assam",
    type: "Full-time",
    description: "Join our team to build scalable web applications using Laravel and modern frontend frameworks.",
    skills: ["Laravel", "JavaScript", "React", "MySQL", "AWS"],
    link: "#",
    postedDate: "1 week ago",
    matchScore: 90,
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "CloudTech Systems",
    location: "Remote",
    type: "Contract",
    description:
      "We're looking for a backend developer with strong Laravel experience to work on our cloud-based products.",
    skills: ["Laravel", "PHP", "Docker", "Microservices", "PostgreSQL"],
    link: "#",
    postedDate: "3 days ago",
    matchScore: 85,
  },
  {
    id: 4,
    title: "Laravel Developer",
    company: "WebSolutions India",
    location: "Bangalore (Remote Option)",
    type: "Full-time",
    description: "Join our growing team to develop and maintain Laravel-based applications for our clients.",
    skills: ["Laravel", "PHP", "MySQL", "JavaScript", "Git"],
    link: "#",
    postedDate: "5 days ago",
    matchScore: 80,
  },
]

export default function JobRecommendations() {
  const [searchTerm, setSearchTerm] = useState("")
  const [jobs, setJobs] = useState(mockJobs)

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setJobs(mockJobs)
      return
    }

    const filtered = mockJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())),
    )
    setJobs(filtered)
  }, [searchTerm])

  return (
    <section id="job-recommendations" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-2">Job Recommendations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Based on your skills and experience, here are some job opportunities that might interest you.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search by title, company, or skill..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-6">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-semibold">{job.title}</h3>
                            <Badge variant="outline" className="bg-primary/10">
                              {job.matchScore}% Match
                            </Badge>
                          </div>
                          <span className="text-sm text-muted-foreground">Posted {job.postedDate}</span>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{job.company}</span>
                          </div>
                          <div className="hidden md:block text-muted-foreground">•</div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{job.location}</span>
                          </div>
                          <div className="hidden md:block text-muted-foreground">•</div>
                          <span>{job.type}</span>
                        </div>

                        <p className="text-muted-foreground mb-4">{job.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <Button variant="outline" size="sm" className="gap-1" asChild>
                          <a href={job.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={14} />
                            View Job
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No jobs found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
