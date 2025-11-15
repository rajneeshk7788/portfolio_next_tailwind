'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'Xecta Web Application',
    description: 'Build a responsive and dynamic front-end for an enhanced user experience.',
    period: 'Mar 2023 - present',
    highlights: [
      'Led front-end development initiatives, enhancing UI/UX and optimizing performance',
      'Utilized React Highcharts, React Flow, and D3.js for advanced data visualization',
      'Employed Material-UI and CSS to craft interactive, responsive interfaces',
      'Collaborated with cross-functional teams to ensure seamless integration across systems, ensuring a cohesive and high-quality user experience',
    ],
    tech: ['React', 'Material-UI', 'React Highcharts', 'React Flow', 'D3.js'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Dashboard Application',
    description: 'Built an interactive data visualization and analytics dashboard.',
    period: 'Jul 2022 - Mar 2023',
    highlights: [
      'Enhanced a real-time data visualization dashboard utilizing Material-UI, React Highcharts, and related libraries',
      'Engineered reusable UI components to ensure design consistency, scalability, and maintainability, while optimizing performance with large datasets',
      'Integrated GraphQL for efficient data retrieval and management, enabling dynamic real-time updates and improving overall application responsiveness and reliability',
    ],
    tech: ['React', 'Material-UI', 'React Highcharts', 'GraphQL'],
    gradient: 'from-purple-500 to-pink-500',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
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
            Featured Projects
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all hover:shadow-xl overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.title}
                  </h3>
                  <ExternalLink className="text-gray-500 group-hover:text-blue-400 transition-colors" size={20} />
                </div>

                <div className="flex items-center gap-2 text-gray-400 mb-4 text-sm">
                  <Calendar size={16} />
                  <span>{project.period}</span>
                </div>

                <p className="text-gray-300 mb-6">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300 border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

