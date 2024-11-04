'use client'

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Does My Deal Pencil?",
    description: "A web-based tool designed to help real estate investors analyze the profitability of commercial real estate deals quickly and efficiently.",
    tech: ["HTML", "JavaScript", "Financial Modeling"],
    repoLink: "https://github.com/tony-42069/cre-analyzer",
    isMain: true
  },
  {
    title: "Will This Buy Fly?",
    description: "A tool designed to evaluate potential business acquisitions by analyzing key financial and operational factors.",
    tech: ["React", "Financial Analysis", "TypeScript"],
    repoLink: "https://github.com/tony-42069/dscr-calculator",
    isMain: true
  },
  {
    title: "AI Tools for CRE Professionals",
    description: "Curated platform for industry professionals integrating cutting-edge AI tools and resources.",
    tech: ["React", "AI Integration", "Documentation"],
    repoLink: "https://github.com/tony-42069/ai-tools-for-cre-professionals",
    isMain: true
  },
  {
    title: "X Election Tracker",
    description: "Real-time sentiment analysis dashboard tracking public opinion for the 2024 presidential race.",
    tech: ["React", "Data Visualization", "API Integration"],
    repoLink: "https://github.com/tony-42069/X-Election-Tracker",
    isMain: true
  },
  {
    title: "AI Dynamic Wallpaper",
    description: "Automated AI wallpaper generator using Black Forest Labs' Flux API.",
    tech: ["Python", "AI", "API Integration"],
    repoLink: "https://github.com/tony-42069/ai-dynamic-wallpaper",
    isMain: true
  },
  {
    title: "Todo List App",
    description: "My first web development project that sparked everything. A simple but functional to-do list application.",
    tech: ["React", "JavaScript", "Frontend"],
    repoLink: "https://github.com/tony-42069/todo-list-app",
    isMain: true
  }
]

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From my first todo app to sophisticated financial tools, here's my journey in shipping products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gray-800 rounded-lg p-6 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection