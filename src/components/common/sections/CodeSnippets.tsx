import type { FC } from 'react';
import React from 'react';

import { PrimaryHeading, SeeMoreButton } from '@/components/common';
import type { CodeSnippetCardType } from '@/types/component.types';

import { CodeSnippetCards } from '../Library';

type CodeSnippetProps = {
  snippets: CodeSnippetCardType[];
  isLoading: boolean;
};

const CodeSnippetsSection: FC<CodeSnippetProps> = ({ snippets, isLoading }) => {
  return (
    <section className="section">
      <PrimaryHeading>Library of code snippets</PrimaryHeading>
      <CodeSnippetCards snippets={snippets} isLoading={isLoading} />
      <SeeMoreButton route="/library">See more snippets</SeeMoreButton>
    </section>
  );
};

export default CodeSnippetsSection;
