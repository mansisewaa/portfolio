"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"

export default function Hero() {
  const handleDownloadResume = () => {
    // In a real implementation, this would point to your actual resume file
    const link = document.createElement("a")
    link.href = "Mansi-Sewa-Resume.pdf"
    link.download = "Mansi-Sewa-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Mansi Sewa</h1>
              <h2 className="text-xl md:text-2xl font-medium text-primary">Full-Stack Laravel Developer</h2>
              <p className="text-muted-foreground max-w-md">
                3.6+ years of experience specializing in Laravel and modern web technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={handleDownloadResume} className="gap-2">
                <Download size={16} />
                Download Resume
              </Button>
              <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                <Button variant="outline" className="gap-2 w-full sm:w-auto">
                  <Mail size={16} />
                  Contact Me
                </Button>
              </ScrollLink>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>Tinsukia, Assam, India</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail size={16} />
                <a href="mailto:mansisewaa@gmail.com" className="hover:text-primary transition-colors">
                  mansisewaa@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-1">
                <Phone size={16} />
                <a href="tel:+919101382810" className="hover:text-primary transition-colors">
                  +91 9101382810
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/mansi-sewa-3677ba1b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/mansisewaa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240524_222016_028.jpg-2NMJ9vOzAg0NDObSKR54HlSKy8nuYP.jpeg"
                alt="Mansi Sewa"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex flex-col items-center cursor-pointer text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce mt-2"></div>
            </div>
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  )
}
