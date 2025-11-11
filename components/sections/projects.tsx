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
		<section
			id="projects"
			ref={ref}
			className="min-h-screen flex items-center justify-center px-4 py-20 relative"
		>
			<div className="max-w-7xl mx-auto w-full">
				{/* Enhanced Title */}
				<div className="text-center mb-24">
					<div className="inline-block mb-8">
						<div className="flex items-center justify-center gap-6">
							<div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-400 to-purple-400 animate-pulse"></div>
							<h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
								MY PROJECTS
							</h2>
							<div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-purple-400 to-purple-400 animate-pulse"></div>
						</div>
					</div>
					<p className="text-gray-300 text-xl mt-6 font-light">
						Featured work and case studies
					</p>
				</div>

				{/* Enhanced Projects grid */}
				<div className="grid md:grid-cols-2 gap-8 md:gap-10">
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
							<div className="group relative h-full">
								{/* Enhanced glow effect */}
								<div
									className={`absolute -inset-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-2xl blur transition duration-500 ${
										hoveredId === project.id ? "opacity-40" : "opacity-0"
									}`}
								></div>

								<div className="relative h-full p-8 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-sm rounded-2xl border border-purple-400/20 overflow-hidden hover:border-purple-400/60 transition-all duration-500 flex flex-col">
									{/* Animated corner accent */}
									<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 via-cyan-500/5 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

									{/* Content */}
									<div className="relative z-10 flex-1 flex flex-col">
										{/* Header */}
										<div className="mb-6">
											<div className="flex items-start justify-between mb-2">
												<h3 className="text-3xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
													{project.name}
												</h3>
												<div className="flex gap-2">
													<div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
													<div
														className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
														style={{ animationDelay: "0.5s" }}
													></div>
												</div>
											</div>
											<p className="text-sm text-purple-300 font-mono uppercase tracking-wider">
												{project.subtitle}
											</p>
										</div>

										{/* Description */}
										<ul className="space-y-3 mb-8 flex-1">
											{project.description.map((desc, i) => (
												<li
													key={i}
													className="text-sm md:text-base text-gray-300 leading-relaxed flex gap-3 group/item"
												>
													<span className="text-cyan-400 flex-shrink-0 mt-1 group-hover/item:scale-125 transition-transform">
														▹
													</span>
													<span className="group-hover/item:text-white transition-colors">
														{desc}
													</span>
												</li>
											))}
										</ul>

										{/* Links with enhanced styling */}
										<div className="flex gap-4 pt-6 border-t border-purple-400/20">
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="group/link flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-purple-500/20 border border-purple-400/30 hover:border-purple-400/60 rounded-lg text-purple-300 hover:text-cyan-300 transition-all duration-300 text-sm font-mono"
											>
												<div className="w-4 h-4 group-hover/link:rotate-12 transition-transform">
													<GithubIcon />
												</div>
												GitHub
											</a>
											{project.live && (
												<a
													href={project.live}
													target="_blank"
													rel="noopener noreferrer"
													className="group/link flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 border border-cyan-400/30 hover:border-cyan-400/60 rounded-lg text-cyan-300 hover:text-white transition-all duration-300 text-sm font-mono"
												>
													<div className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">
														<ExternalLinkIcon />
													</div>
													Live Demo
												</a>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
