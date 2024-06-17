import Image from 'next/image';
import React from 'react';

import type { TagType } from '@/types/component.types';

type TagsProps = {
  tags: TagType[];
};

const Tags = ({ tags = [] }: TagsProps) => {
  return (
    <div className="flex gap-2">
      {tags?.map((item, index) => (
        <span
          key={item.id}
          className="relative h-[25px] w-[25px] rounded-sm dark:bg-white"
        >
          <Image
            className="dark:rounded-sm "
            key={`tag-icon-${item?.icon}-${index}`}
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.icon?.url || '/'}`}
            layout="fill"
            objectFit="contain"
            alt={`${item.title} SVG Icon`}
          />
        </span>
      ))}
    </div>
  );
};

export default Tags;
