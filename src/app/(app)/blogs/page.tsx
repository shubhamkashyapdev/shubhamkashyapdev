import React from 'react';

import Blogs from '@/components/views/Blogs';
import { getAllBlogsForCards } from '@/graphql/Blogs';
import type { BlogCardType } from '@/types/component.types';
import { axiosGraphQL } from '@/utils/axios';

async function getBlogs() {
  const projectsRes = await axiosGraphQL.post(`/`, {
    query: getAllBlogsForCards,
  });
  const blogs = projectsRes.data?.data?.Posts?.docs;
  return blogs;
}

const BlogsPage = async () => {
  const docs: BlogCardType[] = await getBlogs();
  return <Blogs docs={docs} />;
};

export default BlogsPage;
