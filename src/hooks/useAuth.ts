import useSWR from 'swr';

const useAuth = (username: string, password: string) => {
  const { data, mutate, isValidating, ...swr } = useSWR('auth', async () => {
    // @todo - API call to authenticate the user

    return username !== null && password !== null;
  });

  return {
    ...swr,
    data,
    isValidating,
    mutate,
  };
};

export default useAuth;
