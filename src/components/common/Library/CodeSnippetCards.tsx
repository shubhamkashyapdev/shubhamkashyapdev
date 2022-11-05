import type { FC } from 'react';
import React from 'react';

import { Loading } from '@/components/common/elements';
import type { CodeSnippetCardType } from '@/types/component.types';

import CodeSnippetCard from '../cards/CodeSnippetCard';

type CodeSnippetCardsType = {
  snippets: CodeSnippetCardType[];
  isLoading: boolean;
};

const CodeSnippetCards: FC<CodeSnippetCardsType> = ({
  snippets,
  isLoading,
}) => {
  if (isLoading) {
    return <Loading />;
  }
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
