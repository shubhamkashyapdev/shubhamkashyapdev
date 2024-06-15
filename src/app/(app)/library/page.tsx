import React from 'react';

import LibraryPage from '@/components/views/LibraryPage';
import { getSnippetsForLibrary } from '@/graphql/Library';
import { axiosGraphQL } from '@/utils/axios';

async function getSnippets() {
  const res = await axiosGraphQL.post(`/`, {
    query: getSnippetsForLibrary,
  });
  const data = res.data?.data?.Libraries?.docs;
  return data;
}

const Page = async () => {
  const docs = await getSnippets();

  return <LibraryPage docs={docs} />;
};

export default Page;
