"use client"

import { useEffect, useState } from "react"
import LoadingScreen from "@/components/loading-screen"
import Hero from "@/components/sections/hero"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Articles from "@/components/sections/articles"
import Contact from "@/components/sections/contact"
import FloatingNavbar from "@/components/floating-navbar"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen blur-3xl opacity-10"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen blur-3xl opacity-5"></div>
      </div>

      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Articles />
        <Contact />
      </div>

      <FloatingNavbar />
    </main>
  )
}
