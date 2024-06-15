import React from 'react';

import SectionTitle from '@/components/common/elements/MainTitle';
import CodeSnippetCards from '@/components/common/Library/CodeSnippetCards';
import SeeMoreButton from '@/components/common/typography/buttons/SeeMore';
import type { CodeSnippetCardType } from '@/types/component.types';

type CodeSnippetProps = {
  snippets: CodeSnippetCardType[];
};

const CodeSnippetsSection = ({ snippets }: CodeSnippetProps) => {
  return (
    <section className="">
      <SectionTitle>Library of code snippets</SectionTitle>
      <CodeSnippetCards snippets={snippets} />
      <SeeMoreButton route="/library">See more snippets</SeeMoreButton>
    </section>
  );
};

export default CodeSnippetsSection;
