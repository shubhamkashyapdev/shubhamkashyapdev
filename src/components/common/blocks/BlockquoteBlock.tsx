import type { FC } from 'react';
import React from 'react';

import PrimaryHeadingBlock from './PrimaryHeadingBlock';

type BlockquoteBlockType = {
  subTagline: string;
  className?: string;
};

const BlockquoteBlock: FC<BlockquoteBlockType> = ({
  subTagline,
  className,
}) => {
  return (
    <blockquote className={`relative my-8 italic ${className}`}>
      <PrimaryHeadingBlock className="ml-6 before:absolute before:left-0 before:h-full before:w-1.5  before:bg-gradient-to-bl before:from-primary-200 before:to-primary-300">
        {subTagline}
      </PrimaryHeadingBlock>
    </blockquote>
  );
};

export default BlockquoteBlock;
