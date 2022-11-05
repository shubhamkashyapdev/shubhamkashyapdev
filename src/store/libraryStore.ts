import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const authStore = () => ({
  snippets: false,
  activeSnippetId: null,
});

const useAuthStore = create(
  devtools(
    persist(authStore, {
      name: 'auth',
    })
  )
);

export default useAuthStore;
