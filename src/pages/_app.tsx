import '../styles/global.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

import Loader from '@/components/common/animation/Loader';
import { Footer, Header } from '@/layouts';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) {
    return <Loader />;
  }
  return (
    <ThemeProvider attribute="class">
      {!mounted ? (
        <Loader />
      ) : (
        <div className="min-h-screen w-full bg-white  px-1 text-gray-700 antialiased dark:bg-primary-700">
          <div className="mx-auto w-[90%] max-w-[1140px] py-5">
            <Header />
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      )}
    </ThemeProvider>
  );
};

export default MyApp;
