'use client'

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Twitter, Globe } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
          Full Stack Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Specializing in AI Integration, Commercial Real Estate Tools, and Full-Stack Development
        </p>
        
        {/* Links */}
<div className="flex justify-center space-x-6 mb-12">
  <a
    href="https://github.com/tony-42069"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors"
  >
    <Github className="w-8 h-8" />
  </a>
  <a
    href="https://twitter.com/CREdebtDorian"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors"
  >
    <Twitter className="w-8 h-8" />
  </a>
  <a
    href="https://www.linkedin.com/in/doriansadellari"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors"
  >
    <Linkedin className="w-8 h-8" />
  </a>
  <a
    href="https://abizadvisors.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors"
  >
    <Globe className="w-8 h-8" />
  </a>
</div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#portfolio"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[2px] h-16 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
      </motion.div>
    </section>
  )
}

export default HeroSection