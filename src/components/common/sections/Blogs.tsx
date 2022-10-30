import Link from 'next/link';
import React from 'react';

import { BlogCard, PrimaryHeading } from '@/components/common';
import { blogs } from '@/utils/Blogs';

const Blogs = () => {
  return (
    <section className="section">
      <PrimaryHeading>Featured Posts</PrimaryHeading>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {blogs.map((item, index) => (
          <BlogCard key={`blogs-${index}`} {...item} />
        ))}
      </div>
      <Link href="/blog">
        <a className="animate-shadow mt-8 inline-flex scale-100 rounded border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-800 shadow-sm transition duration-100 hover:scale-[1.03] focus:outline-none focus-visible:ring focus-visible:ring-primary-300 active:scale-[0.97] disabled:bg-gray-200 motion-safe:transform-gpu motion-reduce:hover:scale-100 motion-reduce:hover:brightness-90 dark:border-gray-600 dark:bg-primary-700 dark:text-gray-100 dark:disabled:bg-gray-700">
          See more post
        </a>
      </Link>
    </section>
  );
};

export default Blogs;
