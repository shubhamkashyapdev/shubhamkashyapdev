import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

import { Parragraph } from '@/components/common';
import { SearchBar, Topic } from '@/components/common/elements';
import PageTitle from '@/components/common/elements/MainTitle';
import { CodeSnippetCards } from '@/components/common/Library';
import { getSnippetsForLibrary } from '@/graphql/Library';
import { Meta } from '@/layouts/Meta';
import useLibraryStore from '@/store/libraryStore';
import { Main } from '@/templates/Main';
import type { CodeSnippetCardType, TagType } from '@/types/component.types';
import { axiosGraphQL } from '@/utils/axios';

type LibraryType = {
  docs: CodeSnippetCardType[];
};

const LibraryPage: NextPage<LibraryType> = ({ docs }) => {
  const { setSnippets, setFilteredSnippets, snippets, filteredSnippets } =
    useLibraryStore((state) => state);
  const [value, setValue] = useState<string>('');
  const getFilteredSnippets = () => {
    if (value === '') {
      return snippets;
    }
    const filteredCodeSnippets = snippets!.filter(
      (item: CodeSnippetCardType) =>
        item.tagline.includes(value) || item.title.includes(value)
    );
    return filteredCodeSnippets;
  };

  const handleClick = (topic: string) => {
    if (topic === '') {
      setFilteredSnippets(snippets);
    }
    setFilteredSnippets(
      snippets.filter((item: CodeSnippetCardType) => {
        const { tags } = item;
        const topicExists = tags.find((tag: TagType) => tag.title === topic);
        if (topicExists) {
          return item;
        }
        return null;
      })
    );
  };

  useEffect(() => {
    setFilteredSnippets(getFilteredSnippets());
  }, [value]);

  useEffect(() => {
    setSnippets(docs);
  }, []);
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
      <Parragraph className="mt-1">
        Some collection of code snippets that I put for easy access, feel free
        to reuse!
      </Parragraph>
      <SearchBar value={value} setValue={setValue} />
      <Topic handleClick={handleClick} topics={['', 'Next.js', 'React.js']} />
      <CodeSnippetCards snippets={filteredSnippets} />
    </Main>
  );
};

export const getServerSideProps = async () => {
  const res = await axiosGraphQL.post(`/`, {
    query: getSnippetsForLibrary,
  });
  const data = res.data?.data?.Libraries?.docs;
  return {
    props: {
      docs: data,
    },
  };
};

export default LibraryPage;
