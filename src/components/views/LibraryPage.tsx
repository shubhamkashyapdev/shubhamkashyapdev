'use client';

import React, { useEffect, useState } from 'react';

import PageTitle from '@/components/common/elements/MainTitle';
import SearchBar from '@/components/common/elements/SearchBar';
import Topic from '@/components/common/elements/Topic';
import CodeSnippetCards from '@/components/common/Library/CodeSnippetCards';
import Parragraph from '@/components/common/typography/Parragraph';
import useLibraryStore from '@/store/libraryStore';
import { Main } from '@/templates/Main';
import type { CodeSnippetCardType, TagType } from '@/types/component.types';

const LibraryPage = ({ docs }: { docs: CodeSnippetCardType[] }) => {
  const { setSnippets, setFilteredSnippets, snippets, filteredSnippets } =
    useLibraryStore((state) => state);
  const [value, setValue] = useState<string>('');

  const getFilteredSnippets = () => {
    if (value === '') {
      return snippets;
    }
    const filteredCodeSnippets = snippets!.filter(
      (item: CodeSnippetCardType) =>
        item.tagline.toLowerCase().includes(value.toLowerCase()) ||
        item.title.toLowerCase().includes(value.toLowerCase())
    );
    return filteredCodeSnippets;
  };

  const handleClick = (topic: string) => {
    if (topic === '') {
      setFilteredSnippets(snippets);
    } else {
      const filtered = snippets.filter((item: CodeSnippetCardType) => {
        const { allTags } = item;
        return allTags.some((tag: TagType) => tag.title === topic);
      });
      setFilteredSnippets(filtered);
    }
  };

  useEffect(() => {
    setFilteredSnippets(getFilteredSnippets());
  }, [value]);

  useEffect(() => {
    setSnippets(docs);
  }, [docs]);

  return (
    <Main>
      <PageTitle>Library</PageTitle>
      <Parragraph className="mt-1">
        Some collection of code snippets that I put for easy access, feel free
        to reuse!
      </Parragraph>
      <SearchBar value={value} setValue={setValue} />
      <Topic handleClick={handleClick} topics={['', 'Next.js', 'React.js']} />
      {filteredSnippets.length > 0 ? (
        <CodeSnippetCards snippets={filteredSnippets} />
      ) : (
        <p className="text-gray-600 dark:text-gray-300 flex justify-center w-full">
          No match found!
        </p>
      )}
    </Main>
  );
};

export default LibraryPage;
