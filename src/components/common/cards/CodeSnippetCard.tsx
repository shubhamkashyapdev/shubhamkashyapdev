import type { FC } from 'react';
import React from 'react';
import { Heartbeat } from 'tabler-icons-react';

import { Parragraph, Tags } from '@/components/common';
import type { CodeSnippetCardProps } from '@/types/component.types';

const CodeSnippetCard: FC<CodeSnippetCardProps> = ({
  tagline,
  views,
  tags,
  title,
}) => {
  return (
    <div className="animate-shadow card-border h-full scale-100 rounded-md bg-white transition duration-100 hover:scale-[1.04] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 dark:bg-primary-700">
      <div className="block h-full rounded-md p-2 py-4 focus:outline-none focus-visible:ring focus-visible:ring-primary-300">
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-300">
          {title}
        </h3>
        <div className="flex items-baseline gap-4">
          <div className="flex items-center gap-3 text-sm text-gray-800 dark:text-gray-300">
            <span>
              <Heartbeat />
            </span>
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Tags tags={tags} />
          </div>
        </div>
        <Parragraph className="mt-2 text-[0.85rem]">{tagline}</Parragraph>
      </div>
    </div>
  );
};

export default CodeSnippetCard;
