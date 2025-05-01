"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Full-Stack Developer with 3.6+ years of experience specializing in Laravel and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                <p className="text-muted-foreground mb-4">
                  Proven expertise in building scalable web applications, RESTful APIs, and cloud-integrated enterprise
                  platforms. Delivered 10+ government and enterprise projects with strong outcomes including performance
                  optimization, payment integrations, and real-time systems.
                </p>
                <p className="text-muted-foreground">
                  Seeking a growth-driven opportunity in a product-based or service company.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Master of Computer Applications (MCA)</h4>
                    <p className="text-muted-foreground">Cotton State University, Guwahati | 2018 – 2021</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Bachelor of Computer Applications (MCA)</h4>
                    <p className="text-muted-foreground">Dibrugarh University, Dibrugarh | 2015 – 2018</p>
                  </div>
                  {/* <div>
                    <h4 className="font-medium">Key Academic Projects</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                      <li>CMS Platforms: Custom content tools for non-tech users</li>
                      <li>Mulberry Yarn Inventory: Laravel + jQuery-based SCM</li>
                      <li>Pragya Survey App: Offline sync survey platform (Laravel, PostgreSQL)</li>
                    </ul>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Looking For</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/10">
                  Full-Stack Development
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  Laravel Opportunities
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  Remote Work
                </Badge>
  
                <Badge variant="outline" className="bg-primary/10">
                  Product-Based Companies
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  Service-Based Companies
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  Growth Opportunities
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
