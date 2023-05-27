import type { FC } from 'react';
import React from 'react';

import { SeeMoreButton } from '@/components/common';
import SectionTitle from '@/components/common/elements/MainTitle';
import type { CodeSnippetCardType } from '@/types/component.types';

import { CodeSnippetCards } from '../Library';

type CodeSnippetProps = {
  snippets: CodeSnippetCardType[];
};

const CodeSnippetsSection: FC<CodeSnippetProps> = ({ snippets }) => {
  return (
    <section className="section">
      <SectionTitle>Library of code snippets</SectionTitle>
      <CodeSnippetCards snippets={snippets} />
      <SeeMoreButton route="/library">See more snippets</SeeMoreButton>
    </section>
  );
};

export default CodeSnippetsSection;
