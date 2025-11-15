'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Full-Stack Web Development',
    institution: 'Universal Informatics',
    location: 'Indore, Madhya Pradesh',
    period: 'Aug 2021 - Apr 2022',
  },
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Awadesh Pratap Singh University',
    location: 'Rewa, Madhya Pradesh',
    period: 'Jul 2019 - Jun 2021',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Awadesh Pratap Singh University',
    location: 'Rewa, Madhya Pradesh',
    period: 'Jul 2016 - Jun 2019',
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Education
          </span>
        </motion.h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-blue-400 font-semibold mb-3">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

