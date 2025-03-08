'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Navigation from '../components/Navigation';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const AnimatedBackground = dynamic(() => import('../components/AnimatedBackground'), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      {mounted && <AnimatedBackground />}
      <Navigation />
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-20 mt-16"
        >
          <h1 className="text-6xl font-bold text-white mb-6">
            你好，我是
            <span className="text-blue-400">开发者</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-300 mb-8"
          >
            欢迎来到我的个人空间
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4"
          >
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              了解更多
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
              联系我
            </button>
          </motion.div>
        </motion.div>

        <Projects />
        <Contact />
      </div>
    </div>
  );
} 