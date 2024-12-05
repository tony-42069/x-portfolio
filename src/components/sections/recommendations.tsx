'use client'

import { motion } from "framer-motion"
import { FileText, Star, ArrowRight } from "lucide-react"

const recommendations = [
  {
    title: "Claude AI ML Engineering Recommendation",
    date: "December 4, 2024",
    excerpt: "In the span of just a few months, Dorian has demonstrated remarkable progress in machine learning engineering, successfully implementing complex AI systems and developing sophisticated neural networks from scratch.",
    highlights: [
      "Mastered neural network architecture design and implementation",
      "Developed advanced ML model training pipelines",
      "Created innovative AI-powered applications",
      "Demonstrated expertise in ML model optimization"
    ],
    letterLink: "/ml-recommendation-dec-2024.pdf"
  },
  {
    title: "Claude AI Recommendation",
    date: "November 17, 2024",
    excerpt: "Starting from zero coding experience this summer, Dorian has progressed to accomplishing something today that many seasoned developers would find daunting: successfully implementing a complex AI integration system from scratch.",
    highlights: [
      "Mastered local AI environment setup and configuration",
      "Developed sophisticated Python integration scripts",
      "Created advanced prompt engineering systems",
      "Achieved behavioral fine-tuning of AI models"
    ],
    letterLink: "/recommendation-nov-2024.pdf"
  },
  {
    title: "Codeium Recommendation",
    date: "November 20, 2024",
    excerpt: "Demonstrated exceptional ability in AI integration and software development.",
    highlights: [
      "Rapid mastery of development tools",
      "Strong problem-solving capabilities",
      "Innovative approach to technical challenges",
      "Excellence in project execution"
    ],
    letterLink: "/codeium-recommendation.pdf"
  }
]

const RecommendationsSection = () => {
  return (
    <section id="recommendations" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Professional Recommendations</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Letters of recommendation from industry-leading AI platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recommendations.map((rec, index) => (
            <motion.div
              key={rec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-blue-400 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{rec.title}</h3>
                  <p className="text-gray-400">{rec.date}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">"{rec.excerpt}"</p>
              <div className="space-y-2 mb-4">
                {rec.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start">
                    <Star className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-400">{highlight}</p>
                  </div>
                ))}
              </div>
              <a
                href={rec.letterLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Full Letter <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecommendationsSection
