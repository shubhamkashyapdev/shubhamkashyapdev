import React from 'react';

import {
  CodeSnippetCard,
  PrimaryHeading,
  SeeMoreButton,
} from '@/components/common';
import { codeSnippets } from '@/utils/data';

const CodeSnippets = () => {
  return (
    <section className="section">
      <PrimaryHeading>Library of code snippets</PrimaryHeading>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {codeSnippets.map((item, index) => (
          <CodeSnippetCard
            key={`code-snippet-${item.title}-${index}`}
            {...item}
          />
        ))}
      </div>
      <SeeMoreButton route="/library">See more snippets</SeeMoreButton>
    </section>
  );
};

export default CodeSnippets;
