import type { NextPage } from 'next';
import useSWR from 'swr';

import { Hero } from '@/components';
import {
  Blogs,
  Clients,
  CodeSnippets,
  FeaturedProjects,
  ProblemSolver,
  TechStack,
} from '@/components/common';
import { fetcher } from '@/graphql';
import { getSnippetsForHome } from '@/graphql/Library';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index: NextPage = () => {
  const { data, isValidating } = useSWR(getSnippetsForHome, fetcher);

  const snippets = data?.Libraries?.docs;

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
      <FeaturedProjects />
      <CodeSnippets snippets={snippets} isLoading={isValidating} />
    </Main>
  );
};

export default Index;
