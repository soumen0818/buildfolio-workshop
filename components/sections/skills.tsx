"use client"

import { useEffect, useRef, useState } from "react"
import {
  JavaScriptIcon,
  PythonIcon,
  CIcon,
  ReactIcon,
  NextJsIcon,
  TypeScriptIcon,
  MongoDBIcon,
  NodeJsIcon,
  ExpressJsIcon,
  MySQLIcon,
  SolidityIcon,
  Web3Icon,
} from "@/components/icons"

const skills = [
  { name: "JavaScript", icon: JavaScriptIcon, category: "frontend" },
  { name: "Python", icon: PythonIcon, category: "backend" },
  { name: "C", icon: CIcon, category: "backend" },
  { name: "React.js", icon: ReactIcon, category: "frontend" },
  { name: "Next.js", icon: NextJsIcon, category: "frontend" },
  { name: "TypeScript", icon: TypeScriptIcon, category: "frontend" },
  { name: "MongoDB", icon: MongoDBIcon, category: "database" },
  { name: "Node.js", icon: NodeJsIcon, category: "backend" },
  { name: "Express.js", icon: ExpressJsIcon, category: "backend" },
  { name: "MySQL", icon: MySQLIcon, category: "database" },
  { name: "Solidity", icon: SolidityIcon, category: "web3" },
  { name: "Web3", icon: Web3Icon, category: "web3" },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
    <section id="skills" ref={ref} className="min-h-screen flex items-center justify-center px-4 py-32 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Radial glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Title Section */}
        <div className="text-center mb-20">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Glowing title */}
            <div className="inline-block mb-6 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-2xl opacity-20"></div>
              <h2 className="relative text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                MY SKILLS
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-gray-300/80 text-lg md:text-xl mb-8 font-light tracking-wide">
              Technologies I work with
            </p>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50"></div>
              <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            const isHovered = hoveredIndex === index

            return (
              <div
                key={skill.name}
                className={`group relative transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Outer glow on hover */}
                <div
                  className={`absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-2xl blur-xl transition-all duration-500 ${
                    isHovered ? "opacity-40 scale-105" : "opacity-0"
                  }`}
                ></div>

                {/* Main card */}
                <div className="relative h-full">
                  {/* Glassmorphism card */}
                  <div
                    className={`relative h-full p-8 bg-white/5 backdrop-blur-xl rounded-2xl border transition-all duration-500 overflow-hidden group-hover:scale-105 group-hover:bg-white/10 ${
                      isHovered
                        ? "border-cyan-400/60 shadow-2xl shadow-cyan-500/30"
                        : "border-white/10 shadow-lg shadow-black/20"
                    }`}
                  >
                    {/* Animated gradient background shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-purple-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Top-right corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center gap-5 h-full min-h-[140px]">
                      {/* Icon with rotation on hover */}
                      <div
                        className={`transform transition-all duration-500 ${
                          isHovered ? "scale-110 rotate-6" : "scale-100 rotate-0"
                        }`}
                      >
                        <div className="relative">
                          {/* Icon glow */}
                          <div className={`absolute inset-0 blur-lg transition-opacity duration-500 ${isHovered ? "opacity-50" : "opacity-0"}`}>
                            <IconComponent />
                          </div>
                          <div className="relative">
                            <IconComponent />
                          </div>
                        </div>
                      </div>

                      {/* Skill name */}
                      <span
                        className={`text-sm md:text-base font-semibold text-center transition-all duration-300 ${
                          isHovered
                            ? "text-white scale-105"
                            : "text-cyan-200/90"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>

                    {/* Bottom glow line */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-500 ${
                        isHovered ? "opacity-100" : "opacity-0"
                      }`}
                    ></div>

                    {/* Particle effects on hover */}
                    {isHovered && (
                      <>
                        <div className="absolute top-1/4 right-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                        <div className="absolute bottom-1/4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: "0.3s" }}></div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Optional bottom tagline */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gray-400/70 text-sm font-mono tracking-wider">
            <span className="text-cyan-400">★</span> Exploring the Digital Galaxy{" "}
            <span className="text-purple-400">★</span>
          </p>
        </div>
      </div>
    </section>
  )
}
