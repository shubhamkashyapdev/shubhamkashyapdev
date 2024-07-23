'use client';

import { IconMoon, IconSun } from '@tabler/icons-react';
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
      className={`rounded-md border border-primary-700 p-2 text-lg text-primary-700 shadow-md hover:border-primary-300 hover:text-primary-300 focus:outline-none focus-visible:border-primary-300 focus-visible:text-primary-300 ${
        theme === 'dark'
          ? 'dark:border-gray-600 dark:text-white dark:hover:border-primary-300 dark:hover:text-primary-300 dark:focus-visible:border-primary-300 dark:focus-visible:text-primary-300 md:p-2.5 md:text-xl'
          : 'md:p-2.5 md:text-xl'
      }`}
    >
      {theme === 'dark' ? (
        <IconSun stroke={1} />
      ) : (
        <IconMoon stroke={1} color="black" />
      )}
    </motion.button>
  );
};

export default ToggleButton;
