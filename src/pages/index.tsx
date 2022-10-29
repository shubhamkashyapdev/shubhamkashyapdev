import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { Hero, Loader } from '@/components';
import { Clients, ProblemSolver, TechStack, Work } from '@/components/common';
import { Footer, Header } from '@/layouts';
import { Meta } from '@/layouts/Meta';
import useAuthStore from '@/store/authStore';
import { Main } from '@/templates/Main';

const Index: NextPage = () => {
  const authStore = useAuthStore((state) => state);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    authStore.setUserDetails({ name: 'Sanjeet Mishra' });
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) {
    return <Loader />;
  }
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
      <TechStack />
      <Work />
      <Footer />
    </Main>
  );
};

export default Index;
