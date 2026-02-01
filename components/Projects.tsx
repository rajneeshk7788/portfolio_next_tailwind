'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link'
import Image from 'next/image';

const projects = [
  {
    title: 'Xecta Web Application',
    link: '',
    image: '/project-placeholder.png',
    description: 'Responsive front-end application focused on performance and usability.',
    period: 'Mar 2023 - Present',
    highlights: [
      'Led front-end development and improved UI performance',
      'Built advanced visualizations using charts and flow-based components',
      'Worked closely with teams to deliver a seamless user experience',
    ],
    tech: ['React', 'Material-UI', 'Highcharts', 'React Flow', 'D3.js'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Dashboard Application',
    link: '',
    image: '/project-placeholder.png',
    description: 'Interactive analytics dashboard with real-time data.',
    period: 'Jul 2022 - Mar 2023',
    highlights: [
      'Developed real-time dashboards with reusable UI components',
      'Optimized performance for large datasets',
      'Integrated GraphQL for efficient data handling',
    ],
    tech: ['React', 'Material-UI', 'Highcharts', 'GraphQL'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Events Management Application',
    link: 'https://event-management-we-git-975080-rksatna777888-gmailcoms-projects.vercel.app/',
    image: '/event.png',
    description: 'Event management platform with modern UI and animations.',
    period: 'Jul 2022 - Mar 2023',
    highlights: [
      'Built a scalable events management application',
      'Added smooth animations and transitions',
      'Designed a fully responsive interface',
    ],
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Weather Dashboard',
    link: 'https://wether-dashboard-git-main-rksatna777888-gmailcoms-projects.vercel.app/',
    image: '/weather.png',
    description: 'Animated dashboard showing real-time weather data.',
    period: 'Jul 2022 - Mar 2023',
    highlights: [
      'Displayed real-time weather data using APIs',
      'Implemented smooth UI animations',
      'Built responsive and clean layouts',
    ],
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    gradient: 'from-blue-500 to-cyan-500',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused && isInView) {
      const interval = setInterval(() => {
        scrollTo('right');
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, isInView]);

  const scrollTo = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { current: container } = containerRef;
      const scrollAmount = container.clientWidth / 2;
      const maxScroll = container.scrollWidth - container.clientWidth;

      let newScrollLeft = container.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);

      if (newScrollLeft > maxScroll + 10) {
        newScrollLeft = 0;
      } else if (newScrollLeft < 0) {
        newScrollLeft = maxScroll;
      }

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const index = Math.round(scrollLeft / (clientWidth / 2));
      setActiveIndex(index);
    }
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div
        className="max-w-6xl mx-auto relative group/carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
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

        <div className="relative">
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide scroll-smooth"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex-none w-full md:w-[calc(50%-1rem)] snap-start group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-gray-600 transition-all hover:shadow-xl overflow-hidden flex flex-col"
              >
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-900 border-b border-gray-700/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent`} />
                </div>

                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl pointer-events-none`} />

                <div className="relative z-10 p-5 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.title}
                    </h3>
                    {project.link && (
                      <Link href={`${project.link}`} target="_blank" >
                        <ExternalLink className="text-gray-500 group-hover:text-blue-400 transition-colors hover:cursor-pointer" size={18} />
                      </Link>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 mb-3 text-xs">
                    <Calendar size={14} />
                    <span>{project.period}</span>
                  </div>

                  <p className="text-gray-300 mb-2 text-sm">{project.description}</p>

                  <ul className="space-y-1 mb-4 flex-grow">
                    {project.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-start gap-2 text-xs text-gray-400"
                      >
                        <span className="text-blue-400 mt-0.5">▹</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gray-700/50 rounded-full text-[10px] text-gray-300 border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scrollTo('left')}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20 p-2 rounded-full bg-gray-800/80 border border-gray-700 text-white hover:bg-gray-700 transition-all opacity-0 group-hover/carousel:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scrollTo('right')}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20 p-2 rounded-full bg-gray-800/80 border border-gray-700 text-white hover:bg-gray-700 transition-all opacity-0 group-hover/carousel:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
            {projects.map((_, index) => (
              // Showing roughly one dot per slide group if needed, or just all dots. 
              // For 2 items view, dots might represent pages. 
              // Let's keep one dot per item for simplicity as requested "slide 1, slide 2..."
              <button
                key={index}
                onClick={() => {
                  if (containerRef.current) {
                    const scrollAmount = containerRef.current.clientWidth / 2;
                    containerRef.current.scrollTo({ left: index * scrollAmount, behavior: 'smooth' });
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-blue-500 w-6' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

