import Link from "next/link"
import { Button } from "../components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import logo from "../public/ms.png"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold">

              Mohammed {" "}<span className="gradient-text">Saket</span>
            </Link>
            <p className="mt-2 text-sm text-foreground/70 max-w-md">
              Senior Frontend Developer specializing in React, TypeScript, and Next.js with 5+ years of experience.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary"
              >
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-secondary/10 hover:text-secondary"
              >
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-accent/10 hover:text-accent">
                <Link href="mailto:mohammedsaket1@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
            <p className="text-sm text-foreground/60">© {currentYear} Mohammed Saket. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

