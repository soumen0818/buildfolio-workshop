"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)

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

  useEffect(() => {
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"
    document.head.appendChild(script)

    script.onload = () => {
      if (typeof (window as any).emailjs !== "undefined") {
        ;(window as any).emailjs.init("pzWiPZf8i4d4a5IPp")
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (formRef.current && typeof (window as any).emailjs !== "undefined") {
        await (window as any).emailjs.sendForm("service_8zhb1nm", "template_0zzpgps", formRef.current)
        setSubmitted(true)
        formRef.current.reset()
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Error sending email:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-3xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-6">
              <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-transparent"></div>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                CONTACT ME
              </h2>
              <div className="h-1 w-20 bg-gradient-to-l from-purple-400 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-lg border border-purple-400/30 overflow-hidden hover:border-purple-400/60 transition-all duration-300">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10"></div>
            </div>

            {/* Success message */}
            {submitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-400/50 rounded-lg text-green-300 text-center font-mono text-sm">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {/* Name field */}
              <div>
                <label className="block text-sm text-cyan-300 font-mono mb-2">Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email field */}
              <div>
                <label className="block text-sm text-cyan-300 font-mono mb-2">Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject field */}
              <div>
                <label className="block text-sm text-cyan-300 font-mono mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Message subject"
                />
              </div>

              {/* Message field */}
              <div>
                <label className="block text-sm text-cyan-300 font-mono mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
              >
                {loading ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-cyan-300 font-mono text-sm mb-2">EMAIL</p>
            <p className="text-white">jayendradas1108@gmail.com</p>
          </div>
          <div>
            <p className="text-cyan-300 font-mono text-sm mb-2">LOCATION</p>
            <p className="text-white">Kolkata, West Bengal</p>
          </div>
          <div>
            <p className="text-cyan-300 font-mono text-sm mb-2">STATUS</p>
            <p className="text-white">Open to Opportunities</p>
          </div>
        </div>
      </div>
    </section>
  )
}
