"use client"

import { useEffect, useState } from "react"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      {/* Animated globe effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
          <div
            className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div
            className="absolute inset-12 rounded-full border border-cyan-400/20"
            style={{ animationDuration: "15s" }}
          ></div>
          <div className="absolute inset-0 rounded-full shadow-2xl shadow-cyan-500/20"></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Greeting */}
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-cyan-300 text-sm md:text-base font-mono mb-4 tracking-widest">A MESSAGE FROM EARTH</p>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent leading-tight">
            HELLO FELLOW GALAXY MEMBER
          </h1>
        </div>

        {/* Name */}
        <div
          className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-5xl md:text-6xl font-bold mb-8 text-white drop-shadow-lg">I AM SOUMEN</p>
        </div>

        {/* Domain and location */}
        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-lg md:text-2xl text-cyan-200 mb-2 font-mono">Full-Stack (MERN) • Web3 Enthusiast</p>
          <p className="text-base md:text-lg text-purple-300 font-mono mb-8">Kolkata, West Bengal</p>
        </div>

        {/* About */}
        <div
          className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12">
            I'm a dedicated Computer Science & Engineering undergraduate passionate about modern web development and
            Blockchain. Currently mastering the MERN stack and exploring Web3 through hands-on projects and continuous
            learning.
          </p>
        </div>

        {/* Social links */}
        <div
          className={`flex gap-6 justify-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <a
            href="https://github.com/soumen0818"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/soumen-das-76b867218/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110"
          >
            <LinkedinIcon />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110"
          >
            <TwitterIcon />
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-cyan-300 text-xs font-mono mb-2 text-center">SCROLL</p>
          <div className="flex flex-col gap-2 items-center animate-bounce">
            <div className="w-1 h-4 border-l border-r border-cyan-400"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
