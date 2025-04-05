"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { ModeToggle } from "../components/mode-toggle"
import { Menu, X } from "lucide-react"
import logo from "../public/ms.png"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Image src={logo} alt="logo" width={50} height={50} className="cursor-pointer" onClick={() => router.push("/")}/>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#about" className="text-foreground/80 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-foreground/80 hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="#experience" className="text-foreground/80 hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="#contact">
            <Button variant="default" size="sm" className="gradient-bg">
              Contact Me
            </Button>
          </Link>
          {/* <ModeToggle /> */}
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          {/* <ModeToggle /> */}
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link href="#contact" className="py-2" onClick={toggleMenu}>
              <Button variant="default" size="sm" className="w-full gradient-bg">
                Contact Me
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

