"use client"

import type React from "react"
import { useEffect, useState } from "react"
import {
  HomeIcon,
  CodeIcon,
  BriefcaseIcon,
  FileTextIcon,
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/icons"

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  href: string
}

interface SocialItem {
  icon: React.ReactNode
  href: string
  label: string
}

export default function FloatingNavbar() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isExpanded, setIsExpanded] = useState(false)

  const navItems: NavItem[] = [
    { id: "hero", label: "Home", icon: <HomeIcon />, href: "#hero" },
    { id: "skills", label: "Skills", icon: <CodeIcon />, href: "#skills" },
    { id: "projects", label: "Projects", icon: <BriefcaseIcon />, href: "#projects" },
    { id: "articles", label: "Articles", icon: <FileTextIcon />, href: "#articles" },
    { id: "contact", label: "Contact", icon: <MailIcon />, href: "#contact" },
  ]

  const socialItems: SocialItem[] = [
    { icon: <GithubIcon />, href: "https://github.com/soumen0818", label: "GitHub" },
    { icon: <LinkedinIcon />, href: "https://www.linkedin.com/in/soumen-das-76b867218/", label: "LinkedIn" },
    { icon: <TwitterIcon />, href: "#", label: "Twitter" },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "skills", "projects", "articles", "contact"]
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Main floating navbar - Bottom center */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex gap-2 items-center">
          {/* Social icons - Left side */}
          <div className="flex gap-3 bg-slate-900/80 backdrop-blur-md px-4 py-3 rounded-full border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300">
            {socialItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-purple-300 transition-colors hover:scale-110 w-5 h-5"
                title={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Main navigation */}
          <div
            className={`transition-all duration-300 ${
              isExpanded
                ? "bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-cyan-400/30"
                : "bg-slate-900/80 backdrop-blur-md px-4 py-3 rounded-full border border-cyan-400/30"
            }`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            <div className="flex gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`p-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                    activeSection === item.id
                      ? "bg-cyan-400/30 text-cyan-200 border border-cyan-400/60"
                      : "text-cyan-300 hover:text-purple-300 hover:bg-slate-800/50"
                  }`}
                  title={item.label}
                >
                  <div className="w-5 h-5">{item.icon}</div>
                  {isExpanded && <span className="text-xs font-mono whitespace-nowrap">{item.label}</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
