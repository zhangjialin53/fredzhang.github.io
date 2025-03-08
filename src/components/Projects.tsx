'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: '项目一',
    description: '这是一个令人惊叹的项目描述。',
    tags: ['React', 'TypeScript', 'Tailwind'],
    image: '/project1.jpg'
  },
  {
    id: 2,
    title: '项目二',
    description: '另一个激动人心的项目描述。',
    tags: ['Next.js', 'Three.js', 'GSAP'],
    image: '/project2.jpg'
  },
  {
    id: 3,
    title: '项目三',
    description: '一个创新性的项目描述。',
    tags: ['React', 'Firebase', 'Framer Motion'],
    image: '/project3.jpg'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          我的项目
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 bg-gray-700 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [项目预览图]
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 