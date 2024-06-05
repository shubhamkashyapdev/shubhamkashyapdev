import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import {
  ParragraphBlock,
  PrimaryHeadingBlock,
} from '@/components/common/blocks';
import { Blocks, CardMeta } from '@/components/common/elements';
import { getBlogDataForPage } from '@/graphql/Blogs';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { BlogCardType } from '@/types/component.types';
import { axiosGraphQL } from '@/utils/axios';

type BlogType = {
  blog: BlogCardType & any;
};

const Blog: FC<BlogType> = ({ blog }) => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Image
        src={blog?.featuredImage.url}
        height={700}
        width={1440}
        alt="notionlink project"
      />
      <PrimaryHeadingBlock variant="TITLE">{blog?.title}</PrimaryHeadingBlock>
      <ParragraphBlock className="mt-1 max-w-[70ch]">
        {blog?.excerpt}
      </ParragraphBlock>
      <CardMeta className="mt-2" tags={blog.tags} views={blog.views} />
      <Blocks blocks={blog.blocks} />
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const res = await axiosGraphQL.post(`/`, {
    query: getBlogDataForPage,
    variables: {
      id,
    },
  });
  const data = res?.data?.data?.Post;
  return {
    props: {
      blog: data,
    },
  };
};

export default Blog;
