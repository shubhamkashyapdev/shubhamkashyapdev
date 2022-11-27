/* eslint-disable no-useless-escape */
import type { GetServerSideProps, NextPage } from 'next';
import React from 'react';

import { Parragraph } from '@/components/common';
import {
  Blockquote,
  Blocks,
  CardMeta,
  PageTitle,
} from '@/components/common/elements';
import { getSnippetDataForPage } from '@/graphql/Library';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { axiosGraphQL } from '@/utils/axios';

type CodeSnippetPageType = {
  snippet: any;
};

const CodeSnippetPage: NextPage<CodeSnippetPageType> = ({ snippet }) => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <PageTitle>{snippet?.title}</PageTitle>
      <Parragraph className="mt-1">{snippet?.tagline}</Parragraph>
      <CardMeta className="mt-2" views={2320} tags={snippet?.tags} />
      <hr className="mb-6 mt-4 h-[1.5px] w-full border-gray-300 dark:border-gray-700" />
      <Blockquote subTagline="Absolute Import is a great way to clean up your imports" />
      {/* Blocks */}
      {/* <div className="mb-20 flex flex-col md:flex-row">
        <div className="w-[70%]">
          {snippet?.blocks?.map((item: any) => {
            if (item.blockType === 'primary-heading') {
              return (
                <PrimaryHeadingBlock
                  variant="PRIMARY"
                  key={`block-heading-${item.id}`}
                >
                  {item.text}
                </PrimaryHeadingBlock>
              );
            }
            if (item.blockType === 'secondary-heading') {
              return (
                <PrimaryHeadingBlock key={`block-heading-${item.id}`}>
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
                              className="flex space-x-4"
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
            if (item.blockType === 'code') {
              return (
                <React.Fragment key={`block-parragraph-${item.id}`}>
                  {item.code.map((childrens: any[]) => {
                    // @ts-ignore
                    return childrens.children.map(
                      (codebox: { text: string }, index: number) => (
                        <CodeBlock
                          key={`block-parragraph-item-${item.id}-${index}`}
                          code={`${codebox.text}`.trim()}
                          language={item.language}
                          showLineNumbers={item.showLineNumbers}
                        />
                      )
                    );
                  })}
                </React.Fragment>
              );
            }
            return <></>;
          })}
        </div>
        <div className="w-[30%]"></div>
        </div> */}
      <Blocks blocks={snippet.blocks} />
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const res = await axiosGraphQL.post(`/`, {
    query: getSnippetDataForPage,
    variables: {
      id,
    },
  });
  const data = res?.data?.data?.Library;
  return {
    props: {
      snippet: data,
    },
  };
};

export default CodeSnippetPage;
