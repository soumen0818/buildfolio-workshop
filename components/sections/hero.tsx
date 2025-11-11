"use client"

import { useEffect, useState } from "react"
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from "@/components/icons"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated cosmic background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating particles/stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT SECTION - Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Eyebrow text */}
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <p className="text-cyan-300 text-xs md:text-sm font-mono mb-4 tracking-[0.3em] animate-pulse flex items-center justify-center lg:justify-start gap-2">
                <span className="text-lg">🚀</span> A MESSAGE FROM EARTH
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent leading-tight animate-gradient bg-[length:200%_auto]">
                HELLO FELLOW GALAXY MEMBER
              </h1>
            </div>

            {/* Name with glow */}
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
                I AM{" "}
                <span className="relative inline-block">
                  <span className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-400 blur-2xl opacity-50"></span>
                  <span className="relative bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    SOUMEN
                  </span>
                </span>
              </h2>
            </div>

            {/* Skill badges */}
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
                <span className="px-5 py-2.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md rounded-full border border-cyan-400/40 text-cyan-200 font-mono text-sm md:text-base shadow-lg shadow-cyan-500/20">
                  Full-Stack (MERN)
                </span>
                <span className="px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-md rounded-full border border-purple-400/40 text-purple-200 font-mono text-sm md:text-base shadow-lg shadow-purple-500/20">
                  Web3 Enthusiast
                </span>
              </div>
              
              {/* Location */}
              <p className="text-base md:text-lg text-purple-300 font-mono mb-8 flex items-center justify-center lg:justify-start gap-2">
                <span className="text-xl">📍</span> Kolkata, West Bengal
              </p>
            </div>

            {/* Bio card */}
            <div
              className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="relative group mb-10">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative p-6 bg-slate-900/70 backdrop-blur-xl rounded-2xl border border-cyan-400/30">
                  <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                    I'm a dedicated Computer Science & Engineering undergraduate passionate about modern web development and
                    Blockchain. Currently mastering the MERN stack and exploring Web3 through hands-on projects and continuous
                    learning.
                  </p>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/soumen0818"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-full border border-cyan-400/50 text-cyan-300 hover:text-white transition-all duration-300 hover:scale-110"
                  title="GitHub"
                >
                  <div className="absolute inset-0 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/20 blur transition-all duration-300"></div>
                  <div className="relative w-6 h-6">
                    <GithubIcon />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/soumen-das-76b867218/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-full border border-cyan-400/50 text-cyan-300 hover:text-white transition-all duration-300 hover:scale-110"
                  title="LinkedIn"
                >
                  <div className="absolute inset-0 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/20 blur transition-all duration-300"></div>
                  <div className="relative w-6 h-6">
                    <LinkedinIcon />
                  </div>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-full border border-cyan-400/50 text-cyan-300 hover:text-white transition-all duration-300 hover:scale-110"
                  title="Twitter"
                >
                  <div className="absolute inset-0 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/20 blur transition-all duration-300"></div>
                  <div className="relative w-6 h-6">
                    <TwitterIcon />
                  </div>
                </a>
                <a
                  href="mailto:jayendradas1108@gmail.com"
                  className="group relative p-4 rounded-full border border-cyan-400/50 text-cyan-300 hover:text-white transition-all duration-300 hover:scale-110"
                  title="Email"
                >
                  <div className="absolute inset-0 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/20 blur transition-all duration-300"></div>
                  <div className="relative w-6 h-6">
                    <MailIcon />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
            >
              {/* Floating orbit rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="absolute w-[120%] h-[120%] rounded-full border-2 border-cyan-400/20 animate-spin"
                  style={{ animationDuration: "20s" }}
                ></div>
                <div
                  className="absolute w-[140%] h-[140%] rounded-full border border-purple-400/20 animate-spin"
                  style={{ animationDuration: "15s", animationDirection: "reverse" }}
                ></div>
              </div>

              {/* Main image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                
                {/* Glass frame */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/30 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm shadow-2xl shadow-cyan-500/30">
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10"></div>
                  
                  {/* Profile Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src="https://www.soumendas.me/images/profile.jpg"
                      alt="Soumen - Full Stack Developer"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 -translate-x-full hover:translate-x-full animate-shimmer"></div>
                </div>

                {/* Floating tech icons around image */}
                <div className="absolute top-10 -left-8 w-12 h-12 bg-slate-900/80 backdrop-blur-md rounded-lg border border-cyan-400/40 flex items-center justify-center animate-float shadow-lg shadow-cyan-500/30">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div className="absolute top-1/4 -right-8 w-12 h-12 bg-slate-900/80 backdrop-blur-md rounded-lg border border-purple-400/40 flex items-center justify-center animate-float shadow-lg shadow-purple-500/30" style={{ animationDelay: "1s" }}>
                  <span className="text-2xl">🔗</span>
                </div>
                <div className="absolute bottom-1/4 -left-10 w-12 h-12 bg-slate-900/80 backdrop-blur-md rounded-lg border border-cyan-400/40 flex items-center justify-center animate-float shadow-lg shadow-cyan-500/30" style={{ animationDelay: "2s" }}>
                  <span className="text-2xl">💻</span>
                </div>
                <div className="absolute bottom-10 -right-6 w-12 h-12 bg-slate-900/80 backdrop-blur-md rounded-lg border border-purple-400/40 flex items-center justify-center animate-float shadow-lg shadow-purple-500/30" style={{ animationDelay: "3s" }}>
                  <span className="text-2xl">🌐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
