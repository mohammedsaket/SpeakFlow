"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "../components/ui/card"
import profile from "../public/profile.png"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-tr-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80">
            Senior Frontend Developer with 5+ years specializing in React, TypeScript, and Next.js. Expert in
            architecting scalable UI systems, implementing design systems, and integrating AI-powered features. Proven
            track record of leading front-end teams and delivering high-performance web applications that drive business
            value.
          </p>
        </motion.div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 z-10"></div>
              <Image
                src={profile}
                alt="Mohammed Saket"
                width={550}
                height={500}
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="mb-6 text-foreground/80">
              I'm passionate about creating exceptional user experiences through clean, efficient code and innovative
              solutions. With experience at companies like Presto Labs and Tata Consultancy Services (working with
              Apple), I've developed a deep understanding of what makes great frontend applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card className="card-hover border-primary/10">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                  <div className="text-sm text-foreground/70">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="card-hover border-secondary/10">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">35+</div>
                  <div className="text-sm text-foreground/70">Components Built</div>
                </CardContent>
              </Card>
              <Card className="card-hover border-accent/10">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">1000+</div>
                  <div className="text-sm text-foreground/70">Bugs Resolved</div>
                </CardContent>
              </Card>
              <Card className="card-hover border-primary/10">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">90+</div>
                  <div className="text-sm text-foreground/70">Performance Score</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div> */}
      </div>
    </section>
  )
}

