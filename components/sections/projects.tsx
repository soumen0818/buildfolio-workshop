"use client"

import { useEffect, useRef, useState } from "react"
import { GithubIcon, ExternalLinkIcon } from "@/components/icons"

const projects = [
  {
    id: 1,
    name: "HerbalTrace",
    subtitle: "Supply Chain Platform",
    description: [
      "Blockchain-powered platform for herbal supply chain transparency from farm to consumer.",
      "Multi-platform solution: React web app, React Native mobile app, Node.js backend.",
      "QR code-based product verification with GPS tracking and lab testing integration.",
    ],
    github: "https://github.com/soumen0818/herbal-supply-chain",
    live: "https://herbal-supply-chain.web.app/",
  },
  {
    id: 2,
    name: "SkillChain",
    subtitle: "NFT Credentials Platform",
    description: [
      "Blockchain-based platform issuing NFT certificates as verifiable credentials.",
      "Integrated educator dashboard for course creation and management.",
      "Improved trust in online education via blockchain verification.",
    ],
    github: "https://github.com/soumen0818/SkillChain",
    live: null,
  },
  {
    id: 3,
    name: "TechVerse Connect",
    subtitle: "Tech News Platform",
    description: [
      "AI-powered tech news summaries with community features and forums.",
      "Built with React 18, TypeScript, Tailwind, Node.js, Express, MongoDB.",
      "Secure authentication using JWT and bcryptjs.",
    ],
    github: "https://github.com/soumen0818/tech-verse",
    live: null,
  },
  {
    id: 4,
    name: "College Companion",
    subtitle: "Mobile Education App",
    description: [
      "React Native mobile app with Express.js backend for parent-student communication.",
      "Real-time access to attendance, fees, and grades with optimized queries.",
      "Streamlined communication between educational stakeholders.",
    ],
    github: "https://github.com/soumen0818/Companion",
    live: null,
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-6xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-6">
              <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-transparent"></div>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                MY PROJECTS
              </h2>
              <div className="h-1 w-20 bg-gradient-to-l from-purple-400 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="group relative h-full p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-lg border border-purple-400/30 overflow-hidden hover:border-purple-400/60 transition-all duration-300">
                {/* Animated border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-purple-300 mb-4">{project.subtitle}</p>

                  {/* Description */}
                  <ul className="space-y-2 mb-6">
                    {project.description.map((desc, i) => (
                      <li key={i} className="text-sm text-gray-300 leading-relaxed flex gap-2">
                        <span className="text-cyan-400 flex-shrink-0">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-purple-400/20">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-300 hover:text-cyan-300 transition-colors text-sm font-mono"
                    >
                      <div className="w-4 h-4">
                        <GithubIcon />
                      </div>
                      GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-purple-300 hover:text-cyan-300 transition-colors text-sm font-mono"
                      >
                        <div className="w-4 h-4">
                          <ExternalLinkIcon />
                        </div>
                        Live
                      </a>
                    )}
                  </div>
                </div>

                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-lg transition-opacity duration-300 pointer-events-none ${
                    hoveredId === project.id ? "opacity-100 shadow-xl shadow-purple-500/30" : "opacity-0"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
