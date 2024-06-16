import { Hero } from '@/components';
import Divider from '@/components/common/elements/Divider';
import Blogs from '@/components/common/sections/Blogs';
import Boilerplates from '@/components/common/sections/Boilerplates';
import CodeSnippets from '@/components/common/sections/CodeSnippets';
import FeaturedProjects from '@/components/common/sections/FeaturedProjects';
import ProblemSolver from '@/components/common/sections/ProblemSolver';
import TechnologyStack from '@/components/common/sections/TechnologyStack';
import TechStack from '@/components/common/sections/TechStack';
import { getDataForHomePage } from '@/graphql/Main';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { axiosGraphQL } from '@/utils/axios';

const HomePage = async () => {
  const res = await axiosGraphQL.post(`/`, {
    query: getDataForHomePage,
  });
  const snippets = res.data?.data?.Libraries?.docs;
  const projects = res.data?.data?.Projects?.docs || [];
  const blogs = res.data?.data?.Posts?.docs;
  const boilerplates = res.data?.data?.Boilerplates?.docs;

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

export default HomePage;
