/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable react/no-unescaped-entities */

'use client';

import Image from 'next/image';
import React from 'react';

import type { BoilerplateCardType } from '@/types/component.types';

const BoilerplateCard = ({
  image,
  allTags = [],
  title,
  description,
  githubURL,
}: BoilerplateCardType) => {
  const handleNavigate = () => {
    window.open(githubURL, '_blank');
  };
  return (
    <div
      onClick={handleNavigate}
      className="card-border w-full scale-100 cursor-pointer overflow-hidden rounded-md  bg-white  transition duration-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100  dark:bg-primary-700"
    >
      <div className="block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300">
        <div className="relative h-[225px]">
          {/* image */}
          <div className="h-full w-full ">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${image?.url}`}
              className="rounded-t-lg"
              layout="fill"
              objectFit="cover"
              alt={title}
            />
          </div>
          {/* allTags */}
          <div className="absolute bottom-0 mt-2 flex w-full flex-wrap justify-end gap-y-1 gap-x-2 px-4 py-2 text-sm text-black dark:text-gray-100">
            {allTags?.map((item, index) => (
              <button
                key={`blog-card-tag-${item.title}-${index}`}
                className="inline-block rounded-md bg-gray-100 bg-opacity-80 px-1.5 py-0.5 font-medium text-gray-700 transition-colors hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-primary-300 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-300 dark:bg-gray-700 dark:!bg-opacity-60 dark:text-gray-200 dark:hover:text-white dark:disabled:bg-gray-600 dark:disabled:text-gray-500"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <div className="p-4 pb-6">
          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            {title?.substring(0, 55)}
            {title?.length > 55 ? '...' : ''}
          </h4>

          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            {description?.substring(0, 120)}
            {description?.length > 120 ? '...' : ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoilerplateCard;
