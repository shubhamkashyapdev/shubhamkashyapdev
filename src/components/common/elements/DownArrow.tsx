'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { fadeDown } from '@/components/common/animation/variants';

const DownArrow = () => {
  return (
    <Link href="#technologyStack">
      <motion.span
        variants={fadeDown}
        initial="initial"
        animate="animate"
        transition={{ ease: 'easeIn', duration: 0.8 }}
        className="absolute top-[102%] left-[46%] -translate-x-1/2 cursor-pointer rounded-md text-gray-800 transition-colors hover:text-primary-300 focus-visible:text-primary-300 dark:text-gray-300 hover:dark:text-primary-300 md:top-[100%] md:bottom-10"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="h-8 w-8 animate-bounce md:h-10 md:w-10"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="M112 268l144 144 144-144M256 392V100"
          ></path>
        </svg>
      </motion.span>
    </Link>
  );
};

export default DownArrow;
