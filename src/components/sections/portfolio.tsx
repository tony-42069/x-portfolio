'use client'

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "CRE Analyzer",
    description: "'Does my deal pencil? ✏️'™ is a sophisticated web application designed for rapid commercial real estate investment analysis. Perfect for investors, brokers, and analysts who need quick, professional evaluations.",
    tech: ["TypeScript", "React", "Financial Analysis"],
    repoLink: "https://github.com/tony-42069/cre-analyzer",
    isMain: true
  },
  {
    title: "Business Acquisition Analyzer",
    description: "'Will My Buy Fly? ✈️' is an advanced business acquisition analysis tool that helps entrepreneurs evaluate potential business purchases through advanced financial metrics and risk assessment.",
    tech: ["TypeScript", "React", "Financial Modeling"],
    repoLink: "https://github.com/tony-42069/biz-acquisition",
    isMain: true
  },
  {
    title: "CRE Chatbot RAG",
    description: "A powerful Retrieval-Augmented Generation (RAG) chatbot designed to revolutionize how professionals understand commercial real estate concepts. Built with Azure OpenAI and modern Python technologies.",
    tech: ["Python", "Azure OpenAI", "RAG"],
    repoLink: "https://github.com/tony-42069/cre-chatbot-rag",
    isMain: true
  },
  {
    title: "Jake AI",
    description: "🤖🏠 AI Jake is not your typical sales bot. He's a high-energy, unhinged, door-to-door salesman turned AI, fine-tuned with Mistral and fueled by the wild world of MLM saga stories.",
    tech: ["Python", "Mistral AI", "Fine-tuning"],
    repoLink: "https://github.com/tony-42069/jake-ai",
    isMain: true
  },
  {
    title: "AI Dynamic Wallpaper",
    description: "An automated AI wallpaper generator using Black Forest Labs' Flux API.",
    tech: ["Python", "AI", "API Integration"],
    repoLink: "https://github.com/tony-42069/ai-dynamic-wallpaper",
    isMain: true
  },
  {
    title: "AI Bookmark Manager",
    description: "AI powered bookmark manager for Chrome.",
    tech: ["TypeScript", "Chrome Extension", "AI"],
    repoLink: "https://github.com/tony-42069/bookmark-manager",
    isMain: true
  },
  {
    title: "CRE SOFR Spreads Dashboard",
    description: "A dynamic web page that visualizes current SOFR spreads across different commercial real estate asset classes, providing breakdowns for industrial, multifamily, and other sectors.",
    tech: ["HTML", "JavaScript", "Data Visualization"],
    repoLink: "https://github.com/tony-42069/cre-sofr-spreads-dashboard",
    isMain: false
  },
  {
    title: "2024 Election Predictor",
    description: "A fun and interactive way to 'predict' the 2024 US Presidential Election through random chance visualization.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoLink: "https://github.com/tony-42069/election-predictor-2024",
    isMain: false
  },
  {
    title: "X Election Tracker",
    description: "2024 Presidential Race Sentiment Tracker. A real-time sentiment analysis dashboard tracking public opinion on X for the unprecedented 2024 presidential race.",
    tech: ["HTML", "JavaScript", "Sentiment Analysis"],
    repoLink: "https://github.com/tony-42069/X-Election-Tracker",
    isMain: false
  },
  {
    title: "AI Tools for CRE Professionals",
    description: "A curated list of AI-powered resources for commercial real estate professionals, helping brokers and investors gain a competitive advantage.",
    tech: ["HTML", "Documentation", "AI Resources"],
    repoLink: "https://github.com/tony-42069/ai-tools-for-cre-professionals",
    isMain: false
  },
  {
    title: "DSCR Calculator",
    description: "'Will this buy fly?'™ is a tool designed to evaluate potential business acquisitions by analyzing key financial and operational factors.",
    tech: ["JavaScript", "Financial Analysis", "Calculator"],
    repoLink: "https://github.com/tony-42069/dscr-calculator",
    isMain: false
  },
  {
    title: "Todo List App",
    description: "A React-based todo list application allowing users to create, manage, and track their todo items.",
    tech: ["JavaScript", "React", "Frontend"],
    repoLink: "https://github.com/tony-42069/todo-list-app",
    isMain: false
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
          <h2 className="text-4xl font-bold text-white mb-4">Project Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my projects showcasing expertise in AI, financial analysis, and web development.
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