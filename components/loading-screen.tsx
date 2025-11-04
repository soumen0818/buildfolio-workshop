"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + Math.random() * 30
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated circle */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-transparent border-t-cyan-400 border-r-cyan-400 rounded-full animate-spin"></div>
          <div
            className="absolute inset-2 border-4 border-transparent border-b-purple-400 border-l-purple-400 rounded-full animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>

          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading text */}
        <p className="text-sm text-cyan-300 font-mono tracking-widest">INITIALIZING...</p>
      </div>
    </div>
  )
}
