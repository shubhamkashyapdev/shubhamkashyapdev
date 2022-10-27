import type { FC } from 'react';
import React from 'react';

import type { IChildren } from '@/types/common.types';
import { PrimaryHeadingSizes } from '@/types/component.types';

type PrimaryHeadingProps = {
  className?: string;
  size?: PrimaryHeadingSizes;
} & IChildren;

const PrimaryHeading: FC<PrimaryHeadingProps> = ({
  children,
  className,
  size,
}) => {
  const sizeClasses =
    // eslint-disable-next-line no-nested-ternary
    size === PrimaryHeadingSizes.SM
      ? `text-[1.3rem] md:text-[1.4rem] xl:text-[1.6rem]`
      : size === PrimaryHeadingSizes.LG
      ? `text-[1.6rem] md:text-[1.8rem] xl:text-[2.2rem]`
      : `text-[1.4rem] md:text-[1.5rem] xl:text-[1.7rem]`;
  return (
    <h2
      className={`text-[1.5rem] font-bold leading-snug text-gray-900 dark:text-gray-200 md:text-[1.6rem] xl:text-[1.7rem] ${className} ${sizeClasses}`}
    >
      {children}
    </h2>
  );
};

export default PrimaryHeading;
