import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type IUser = {
  name: string;
};

type IAuthStore = {
  authenticated: boolean;
  user: IUser | null;
};

export const authStore = (set: any) => ({
  authenticated: false,
  user: null,
  authenticateUser: () =>
    set((prevState: IAuthStore) => ({ ...prevState, authenticated: true })),
  logoutUser: () =>
    set((prevState: IAuthStore) => ({
      ...prevState,
      authenticated: false,
    })),
  setUserDetails: (userDetails: IUser) =>
    set((prevState: IAuthStore) => ({
      ...prevState,
      user: userDetails,
    })),
});

const useAuthStore = create(
  devtools(
    persist(authStore, {
      name: 'auth',
    })
  )
);

export default useAuthStore;
