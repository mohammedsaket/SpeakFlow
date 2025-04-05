"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Code, Cpu, Database, LineChart, Users, Workflow } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "primary",
    skills: [
      "HTML / CSS",
      "JavaScript",
      "ReactJS",
      "TypeScript",
      "NextJS",
      "Redux",
      "D3.js",
      "Webpack",
      "Web Accessibility (WCAG)",
      "Performance Optimization (Web Vitals)",
    ],
  },
  {
    title: "Technical Leadership",
    icon: Users,
    color: "secondary",
    skills: [
      "Code Reviews & Standards",
      "Technical Documentation",
      "Technical Debt Management",
      "Architectural Decision Making",
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "accent",
    skills: ["Python", "Flask", "RESTful APIs", "SQL"],
  },
  {
    title: "Project Management",
    icon: Workflow,
    color: "primary",
    skills: [
      "Agile Methodologies",
      "Technical Proposals",
      "Resource Management",
      "Business Development",
      "Team Leadership",
      "Client Relations",
    ],
  },
  {
    title: "Data Visualization",
    icon: LineChart,
    color: "secondary",
    skills: ["D3.js", "HighCharts", "Data Analysis", "Dashboard Design"],
  },
  {
    title: "AI & Machine Learning",
    icon: Cpu,
    color: "accent",
    skills: ["NLP", "LLM Integration", "AI-Powered Features", "Prompt Engineering"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/5 blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-secondary/5 blur-xl"></div>
        <div className="absolute top-3/4 left-3/4 w-32 h-32 rounded-full bg-accent/5 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Competencies</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80">
            A comprehensive set of technical and leadership skills developed over 5+ years in the industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full card-hover border-${category.color}/10 overflow-hidden`}>
                <div className={`h-1 w-full bg-${category.color}`}></div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-full bg-${category.color}/10 mr-4`}>
                      <category.icon className={`h-6 w-6 text-${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className={`text-sm py-1 bg-${category.color}/10 text-${category.color}-foreground hover:bg-${category.color}/20`}
                      >
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

