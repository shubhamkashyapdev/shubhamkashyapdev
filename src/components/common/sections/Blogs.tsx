import type { FC } from 'react';
import React from 'react';

import BlogCard from '@/components/common/cards/BlogCard';
import SectionTitle from '@/components/common/elements/MainTitle';
import SeeMoreButton from '@/components/common/typography/buttons/SeeMore';
import type { BlogCardType } from '@/types/component.types';

type BlogsType = {
  blogs: BlogCardType[];
};

const Blogs: FC<BlogsType> = ({ blogs }) => {
  return (
    <section className="">
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
