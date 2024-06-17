'use client';

import type { Metadata } from 'next';
import React, { useEffect, useState } from 'react';

import BlogCard from '@/components/common/cards/BlogCard';
import PageTitle from '@/components/common/elements/MainTitle';
import SearchBar from '@/components/common/elements/SearchBar';
import Topic from '@/components/common/elements/Topic';
import Parragraph from '@/components/common/typography/Parragraph';
import useBlogsStore from '@/store/blogsStore';
import { Main } from '@/templates/Main';
import type { BlogCardType, TagType } from '@/types/component.types';

export const metadata: Metadata = {
  title: 'Blogs posts on shubham kashyap portfolio website',
  description: '',
};

const Blogs = ({ docs }: { docs: BlogCardType[] }) => {
  const { filteredBlogs, setFilteredBlogs, blogs, setBlogs } = useBlogsStore(
    (state) => state
  );
  const [value, setValue] = useState<string>('');

  const getFilteredSnippets = () => {
    if (value === '') {
      return blogs;
    }
    const filteredCodeSnippets = blogs!.filter((item: BlogCardType) =>
      item.title.includes(value)
    );
    return filteredCodeSnippets;
  };

  const handleClick = (topic: string) => {
    setFilteredBlogs(
      blogs.filter((item: BlogCardType) => {
        const { allTags } = item;
        const topicExists = allTags.find((tag: TagType) => tag.title === topic);
        if (topicExists) {
          return item;
        }
        return null;
      })
    );
  };

  useEffect(() => {
    setFilteredBlogs(getFilteredSnippets());
  }, [value]);

  useEffect(() => {
    setBlogs(docs);
    setFilteredBlogs(docs);
  }, []);

  return (
    <Main>
      <PageTitle>Blogs</PageTitle>
      <Parragraph className="mt-0 text-[1.15rem]">
        Thoughts, Solutions, Concepts on Full Stack Development
      </Parragraph>
      <SearchBar value={value} setValue={setValue} />
      <Topic handleClick={handleClick} topics={['Next.js', 'React.js']} />
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {filteredBlogs?.map((item: BlogCardType, index: number) => (
          <BlogCard key={`post-${item.id}-${index}`} {...item} />
        ))}
      </section>
    </Main>
  );
};

export default Blogs;
