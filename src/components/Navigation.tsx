'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于' },
  { id: 'projects', label: '项目' },
  { id: 'contact', label: '联系' },
];

export default function Navigation() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-xl font-bold"
          >
            我的主页
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-8"
          >
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveItem(item.id)}
                  className={`text-sm font-medium transition-colors relative ${
                    activeItem === item.id ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeItem === item.id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 h-0.5 bg-blue-400 bottom-[-4px]"
                    />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </nav>
  );
} 