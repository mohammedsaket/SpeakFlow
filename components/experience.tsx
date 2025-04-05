"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import presto from "../public/presto.png"
import tcs from "../public/tcs.png"
import eventos from "../public/eventos.png"
import { Timeline } from "../components/ui/timeline"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
const experiences = [
  {
    company: "Presto Labs",
    position: "Principal Full-Stack Engineer",
    period: "Oct 2024 - Present",
    location: "Remote",
    color: "primary",
    achievements: [
      "Architected and implemented a scalable React/TypeScript component library, reducing development time for new features by 40% and ensuring visual consistency across the platform",
      "Designed and developed Presto, an AI-powered productivity and knowledge management platform featuring a rich text editor, hierarchical Spaces (knowledge base), access control, and task & incident management system with customizable workflows",
      "Achieved 75% improvement in initial load time by implementing code splitting, lazy loading, and optimized bundle sizes, resulting in Lighthouse performance scores above 90",
      "Built an LLM-powered AI assistant with natural language processing (NLP) to automate text generation, task summarization, and contextual insights for workflow optimization",
    ],
  },
  {
    company: "Tata Consultancy Services",
    position: "Technical Project Lead at Apple (Contract - Onsite)",
    period: "May 2023 - Oct 2024",
    location: "London, UK",
    color: "secondary",
    achievements: [
      "Led three concurrent dashboard projects, managing a cross-functional team of 10 developers and implementing a centralized insights module that reduced development time by 70% and integration time by 90%",
      "Delivered client-facing projects on-site, achieving 30% cost reduction through innovative architectural solutions and ensuring timely delivery using Agile methodologies",
    ],
  },
  {
    company: "Tata Consultancy Services",
    position: "Lead Software Developer at Apple (Contract)",
    period: "July 2020 - May 2023",
    location: "Noida, IN",
    color: "accent",
    achievements: [
      "Developed and deployed customer-facing web applications, including sales analytics dashboards, AI-powered chatbot interfaces, and insights modules using React.js, D3.js, and HighCharts, boosting customer engagement by 20%",
      "Built reusable component libraries of 35+ components, implemented responsive layouts, ensured cross-browser compatibility, and created POC applications to streamline development and enhance user experience",
      "Provided post-launch production support, resolving over 1,000 bugs and issues while leveraging modern technologies such as TypeScript, CSS3, and Webpack to deliver scalable, high-performance solutions",
    ],
  },
  {
    company: "Eventos Hub",
    position: "Software Developer",
    period: "Jan 2020 - June 2020",
    location: "Jaipur, IN",
    color: "primary",
    achievements: [
      "Collaborated with the Backend team using Python to develop RESTful Web APIs for user authentication and data management",
      "Engineered an Asynchronous RESTful Web API with 10+ image filters, RabbitMQ integration, image/video compression, and storage functionalities",
      "Contributed to the Front-end team and utilized React Native to conceptualize, design, and build Android and iOS mobile applications for client projects",
    ],
  },
]

const timelineData = [
  {
    title: "Oct 2024",
    company: "Presto Labs",
    logo: presto,
    content: (
      <div>
        <p className="text-blue-300 text-lg md:text-md font-semibold mb-1">
          Principal Full-Stack Engineer
        </p>
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <span className="font-semibold text-lg text-blue-500">Presto Labs</span>
          <div className="flex items-center gap-2 font-medium">
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 4.5 6.75 12.75 6.75 12.75s6.75-8.25 6.75-12.75c0-3.728-3.022-6.75-6.75-6.75zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
              />
            </svg>
            Remote
          </div>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          {experiences[0].achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "May 2023 - Oct 2024",
    company: "Tata Consultancy Services",
    logo: tcs,
    content: (
      <div>
        <p className="text-blue-300 text-lg md:text-md font-semibold mb-1">
          Technical Project Lead at Apple (Contract - Onsite)
        </p>
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <span className="font-semibold text-lg text-blue-500">Tata Consultancy Services</span>
          <div className="flex items-center gap-2 font-medium">
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 4.5 6.75 12.75 6.75 12.75s6.75-8.25 6.75-12.75c0-3.728-3.022-6.75-6.75-6.75zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
              />
            </svg>
            London, UK
          </div>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          {experiences[1].achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "July 2020 - May 2023",
    company: "Tata Consultancy Services",
    logo: tcs,
    content: (
      <div>
        <p className="text-blue-300 text-lg md:text-md font-semibold mb-1">
          Lead Software Developer at Apple (Contract)
        </p>
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <span className="font-semibold text-lg text-blue-500">Tata Consultancy Services</span>
          <div className="flex items-center gap-2 font-medium">
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 4.5 6.75 12.75 6.75 12.75s6.75-8.25 6.75-12.75c0-3.728-3.022-6.75-6.75-6.75zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
              />
            </svg>
            Noida, IN
          </div>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          {experiences[2].achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Jan 2020 - June 2020",
    company: "Eventos Hub",
    logo: eventos,
    content: (
      <div>
        <p className="text-blue-300 text-lg md:text-md font-semibold mb-1">
          Software Developer
        </p>
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <span className="font-semibold text-lg text-blue-500">Eventos Hub</span>
          <div className="flex items-center gap-2 font-medium">
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 4.5 6.75 12.75 6.75 12.75s6.75-8.25 6.75-12.75c0-3.728-3.022-6.75-6.75-6.75zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
              />
            </svg>
            Jaipur, IN
          </div>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          {experiences[3].achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      </div>
    ),
  },
]


export function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80">
            My professional journey includes working with leading companies and delivering impactful solutions.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <Timeline 
            data={timelineData.map((item, index) => ({
              ...item,
              content: (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {item.content}
                </motion.div>
              )
            }))} 
          />
        </motion.div>
      </div>
    </section>
  )
}

