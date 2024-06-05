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
      <CardMeta
        className="mt-2"
        views={snippet?.views || 0}
        tags={snippet?.tags}
      />
      <hr className="mb-6 mt-4 h-[1.5px] w-full border-gray-300 dark:border-gray-700" />
      <Blockquote subTagline="Absolute Import is a great way to clean up your imports" />
      {/* Blocks */}
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
