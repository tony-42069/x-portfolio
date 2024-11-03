'use client'

import { motion } from "framer-motion"
import { BarChart, Layout, Newspaper, Wallet } from "lucide-react"

const features = [
  {
    title: "Newsletter Enhancement",
    description: "Dedicated newsletter infrastructure with improved analytics and subscription management",
    icon: Newspaper,
    details: [
      "Dedicated newsletter section",
      "Enhanced subscription management",
      "Advanced analytics dashboard",
      "Improved content delivery"
    ]
  },
  {
    title: "Monetization Tools",
    description: "Streamlined payment systems and revenue optimization tools for creators",
    icon: Wallet,
    details: [
      "Simplified payment flows",
      "Multiple revenue stream support",
      "Automated payout systems",
      "Revenue optimization tools"
    ]
  },
  {
    title: "Creator Analytics",
    description: "Comprehensive analytics and insights for better content monetization",
    icon: BarChart,
    details: [
      "Real-time performance metrics",
      "Audience insights dashboard",
      "Revenue tracking",
      "Growth analytics"
    ]
  },
  {
    title: "Platform Integration",
    description: "Seamless integration of monetization features into the core platform experience",
    icon: Layout,
    details: [
      "Native feature integration",
      "Cross-platform compatibility",
      "Enhanced user experience",
      "Scalable architecture"
    ]
  }
]

const VisionSection = () => {
  return (
    <section id="vision" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Vision for X</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Innovative solutions to enhance creator monetization and platform growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail) => (
                  <li key={detail} className="flex items-center text-gray-300">
                    <div className="mr-2 text-blue-400">•</div>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VisionSection