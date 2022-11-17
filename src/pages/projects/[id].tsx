import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import NextLink from 'next/link';
import type { FC } from 'react';
import React from 'react';
import { ArrowRight, BrandGithub, Eye, Link, User } from 'tabler-icons-react';

import {
  FeaturesListBlock,
  ImageBlock,
  ImageGridBlock,
  ParragraphBlock,
  PrimaryHeadingBlock,
} from '@/components/common/blocks';
import BlockquoteBlock from '@/components/common/blocks/BlockquoteBlock';
import { getProjectDataForPage } from '@/graphql/Project';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { axiosGraphQL } from '@/utils/axios';

type ProjectType = {
  project: any;
};

const Project: FC<ProjectType> = ({ project }) => {
  console.warn({ project });
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <section>
        <Image
          src={project?.featuredImage.url}
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
        <div className="mt-4 grid max-w-[500px] grid-cols-1 gap-2 md:grid-cols-3">
          <div className="flex gap-2 text-gray-700 dark:text-gray-300 ">
            <Eye />
            592 Views
          </div>
          <div className="flex gap-2 text-gray-700 dark:text-gray-300">
            <BrandGithub />
            <NextLink href="/">
              <a className="dark:text-gradient border-b-2 border-dotted border-gray-700 text-gray-700 hover:border-primary-300 dark:border-gray-300">
                Repository
              </a>
            </NextLink>
          </div>
          <div className="flex gap-2 text-gray-700 dark:text-gray-300">
            <Link />
            <NextLink href="/">
              <a className="dark:text-gradient border-b-2 border-dotted border-gray-700 text-gray-700 hover:border-primary-300 dark:border-gray-300">
                Open Live Site
              </a>
            </NextLink>
          </div>
        </div>
        {/* Project Type */}
        <div className="text-color mt-4 flex gap-2">
          <User />
          {project?.projectType}
        </div>
        <hr className="my-6 h-[1.5px] border-primary-300 dark:border-gray-700" />
      </section>
      <section className="mb-20 flex flex-col md:flex-row">
        <div className="w-full md:w-[70%]">
          {project?.blocks.map((item: any) => {
            if (item.blockType === 'blockquote') {
              return <BlockquoteBlock key={item.id} subTagline={item.title} />;
            }
            if (item.blockType === 'imageblock') {
              return <ImageBlock key={item.id} image={item.image} />;
            }
            if (item.blockType === 'featureslist') {
              return (
                <FeaturesListBlock key={item.id} features={item.features} />
              );
            }
            if (item.blockType === 'secondary-heading') {
              return (
                <PrimaryHeadingBlock
                  className="mb-1 mt-12"
                  key={`block-heading-${item.id}`}
                >
                  {item.secondaryHeading}
                </PrimaryHeadingBlock>
              );
            }
            if (item.blockType === 'parragraph') {
              return (
                <React.Fragment key={`block-parragraph-${item.id}`}>
                  {item.parragraph.map((childrens: any[]) => {
                    // @ts-ignore
                    return childrens.children.map(
                      (parra: any, index: number) => (
                        <div
                          key={`block-parragraph-${index}-${item.id}`}
                          className="flex space-x-4"
                        >
                          {parra?.text ? (
                            <ParragraphBlock
                              key={`block-parragraph-item-${item.id}-${index}`}
                              className="mt-1 flex space-x-4"
                            >
                              {parra.text}
                            </ParragraphBlock>
                          ) : null}
                          <span>
                            {parra?.type &&
                            parra?.type === 'link' &&
                            parra?.children[0]?.text ? (
                              <div className="flex space-x-4">
                                <ArrowRight className="text-color" />
                                <Link
                                  href={parra?.url}
                                  target={parra.newTab ? '_blank' : '_self'}
                                >
                                  <a className="text-color border-b-2 border-transparent hover:border-b-2 hover:border-primary-300">
                                    {parra?.children[0]?.text}
                                  </a>
                                </Link>
                              </div>
                            ) : null}
                          </span>
                        </div>
                      )
                    );
                  })}
                </React.Fragment>
              );
            }
            if (item.blockType === 'imageGridBlock') {
              return (
                <ImageGridBlock key={item.id} imageGrid={item.imageGrid} />
              );
            }
            return null;
          })}
        </div>
        <div className="w-full md:w-[30%]"></div>
      </section>
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const res = await axiosGraphQL.post(`/`, {
    query: getProjectDataForPage,
    variables: {
      id,
    },
  });
  const data = res?.data?.data?.Project;
  return {
    props: {
      project: data,
    },
  };
};

export default Project;
