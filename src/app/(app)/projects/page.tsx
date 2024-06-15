import React from 'react';

import ProjectCard from '@/components/common/cards/FeaturedProjectCard';
import PageTitle from '@/components/common/elements/MainTitle';
import Parragraph from '@/components/common/typography/Parragraph';
import { getAllProjectsForCards } from '@/graphql/Project';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { ProjectCardType } from '@/types/component.types';
import { axiosGraphQL } from '@/utils/axios';

async function getProjects() {
  const projectsRes = await axiosGraphQL.post(`/`, {
    query: getAllProjectsForCards,
  });
  const projects = projectsRes.data?.data?.Projects?.docs;
  return projects;
}

const Projects = async () => {
  const projects: ProjectCardType[] = await getProjects();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <PageTitle>Projects</PageTitle>
      <Parragraph className="mt-0 text-[1.15rem]">
        Showcase of my work on FullStack development.
      </Parragraph>
      <section className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </section>
    </Main>
  );
};

export default Projects;
