import type { FC } from 'react';
import React from 'react';

type TitleType = {
  className?: string;
  children?: string;
  size?: 'small' | 'medium' | 'large';
};

const Title: FC<TitleType> = ({ children = 'Page Title', className, size }) => {
  return (
    <h1
      className={`text-3xl font-bold ${
        // eslint-disable-next-line no-nested-ternary
        size === 'small'
          ? 'md:text-3xl'
          : size === 'medium'
          ? 'md:text-4xl'
          : 'md:text-5xl'
      }`}
      data-fade="0"
    >
      <span
        className={`bg-gradient-to-tr from-primary-300/40 via-primary-300/40 to-primary-400/40 transition-colors dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent ${className}`}
      >
        {children}
      </span>
    </h1>
  );
};

export default Title;
