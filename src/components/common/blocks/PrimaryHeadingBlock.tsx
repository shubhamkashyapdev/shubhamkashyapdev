import type { FC } from 'react';
import React from 'react';

type PrimaryHeadingBlockType = {
  variant?: 'PRIMARY' | 'SECONDARY';
  className?: string;
  children: string;
};

const PrimaryHeadingBlock: FC<PrimaryHeadingBlockType> = ({
  children,
  className,
  variant,
}) => {
  return (
    <h2
      className={` font-bold text-gray-800 dark:text-gray-300 ${
        variant === 'PRIMARY'
          ? 'mt-16 mb-4 text-3xl md:text-4xl xl:text-5xl'
          : 'mt-4 mb-6 text-xl md:text-2xl xl:text-3xl'
      } ${className}`}
    >
      {children}
    </h2>
  );
};

export default PrimaryHeadingBlock;
