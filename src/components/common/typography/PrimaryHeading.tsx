import type { FC } from 'react';
import React from 'react';

import type { IChildren } from '@/types/common.types';

type PrimaryHeadingProps = {
  className?: string;
} & IChildren;

const PrimaryHeading: FC<PrimaryHeadingProps> = ({ children, className }) => {
  return (
    <h2
      className={`text-[2.4rem] font-bold leading-snug text-gray-900 dark:text-gray-200 md:text-[2.6rem] xl:text-[3.2rem] ${className}`}
    >
      {children}
    </h2>
  );
};

export default PrimaryHeading;
