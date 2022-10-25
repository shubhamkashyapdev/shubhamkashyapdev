import type { FC } from 'react';
import React from 'react';

import type { IChildren } from '@/types/common.types';

type ParragraphProps = {
  className?: string;
  justified?: boolean;
} & IChildren;

const Parragraph: FC<ParragraphProps> = ({
  children,
  className,
  justified,
}) => {
  return (
    <p
      className={`text-shadow-sm mt-4 text-center text-base text-gray-900 antialiased dark:text-gray-100 md:text-left ${className}  ${
        justified ? 'text-justify' : ''
      }`}
    >
      {children}
    </p>
  );
};

export default Parragraph;
