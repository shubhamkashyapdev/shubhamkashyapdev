import type { Metadata } from 'next';

import { Hero } from '@/components';
import Divider from '@/components/common/elements/Divider';
import Blogs from '@/components/common/sections/Blogs';
import Boilerplates from '@/components/common/sections/Boilerplates';
import CodeSnippets from '@/components/common/sections/CodeSnippets';
import FeaturedProjects from '@/components/common/sections/FeaturedProjects';
import ProblemSolver from '@/components/common/sections/ProblemSolver';
import TechnologyStack from '@/components/common/sections/TechnologyStack';
import TechStack from '@/components/common/sections/TechStack';
import {
  getBoilerplatesForHomePage,
  getLibrariesForHomePage,
  getPostsForHomePage,
  getProjectsForHomePage,
} from '@/graphql/Main';
import { Main } from '@/templates/Main';
import { axiosGraphQL } from '@/utils/axios';

export const metadata: Metadata = {
  title: 'Shubham Kashyap Portfolio',
  description:
    'Full stack javascript developer - exploring the world of Genrative AI and ChatBot applications',
};

const HomePage = async () => {
  const [librariesRes, projectsRes, postsRes, boilerplatesRes] =
    await Promise.all([
      axiosGraphQL.post('/', { query: getLibrariesForHomePage }),
      axiosGraphQL.post('/', { query: getProjectsForHomePage }),
      axiosGraphQL.post('/', { query: getPostsForHomePage }),
      axiosGraphQL.post('/', { query: getBoilerplatesForHomePage }),
    ]);
  const snippets = librariesRes?.data?.data.Libraries?.docs || [];
  const projects = projectsRes?.data?.data.Projects?.docs || [];
  const blogs = postsRes?.data?.data.Posts?.docs || [];
  const boilerplates = boilerplatesRes?.data?.data.Boilerplates?.docs || [];

  return (
    <Main>
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

export default HomePage;
