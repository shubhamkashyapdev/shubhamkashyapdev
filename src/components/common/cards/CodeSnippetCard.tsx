'use client';

import { useRouter } from 'next/navigation';
import type { FC } from 'react';
import React from 'react';

import CardMeta from '@/components/common/elements/CardMeta';
import Parragraph from '@/components/common/typography/Parragraph';
import type { CodeSnippetCardType } from '@/types/component.types';

const CodeSnippetCard: FC<CodeSnippetCardType> = ({
  tagline,
  views,
  tags,
  title,
  id,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/library/${id}`)}
      className="animate-shadow card-border h-full scale-100 cursor-pointer rounded-md bg-white transition duration-100 hover:scale-[1.04] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 dark:bg-primary-700"
    >
      <div className="block h-full rounded-md p-2 py-4 focus:outline-none focus-visible:ring focus-visible:ring-primary-300">
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-300">
          {title}
        </h3>
        <CardMeta views={views} tags={tags} />
        <Parragraph className="mt-2 text-[0.85rem]">{tagline}</Parragraph>
      </div>
    </div>
  );
};

export default CodeSnippetCard;
