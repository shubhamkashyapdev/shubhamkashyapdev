import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { CodeSnippetCardType } from '@/types/component.types';

type LibraryStateType = {
  snippets: CodeSnippetCardType[];
  filteredSnippets: CodeSnippetCardType[];
};

export const libraryStore = (set: any) => ({
  snippets: [],
  filteredSnippets: [],
  setSnippets: (snippets: CodeSnippetCardType[]) =>
    set((prevState: LibraryStateType) => ({
      ...prevState,
      snippets,
    })),
  setFilteredSnippets: (filteredSnippets: CodeSnippetCardType[]) =>
    set((prevState: LibraryStateType) => ({
      ...prevState,
      filteredSnippets,
    })),
});

const useLibraryStore = create(
  devtools(
    persist(libraryStore, {
      name: 'library',
    })
  )
);

export default useLibraryStore;
