import type { NextPage } from 'next';

import { Hero } from '@/components';
import {
  Boilerplates,
  CodeSnippets,
  FeaturedProjects,
  ProblemSolver,
  TechnologyStack,
  TechStack,
} from '@/components/common';
import Divider from '@/components/common/elements/Divider';
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
          title="Shubham Kashyap"
          description="Frelancer web developer and website designer with 3+ year of industry experience"
        />
      }
    >
      <Hero />
      <Divider
        className="mt-40 mb-32"
        id="technologyStack"
        title="Technology Stack"
      />
      <TechnologyStack />
      <Divider title="Problem Solver" />
      <ProblemSolver />
      <Divider title="Technologies Used" />
      <TechStack />
      <Divider title="Starter Templates" />
      <Boilerplates boilerplates={boilerplates} />
      <Divider title="Blogs" />
      <Blogs blogs={blogs} />
      <Divider title="Projects" />
      <FeaturedProjects projects={projects} />
      <Divider title="Code Snippets" />
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
