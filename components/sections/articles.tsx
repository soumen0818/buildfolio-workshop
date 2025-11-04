"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRightIcon } from "@/components/icons"

const articles = [
  {
    id: 1,
    title: "Building Scalable MERN Applications",
    summary:
      "Learn best practices for architecting large-scale applications using MongoDB, Express, React, and Node.js. Explore patterns for data management, API design, and frontend optimization.",
    date: "November 2024",
  },
  {
    id: 2,
    title: "Getting Started with Web3 and Solidity",
    summary:
      "An introductory guide to blockchain development. Understand smart contracts, gas optimization, and how to build your first decentralized application on the blockchain.",
    date: "October 2024",
  },
  {
    id: 3,
    title: "Real-time Communication with WebSockets",
    summary:
      "Dive deep into implementing real-time features using WebSockets. Learn how to build chat applications, live notifications, and collaborative tools efficiently.",
    date: "September 2024",
  },
]

export default function Articles() {
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
                MY ARTICLES
              </h2>
              <div className="h-1 w-20 bg-gradient-to-l from-cyan-400 to-transparent"></div>
            </div>
          </div>
          <p className="text-gray-300 text-lg mt-4">Insights and learnings from my development journey</p>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`group transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <div className="relative h-full p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-lg border border-cyan-400/30 overflow-hidden hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
                {/* Animated background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-auto">
                    <p className="text-xs text-cyan-300 font-mono mb-3">{article.date}</p>
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-200 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed mb-6">{article.summary}</p>
                  </div>

                  {/* Read more link */}
                  <button className="flex items-center gap-2 text-cyan-300 hover:text-cyan-100 transition-colors text-sm font-mono group/btn">
                    <span>READ MORE</span>
                    <div className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform">
                      <ArrowRightIcon />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
