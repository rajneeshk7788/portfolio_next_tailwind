'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-8 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-gray-700 shadow-xl"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Experienced in building responsive, user-friendly applications with
            a strong focus on performance and design. Skilled in developing
            dynamic user interfaces and collaborating with cross-functional
            teams to deliver high-quality solutions.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Familiar with back-end technologies, including designing RESTful
            APIs, managing databases, and integrating efficient data handling
            systems. Adaptable to fast-paced environments, committed to
            continuous learning, and driven to innovate with emerging
            technologies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span className="text-gray-400">Location: Indore, Madhya Pradesh</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <span className="text-gray-400">Available for opportunities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

