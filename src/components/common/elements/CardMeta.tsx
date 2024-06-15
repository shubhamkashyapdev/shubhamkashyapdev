import type { FC } from 'react';
import React from 'react';
import { Heartbeat } from 'tabler-icons-react';

import Tags from '@/components/common/elements/Tags';
import type { TagType } from '@/types/component.types';

type CardMetaType = {
  views: number;
  tags: TagType[];
  className?: string;
};

const CardMeta: FC<CardMetaType> = ({ views, tags, className }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex items-center gap-3 text-sm text-gray-800 dark:text-gray-300">
        <span>
          <Heartbeat />
        </span>
        <span>{views}</span>
      </div>
      <span className="mx-2 h-2 w-2 rounded-full bg-gray-700 dark:bg-gray-300"></span>
      <div className="flex items-center gap-3 text-sm">
        <Tags tags={tags} />
      </div>
    </div>
  );
};

export default CardMeta;
