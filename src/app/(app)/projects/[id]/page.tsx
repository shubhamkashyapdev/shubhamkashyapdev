import Image from 'next/image';
import { notFound } from 'next/navigation';
import { BrandGithub, Eye, Link, User } from 'tabler-icons-react';

import {
  ParragraphBlock,
  PrimaryHeadingBlock,
} from '@/components/common/blocks';
import Blocks from '@/components/common/elements/Blocks';
import { getProjectDataForPage } from '@/graphql/Project';
import { Main } from '@/templates/Main';
import { axiosGraphQL } from '@/utils/axios';

async function getProject(id: string) {
  const res = await axiosGraphQL.post(`/`, {
    query: getProjectDataForPage,
    variables: { id },
  });
  const project = res?.data?.data?.Project;
  return project;
}

const ProjectPage = async ({ params }: { params: { id: string } }) => {
  const project = await getProject(params.id);

  if (!project) {
    notFound();
  }

  return (
    <Main>
      <section>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${
            project?.featuredImage?.url || '/'
          }`}
          height={700}
          width={1440}
          alt="notionlink project"
        />
      </section>
      <section>
        <PrimaryHeadingBlock variant="TITLE">
          {project?.title}
        </PrimaryHeadingBlock>
        <ParragraphBlock className="mt-1">{project?.tagline}</ParragraphBlock>
        {/* Page Meta */}
        <div className="mt-4 grid max-w-[600px] grid-cols-1 gap-2 md:grid-cols-4">
          <div className="flex gap-2 text-gray-700 dark:text-gray-300 ">
            <Eye />
            592 Views
          </div>
          {/* Project Type */}
          <div className="text-color flex gap-2">
            <User />
            {project?.projectType}
          </div>

          {project?.projectType === 'public' ? (
            <>
              {project?.repoURL && project?.repoURL.includes('github.com') ? (
                <div className="flex gap-2 text-gray-700 dark:text-gray-300">
                  <BrandGithub />

                  <a
                    href={project?.repoURL}
                    target="_blank"
                    className="dark:text-gradient border-b-2 border-dotted border-gray-700 text-gray-700 hover:border-primary-300 dark:border-gray-300"
                    rel="noreferrer"
                  >
                    Repository
                  </a>
                </div>
              ) : null}
              {project?.liveSiteURL ? (
                <div className="flex gap-2 text-gray-700 dark:text-gray-300">
                  <Link />
                  <a
                    href={project?.liveSiteURL}
                    target="_blank"
                    className="dark:text-gradient border-b-2 border-dotted border-gray-700 text-gray-700 hover:border-primary-300 dark:border-gray-300"
                    rel="noreferrer"
                  >
                    Open Live Site
                  </a>
                </div>
              ) : null}
            </>
          ) : null}
        </div>
        <hr className="my-6 h-[1.5px] border-primary-300 dark:border-gray-700" />
      </section>
      <Blocks blocks={project.blocks} />
    </Main>
  );
};

export default ProjectPage;
