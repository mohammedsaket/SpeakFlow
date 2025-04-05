"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "AI-Powered Productivity Platform",
    description:
      "Designed and developed Presto, an AI-powered productivity and knowledge management platform featuring a rich text editor, hierarchical knowledge base, and task management system.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "TypeScript", "Next.js", "AI Integration", "Rich Text Editor"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Component Library System",
    description:
      "Architected and implemented a scalable React/TypeScript component library with 35+ components, reducing development time for new features by 40% and ensuring visual consistency.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "TypeScript", "Storybook", "Design System", "Accessibility"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Sales Analytics Dashboard",
    description:
      "Developed customer-facing web applications, including sales analytics dashboards using React.js, D3.js, and HighCharts, boosting customer engagement by 20%.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "D3.js", "HighCharts", "Data Visualization", "Analytics"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "AI-Powered Chatbot Interface",
    description:
      "Built an LLM-powered AI assistant with natural language processing (NLP) to automate text generation, task summarization, and contextual insights for workflow optimization.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "TypeScript", "NLP", "LLM Integration", "Chatbot"],
    demoLink: "#",
    codeLink: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80">
            A selection of my most impactful projects showcasing my technical expertise and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button asChild variant="default" size="sm">
                    <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

