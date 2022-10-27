import '../styles/global.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { Background } from '@/components';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <Background />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
