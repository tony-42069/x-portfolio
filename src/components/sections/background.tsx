'use client'

import { motion } from "framer-motion"
import { Building2, Briefcase, Code, Brain, ArrowRight, FileText } from "lucide-react"

const timeline = [
  {
    year: "2024",
    title: "Full-Stack Developer & AI Engineering Lead",
    description: "Mastered full-stack development at unprecedented rate. Built and shipped multiple products including CRE Analyzer and AI tools.",
    icon: Code
  },
  {
    year: "2021-Present",
    title: "Founder",
    company: "Alliance Business Advisors",
    description: "Founded and scaled successful business advisory firm. Integrated AI solutions and built automated systems.",
    icon: Building2
  },
  {
    year: "2020-2021",
    title: "Vice President",
    company: "Bank of America",
    description: "Led commercial real estate lending initiatives across multiple markets. Managed multi-million dollar relationships.",
    icon: Briefcase
  },
  {
    year: "2013-2020",
    title: "Assistant Vice President",
    company: "Huntington National Bank",
    description: "Managed complex commercial banking relationships and executed strategic growth initiatives.",
    icon: Brain
  }
]

const BackgroundSection = () => {
  return (
    <section id="background" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Professional Background</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A unique journey from finance to technology, driven by innovation and continuous learning
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 transform -translate-x-1/2" />

          {/* Timeline items */}
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
              } md:w-1/2`}
            >
              <div className="flex items-center mb-4">
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center transform -translate-x-1/2">
                  <item.icon className="w-4 h-4 text-blue-400" />
                </div>
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                  <span className="text-blue-400 font-semibold">{item.year}</span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.company}</p>
                  <p className="text-gray-400 mt-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Complete Application Package Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="/x-application-package.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <FileText className="w-6 h-6 mr-3" />
            View Complete Application Package
            <ArrowRight className="ml-3 w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default BackgroundSection