/* eslint-disable no-useless-escape */
import { notFound } from 'next/navigation';
import React from 'react';

import Blocks from '@/components/common/elements/Blocks';
import CardMeta from '@/components/common/elements/CardMeta';
import PageTitle from '@/components/common/elements/MainTitle';
import Parragraph from '@/components/common/typography/Parragraph';
import { getSnippetDataForPage } from '@/graphql/Library';
import { Main } from '@/templates/Main';
import { axiosGraphQL } from '@/utils/axios';

type CodeSnippetPageType = {
  params: {
    slug: string;
  };
};
async function getSnippet(slug: string) {
  const res = await axiosGraphQL.post(`/`, {
    query: getSnippetDataForPage,
    variables: { slug },
  });
  const data = res?.data?.data?.Libraries?.docs[0];
  return data;
}

export async function generateMetadata() {
  return {
    title: 'Next.js Boilerplate Presentation',
    description:
      'Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.',
  };
}

const CodeSnippetPage = async ({ params }: CodeSnippetPageType) => {
  const snippet = await getSnippet(params.slug);

  if (!snippet) {
    notFound();
  }

  return (
    <Main>
      <PageTitle>{snippet.title}</PageTitle>
      <Parragraph className="mt-1">{snippet.tagline}</Parragraph>
      <CardMeta
        className="mt-2"
        views={snippet.views || 0}
        allTags={snippet.allTags}
      />
      <hr className="mb-6 mt-4 h-[1.5px] w-full border-gray-300 dark:border-gray-700" />
      {/* Blocks */}
      <Blocks blocks={snippet.blocks} />
    </Main>
  );
};

export default CodeSnippetPage;
