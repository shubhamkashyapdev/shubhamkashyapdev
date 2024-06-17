'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import type { FC } from 'react';
import React from 'react';

import { fadeDown } from '@/components/common/animation/variants';

const ToggleButton: FC = () => {
  const { theme, setTheme } = useTheme();
  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <motion.button
      variants={fadeDown}
      initial="initial"
      animate="animate"
      transition={{ ease: 'easeIn', duration: 0.6 }}
      onClick={handleToggle}
      className="rounded-md border border-primary-700  p-2 text-lg text-primary-700 shadow-md  hover:border-primary-300 hover:text-primary-300 focus:outline-none focus-visible:border-primary-300 focus-visible:text-primary-300 dark:border-gray-600 dark:text-white dark:hover:border-primary-300 dark:hover:text-primary-300 dark:focus-visible:border-primary-300 dark:focus-visible:text-primary-300 md:p-2.5 md:text-xl"
    >
      {theme === 'dark' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )}
    </motion.button>
  );
};

export default ToggleButton;
