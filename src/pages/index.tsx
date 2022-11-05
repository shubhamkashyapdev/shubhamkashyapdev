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
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { CodeSnippetCardType } from '@/types/component.types';
import { axiosGrapQL } from '@/utils/axios';

type IndexType = {
  docs: CodeSnippetCardType[];
};

const Index: NextPage<IndexType> = ({ docs }) => {
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
      <CodeSnippets snippets={docs} />
    </Main>
  );
};

export const getServerSideProps = async () => {
  const res = await axiosGrapQL.post(`/`, {
    query: getSnippetsForHome,
  });
  const data = res.data?.data?.Libraries?.docs;
  return {
    props: {
      docs: data,
    },
  };
};

export default Index;
