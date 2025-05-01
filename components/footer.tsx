"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Mansi Sewa</h3>
            <p className="text-muted-foreground">
              Full-Stack Laravel Developer with 3.6+ years of experience specializing in building scalable web
              applications and enterprise platforms.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/mansisewa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/mansisewa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="mailto:mansisewaa@gmail.com"
                className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail size={18} />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="tel:+919101382810"
                className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Phone size={18} />
                <span className="sr-only">Phone</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <ScrollLink
                  key={item}
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {item}
                </ScrollLink>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:mansisewaa@gmail.com" className="hover:text-primary transition-colors">
                  mansisewaa@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+919101382810" className="hover:text-primary transition-colors">
                  +91 9101382810
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-1" />
                <span>Tinsukia, Assam, India</span>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-6 border-t text-center text-muted-foreground">
          <p>© {currentYear} Mansi Sewa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
