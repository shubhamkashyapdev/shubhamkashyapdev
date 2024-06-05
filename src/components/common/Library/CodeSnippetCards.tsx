import React from 'react';

import type { CodeSnippetCardType } from '@/types/component.types';

import CodeSnippetCard from '../cards/CodeSnippetCard';

type CodeSnippetCardsType = {
  snippets: CodeSnippetCardType[];
};

const CodeSnippetCards = ({ snippets }: CodeSnippetCardsType) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {snippets.map((item: CodeSnippetCardType, index: number) => (
        <CodeSnippetCard
          key={`code-snippet-${item.title}-${index}`}
          {...item}
        />
      ))}
    </div>
  );
};

export default CodeSnippetCards;
