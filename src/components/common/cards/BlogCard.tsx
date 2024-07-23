'use client';

/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable react/no-unescaped-entities */
import { IconClockHour10, IconEye } from '@tabler/icons-react';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import React from 'react';

import type { BlogCardType } from '@/types/component.types';

const BlogCard = ({
  slug,
  createdAt,
  excerpt,
  featuredImage,
  readTime,
  allTags = [],
  title,
  views,
}: BlogCardType) => {
  const router = useRouter();
  const { theme } = useTheme();
  const handleNavigate = () => {
    router.push(`/blogs/${slug}`);
  };
  return (
    <div
      onClick={handleNavigate}
      className="card-border w-full scale-100 cursor-pointer overflow-hidden rounded-md bg-white transition duration-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 dark:bg-primary-700"
    >
      <div className="block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300">
        <div className="relative h-[150px]">
          {/* image */}
          <div className="h-full w-full">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${
                featuredImage?.url || '/'
              }`}
              className="rounded-t-lg"
              layout="fill"
              objectFit="cover"
              alt={title}
            />
          </div>
          {/* tags */}
          <div className="absolute bottom-0 mt-2 flex w-full flex-wrap justify-end gap-y-1 gap-x-2 px-4 py-2 text-sm text-black dark:text-gray-100">
            {allTags?.map((item, index) => (
              <button
                key={`blog-card-tag-${item?.id}-${index}`}
                className="inline-block rounded-md bg-gray-100 bg-opacity-80 px-1.5 py-0.5 font-medium text-gray-700 transition-colors hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-primary-300 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-300 dark:bg-gray-700 dark:!bg-opacity-60 dark:text-gray-200 dark:hover:text-white dark:disabled:bg-gray-600 dark:disabled:text-gray-500"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <div className="p-4 pb-6">
          <h4 className="text-gray-800 dark:text-gray-100">
            {title?.substring(0, 55)}
            {title?.length > 55 ? '...' : ''}
          </h4>
          <div className="mt-2 flex items-center justify-start gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1">
              <IconClockHour10
                stroke={2}
                size={15}
                color={theme === 'dark' ? 'white' : 'black'}
              />
              <span className="bg-gradient-to-tr from-primary-300/40 via-primary-300/40 to-primary-400/40 transition-colors dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent">
                {readTime} min read
              </span>
            </div>
            <div className="flex items-center gap-1">
              <IconEye
                stroke={2}
                size={18}
                color={theme === 'dark' ? 'white' : 'black'}
              />
              <span className="bg-gradient-to-tr from-primary-300/40 via-primary-300/40 to-primary-400/40 transition-colors dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent">
                {views || 0} views
              </span>
            </div>
          </div>
          <p className="mt-4 mb-2 text-sm text-gray-600 dark:text-gray-300">
            <span className="font-bold text-gray-800 dark:text-gray-100">
              {dayjs(createdAt).format('MMM DD, YYYY')}
            </span>
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {excerpt.substring(0, 120)}
            {excerpt.length > 120 ? '...' : ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
