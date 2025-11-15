'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Front-End Development',
    skills: [
      'React JS',
      'Next.js',
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'Material-UI',
      'Tailwind CSS',
      'Redux-Toolkit',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Back-End Development',
    skills: ['Node.js', 'Express.js'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Development Tools & Frameworks',
    skills: ['GitHub', 'NPM', 'Yarn', 'GitHub Copilot'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Animation',
    skills: ['Framer Motion'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'Firebase'],
    color: 'from-yellow-500 to-orange-500',
  },

  {
    title: 'Desktop Application Development',
    skills: ['Electron.js'],
    color: 'from-red-500 to-pink-500',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all hover:shadow-xl hover:shadow-purple-500/10"
            >
              <h3
                className={`text-xl font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

