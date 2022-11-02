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
      className={`text-shadow-sm mt-4 text-base text-gray-700 antialiased dark:text-gray-300 ${className}  ${
        justified ? 'text-justify' : ''
      }`}
    >
      {children}
    </p>
  );
};

export default Parragraph;
