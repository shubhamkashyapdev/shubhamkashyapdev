import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { BlogCardType } from '@/types/component.types';

type BlogsStateType = {
  blogs: BlogCardType[];
  filteredBlogs: BlogCardType[];
};

export const blogsStore = (set: any) => ({
  blogs: [],
  filteredBlogs: [],
  setBlogs: (blogs: BlogCardType[]) =>
    set((prevState: BlogsStateType) => ({
      ...prevState,
      blogs,
    })),
  setFilteredBlogs: (filteredBlogs: BlogCardType[]) =>
    set((prevState: BlogsStateType) => ({
      ...prevState,
      filteredBlogs,
    })),
});

const useBlogsStore = create(
  devtools(
    persist(blogsStore, {
      name: 'blogs',
    })
  )
);

export default useBlogsStore;
