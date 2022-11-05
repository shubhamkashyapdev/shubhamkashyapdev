import React from 'react';
import useSWR from 'swr';

import PageTitle from '@/components/common/elements/PageTitle';
import { CodeSnippetCards } from '@/components/common/Library';
import { fetcher } from '@/graphql';
import { getSnippetsForLibrary } from '@/graphql/Library';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const LibraryPage = () => {
  const { data, isValidating } = useSWR(getSnippetsForLibrary, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  });
  const snippets = data?.Libraries?.docs;
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <PageTitle>Library</PageTitle>
      <CodeSnippetCards snippets={snippets} isLoading={isValidating} />
    </Main>
  );
};

export default LibraryPage;
