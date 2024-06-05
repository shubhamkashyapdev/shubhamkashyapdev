import type { FC } from 'react';
import React, { useEffect, useState } from 'react';

import { BlogCard, Parragraph } from '@/components/common';
import { PageTitle, SearchBar, Topic } from '@/components/common/elements';
import { getAllBlogsForCards } from '@/graphql/Blogs';
import { Meta } from '@/layouts/Meta';
import useBlogsStore from '@/store/blogsStore';
import { Main } from '@/templates/Main';
import type { BlogCardType, TagType } from '@/types/component.types';
import { axiosGraphQL } from '@/utils/axios';

type BlogsType = {
  docs: BlogCardType[];
};

const Blogs: FC<BlogsType> = ({ docs }) => {
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
        const { tags } = item;
        const topicExists = tags.find((tag: TagType) => tag.title === topic);
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
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <PageTitle>Blogs</PageTitle>
      <Parragraph className="mt-0 text-[1.15rem]">
        Thoughts, Solutions, Concepts on Full Stack Development
      </Parragraph>
      <SearchBar value={value} setValue={setValue} />
      <Topic handleClick={handleClick} topics={['Next.js', 'React.js']} />
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {filteredBlogs.map((item: BlogCardType) => (
          <BlogCard key={item.id} {...item} />
        ))}
      </section>
    </Main>
  );
};

export const getServerSideProps = async () => {
  const projectsRes = await axiosGraphQL.post(`/`, {
    query: getAllBlogsForCards,
  });
  const blogs = projectsRes.data?.data?.Posts?.docs;
  return {
    props: {
      docs: blogs,
    },
  };
};

export default Blogs;
