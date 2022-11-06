import type { FC } from 'react';
import React from 'react';

import { Parragraph } from '@/components/common';

type BlockquoteType = {
  subTagline: string;
  className?: string;
};

const Blockquote: FC<BlockquoteType> = ({ subTagline, className }) => {
  return (
    <blockquote className={`relative my-8 italic ${className}`}>
      <Parragraph className="ml-6 before:absolute before:left-0 before:h-full before:w-1  before:bg-gradient-to-bl before:from-primary-200 before:to-primary-300">
        {subTagline}
      </Parragraph>
    </blockquote>
  );
};

export default Blockquote;
