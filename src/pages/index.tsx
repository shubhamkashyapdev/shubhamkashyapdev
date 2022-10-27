import { useEffect } from 'react';

import { Hero } from '@/components';
import { Clients, ProblemSolver } from '@/components/common';
import { Header } from '@/layouts';
import { Meta } from '@/layouts/Meta';
import useAuthStore from '@/store/authStore';
import { Main } from '@/templates/Main';

const Index = () => {
  const authStore = useAuthStore((state) => state);

  useEffect(() => {
    authStore.setUserDetails({ name: 'Sanjeet Mishra' });
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
      <Header />
      <Hero />
      <ProblemSolver />
      <Clients />
    </Main>
  );
};

export default Index;
