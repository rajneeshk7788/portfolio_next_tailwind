'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'NextLoop Technologies LLP',
    role: 'Software Engineer',
    location: 'Indore, Madhya Pradesh',
    period: 'Jul 2022 - present',
    responsibilities: [
      'Developed and maintained high-performance, responsive web applications to enhance user experience',
      'Collaborated with designers, backend developers, and product managers to implement and optimize features',
      'Refactored and optimized code for better performance, scalability, and maintainability',
      'Conducted code reviews to ensure quality and best practices',
      'Built reusable UI components and managed state efficiently for a seamless user experience',
      'Contributed to backend development by working with RESTful APIs, basic server-side logic, and database integration',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all hover:shadow-xl hover:shadow-blue-500/10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                      <Briefcase className="text-blue-400" size={24} />
                      {exp.role}
                    </h3>
                    <p className="text-xl text-blue-400 font-semibold mb-2">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-6 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="text-blue-400 mt-1.5">▹</span>
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

