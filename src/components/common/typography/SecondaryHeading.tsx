import type { FC } from 'react';
import React from 'react';

import type { IChildren } from '@/types/common.types';
import { SecondaryHeadingSizes } from '@/types/component.types';

type SecondaryHeadingProps = {
  className?: string;
  size?: SecondaryHeadingSizes;
} & IChildren;

const SecondaryHeading: FC<SecondaryHeadingProps> = ({
  children,
  className,
  size,
}) => {
  const sizeClasses =
    // eslint-disable-next-line no-nested-ternary
    size === SecondaryHeadingSizes.SM
      ? `text-[1.3rem] md:text-[1.4rem] xl:text-[1.6rem]`
      : size === SecondaryHeadingSizes.LG
      ? `text-[1.6rem] md:text-[1.8rem] xl:text-[2.2rem]`
      : `text-[1.2rem] md:text-[1.4rem] xl:text-[1.7rem]`;
  return (
    <h2
      className={`text-[1.5rem] font-bold leading-snug text-gray-900 dark:text-gray-200 md:text-[1.6rem] xl:text-[1.7rem]  ${sizeClasses} ${className}`}
    >
      {children}
    </h2>
  );
};

export default SecondaryHeading;
