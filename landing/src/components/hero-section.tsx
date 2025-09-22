'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your AI <span className="text-gradient">Cooking Assistant</span>
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl font-medium text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Step-by-step recipes, ingredient questions, and all your cooking needs{' '}
        <span className="inline-block mt-1 text-primary font-semibold">— just ask your AI assistant.</span>
      </motion.p>
      <motion.div
        className="flex justify-center gap-4 flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a 
          href="https://demo.allyoucancook.life/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 font-semibold"
        >
          Try App
        </a>
        <a 
          href="https://forms.gle/xhC3GgxG2vy3GkJE8"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-primary text-white rounded-full text-lg hover:bg-primary-light transition-colors"
        >
          Join Waitlist
        </a>
      </motion.div>
    </section>
  );
}
