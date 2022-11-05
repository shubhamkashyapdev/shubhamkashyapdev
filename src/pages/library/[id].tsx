import type { NextPage } from 'next';
import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const CodeSnippetPage: NextPage = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1>Code Snippet Page</h1>
    </Main>
  );
};

export default CodeSnippetPage;
