import type { NextPage } from 'next';

import { Hero } from '@/components';
import {
  Boilerplates,
  CodeSnippets,
  FeaturedProjects,
  ProblemSolver,
  TechStack,
} from '@/components/common';
import Blogs from '@/components/common/sections/Blogs';
import { getDataForHomePage } from '@/graphql/Main';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type {
  BlogCardType,
  BoilerplateCardType,
  CodeSnippetCardType,
  ProjectCardType,
} from '@/types/component.types';
import { axiosGraphQL } from '@/utils/axios';

type IndexType = {
  snippets: CodeSnippetCardType[];
  projects: ProjectCardType[];
  blogs: BlogCardType[];
  boilerplates: BoilerplateCardType[];
};

const Index: NextPage<IndexType> = ({
  snippets,
  projects,
  blogs,
  boilerplates,
}) => {
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
      <Boilerplates boilerplates={boilerplates} />
      <Blogs blogs={blogs} />
      <FeaturedProjects projects={projects} />
      <CodeSnippets snippets={snippets} />
    </Main>
  );
};

export const getServerSideProps = async () => {
  const res = await axiosGraphQL.post(`/`, {
    query: getDataForHomePage,
  });
  const snippets = res.data?.data?.Libraries?.docs;
  const projects = res.data?.data?.Projects?.docs;
  const blogs = res.data?.data?.Posts?.docs;
  const boilerplates = res.data?.data?.Boilerplates?.docs;

  return {
    props: {
      snippets,
      projects,
      blogs,
      boilerplates,
    },
  };
};

export default Index;
