import '../styles/global.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
