import type { FC } from 'react';
import React from 'react';

import { BlogCard, SeeMoreButton } from '@/components/common';
import SectionTitle from '@/components/common/elements/MainTitle';
import type { BlogCardType } from '@/types/component.types';

type BlogsType = {
  blogs: BlogCardType[];
};

const Blogs: FC<BlogsType> = ({ blogs }) => {
  return (
    <section className="section">
      <SectionTitle>Featured Posts</SectionTitle>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {blogs?.map((item, index) => (
          <BlogCard key={`blogs-${index}`} {...item} />
        ))}
      </div>
      <SeeMoreButton route="/blogs">See more post</SeeMoreButton>
    </section>
  );
};

export default Blogs;
