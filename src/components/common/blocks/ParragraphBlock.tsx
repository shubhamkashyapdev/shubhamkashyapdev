import type { FC } from 'react';
import React from 'react';

type ParragraphBlockType = {
  className?: string;
  justified?: boolean;
  children?: React.ReactNode;
};

const ParragraphBlock: FC<ParragraphBlockType> = ({
  children,
  className,
  justified,
}) => {
  return (
    <p
      className={`text-shadow-sm mt-4 text-[1.1rem] text-gray-700 antialiased dark:text-gray-300 ${className}  ${
        justified ? 'text-justify' : ''
      }`}
    >
      {children}
    </p>
  );
};

export default ParragraphBlock;
