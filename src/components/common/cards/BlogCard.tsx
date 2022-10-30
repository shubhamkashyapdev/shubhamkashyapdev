/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import type { BlogCardType } from '@/types/component.types';

const BlogCard: FC<BlogCardType> = ({
  createdAt,
  excerpt,
  image,
  readTime,
  tags,
  title,
  viewes,
}) => {
  return (
    <div className="w-full scale-100 cursor-pointer overflow-hidden rounded-md border border-gray-400 bg-white  transition duration-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 dark:border-gray-600 dark:bg-primary-700">
      <div className="block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300">
        <div className="relative h-[150px]">
          {/* image */}
          <div className="h-full w-full ">
            <Image
              src={image}
              className="rounded-t-lg"
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          {/* tags */}
          <div className="absolute bottom-0 mt-2 flex w-full flex-wrap justify-end gap-y-1 gap-x-2 px-4 py-2 text-sm text-black dark:text-gray-100">
            {tags.map((item, index) => (
              <button
                key={`blog-card-tag-${item.tag}-${index}`}
                className="inline-block rounded-md bg-gray-100 bg-opacity-80 px-1.5 py-0.5 font-medium text-gray-700 transition-colors hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-primary-300 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-300 dark:bg-gray-700 dark:!bg-opacity-60 dark:text-gray-200 dark:hover:text-white dark:disabled:bg-gray-600 dark:disabled:text-gray-500"
              >
                {item.tag}
              </button>
            ))}
          </div>
        </div>
        <div className="p-4 pb-6">
          <h4 className="text-gray-800 dark:text-gray-100">
            {title.substring(0, 55)}
            {title.length > 55 ? '...' : ''}
          </h4>
          <div className="mt-2 flex items-center justify-start gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="inline-block text-base"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="bg-gradient-to-tr from-primary-300/40 via-primary-300/40 to-primary-400/40 transition-colors dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent">
                {readTime} min read
              </span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="inline-block text-base"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
              <span className="bg-gradient-to-tr from-primary-300/40 via-primary-300/40 to-primary-400/40 transition-colors dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent">
                {viewes} views
              </span>
            </div>
          </div>
          <p className="mt-4 mb-2 text-sm text-gray-600 dark:text-gray-300">
            <span className="font-bold text-gray-800 dark:text-gray-100">
              {createdAt}
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
