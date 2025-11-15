'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rajneeshkush780@gmail.com',
    href: 'mailto:rajneeshkush780@gmail.com',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '7803838342',
    href: 'tel:+917803838342',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Indore, Madhya Pradesh',
    href: '#',
    color: 'from-purple-500 to-pink-500',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/rajneesh12',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/rajneeshk7788',
    color: 'from-gray-500 to-gray-600',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-400 mb-12 text-lg"
        >
          I'm always open to discussing new opportunities and interesting projects.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all hover:shadow-xl text-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${info.color} mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-sm text-gray-400 mb-1">{info.label}</h3>
                <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                  {info.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${social.color} rounded-lg text-white font-semibold hover:shadow-lg transition-all`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
                <span>{social.label}</span>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} Rajneesh Kushwaha. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}

