import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import type { TagType } from '@/types/component.types';

type TagsProps = {
  tags: TagType[];
};

const Tags: FC<TagsProps> = ({ tags }) => {
  return (
    <div className="mt-2 -mt-[1px] flex gap-2">
      {tags.map((item, index) => (
        <Image
          className="dark:rounded-sm dark:bg-white"
          key={`tag-icon-${item.icon}-${index}`}
          src={item.icon}
          height={20}
          width={20}
          objectFit="cover"
          alt={`${item.title} SVG Icon`}
        />
      ))}
    </div>
  );
};

export default Tags;
