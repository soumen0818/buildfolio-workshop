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
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "Python", icon: PythonIcon },
  { name: "C", icon: CIcon },
  { name: "React.js", icon: ReactIcon },
  { name: "Next.js", icon: NextJsIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "MongoDB", icon: MongoDBIcon },
  { name: "Node.js", icon: NodeJsIcon },
  { name: "Express.js", icon: ExpressJsIcon },
  { name: "MySQL", icon: MySQLIcon },
  { name: "Solidity", icon: SolidityIcon },
  { name: "Web3", icon: Web3Icon },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
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
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-transparent"></div>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                MY SKILLS
              </h2>
              <div className="h-1 w-20 bg-gradient-to-l from-cyan-400 to-transparent"></div>
            </div>
          </div>
          <p className="text-gray-300 text-lg mt-4">Here is a list of some of my skills</p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <div
                key={skill.name}
                className={`group relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="relative p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg border border-cyan-400/30 overflow-hidden group-hover:border-cyan-400/60 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/30 group-hover:scale-110">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center gap-3 h-16">
                    <IconComponent />
                    <span className="text-sm md:text-base font-semibold text-center text-cyan-200 group-hover:text-cyan-100 transition-colors">
                      {skill.name}
                    </span>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-inner shadow-cyan-400/20"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
