'use client'

import { motion } from "framer-motion"
import { Award, GitCommit, Rocket, Zap, ArrowRight } from "lucide-react"

const stats = [
  {
    label: "Learning Rate",
    value: "Top 0.1%",
    description: "Documented exceptional learning velocity",
    icon: Zap
  },
  {
    label: "Repositories",
    value: "9",
    description: "Shipped in under 60 days",
    icon: GitCommit
  },
  {
    label: "Development Velocity",
    value: "3 Days",
    description: "Average time to ship new features",
    icon: Rocket
  },
  {
    label: "Platform Expertise",
    value: "25%+",
    description: "Newsletter engagement rate",
    icon: Award
  }
]

const achievements = [
  "Mastered full-stack development stack in record time",
  "Built and deployed multiple production applications",
  "Implemented complex financial analysis tools",
  "Integrated sophisticated AI systems",
  "Demonstrated exceptional shipping velocity",
  "Successfully monetized platform content"
]

const EvidenceSection = () => {
  return (
    <section id="excellence" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Evidence of Excellence</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Documented achievements and metrics demonstrating exceptional capabilities
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-300 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Achievements List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center text-gray-300"
              >
                <div className="mr-3 text-blue-400">•</div>
                {achievement}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recommendation Letter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="/letter-of-recommendation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            View Letter of Recommendation
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default EvidenceSection