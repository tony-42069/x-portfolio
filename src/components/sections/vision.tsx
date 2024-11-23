'use client'

import { motion } from "framer-motion"
import { BarChart, Layout, Newspaper, Wallet } from "lucide-react"

const features = [
  {
    title: "AI Integration Enhancement",
    description: "Expanding and improving AI capabilities across all applications",
    icon: Newspaper,
    details: [
      "Advanced prompt engineering systems",
      "Local AI environment optimization",
      "Improved model fine-tuning",
      "Enhanced AI response quality"
    ]
  },
  {
    title: "Financial Tools Evolution",
    description: "Continuous improvement of real estate and business analysis tools",
    icon: Wallet,
    details: [
      "Advanced financial modeling",
      "Market trend analysis",
      "Automated reporting systems",
      "Portfolio optimization features"
    ]
  },
  {
    title: "Data Analytics Enhancement",
    description: "Expanding data analysis capabilities across all platforms",
    icon: BarChart,
    details: [
      "Real-time market insights",
      "Predictive analytics integration",
      "Custom reporting dashboards",
      "Machine learning implementations"
    ]
  },
  {
    title: "Platform Improvements",
    description: "Continuous enhancement of user experience and functionality",
    icon: Layout,
    details: [
      "Enhanced UI/UX design",
      "Performance optimization",
      "Mobile responsiveness",
      "Cross-platform compatibility"
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
          <h2 className="text-4xl font-bold text-white mb-4">Future Development Plans</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuous improvement and evolution of current projects
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