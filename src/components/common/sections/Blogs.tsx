import React from 'react';

import { BlogCard, PrimaryHeading, SeeMoreButton } from '@/components/common';
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
      <SeeMoreButton route="/blog">See more post</SeeMoreButton>
    </section>
  );
};

export default Blogs;
