import type { NextPage } from 'next';

import { Hero } from '@/components';
import {
  CodeSnippets,
  FeaturedProjects,
  ProblemSolver,
  TechStack,
} from '@/components/common';
import Blogs from '@/components/common/sections/Blogs';
import { getBlogsForHome } from '@/graphql/Blogs';
import { getSnippetsForHome } from '@/graphql/Library';
import { getProjectsForHome } from '@/graphql/Project';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type {
  BlogCardType,
  CodeSnippetCardType,
  ProjectCardType,
} from '@/types/component.types';
import { axiosGraphQL } from '@/utils/axios';

type IndexType = {
  snippets: CodeSnippetCardType[];
  projects: ProjectCardType[];
  blogs: BlogCardType[];
};

const Index: NextPage<IndexType> = ({ snippets, projects, blogs }) => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Hero />
      <ProblemSolver />
      <TechStack />
      <Blogs blogs={blogs} />
      <FeaturedProjects projects={projects} />
      <CodeSnippets snippets={snippets} />
    </Main>
  );
};

export const getServerSideProps = async () => {
  const snippetsRes = await axiosGraphQL.post(`/`, {
    query: getSnippetsForHome,
  });
  const projectsRes = await axiosGraphQL.post(`/`, {
    query: getProjectsForHome,
  });
  const blogsRes = await axiosGraphQL.post(`/`, {
    query: getBlogsForHome,
  });
  const snippets = snippetsRes.data?.data?.Libraries?.docs;
  const projects = projectsRes.data?.data?.Projects?.docs;
  const blogs = blogsRes.data?.data?.Posts?.docs;
  return {
    props: {
      snippets,
      projects,
      blogs,
    },
  };
};

export default Index;
