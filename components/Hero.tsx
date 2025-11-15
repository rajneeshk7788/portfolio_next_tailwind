'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: 4,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="block">Hi, I'm</span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Rajneesh Kushwaha
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-3xl text-gray-400 mb-4"
        >
          Front End Developer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
        >
          Building responsive, user-friendly applications with a focus on
          performance and design. Passionate about creating dynamic user
          interfaces and delivering high-quality solutions.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6"
        >
          <motion.a
            href="https://github.com/rajneeshk7788"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            <span>GitHub</span>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/rajneesh12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </motion.a>

          <motion.a
            href="mailto:rajneeshkush780@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            <span>Get in Touch</span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.a
            href="#about"
            className="inline-block"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-600 rounded-full mt-2" />
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

