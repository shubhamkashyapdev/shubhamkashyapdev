import type { NextPage } from 'next';

import { Hero } from '@/components';
import {
  Blogs,
  Clients,
  CodeSnippets,
  FeaturedProjects,
  ProblemSolver,
  TechStack,
} from '@/components/common';
import { getSnippetsForHome } from '@/graphql/Library';
import { getProjectsForHome } from '@/graphql/Project';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type {
  CodeSnippetCardType,
  ProjectCardType,
} from '@/types/component.types';
import { axiosGraphQL } from '@/utils/axios';

type IndexType = {
  snippets: CodeSnippetCardType[];
  projects: ProjectCardType[];
};

const Index: NextPage<IndexType> = ({ snippets, projects }) => {
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
      <Clients />
      <TechStack />
      <Blogs />
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
  const snippets = snippetsRes.data?.data?.Libraries?.docs;
  const projects = projectsRes.data?.data?.Projects?.docs;
  return {
    props: {
      snippets,
      projects,
    },
  };
};

export default Index;
