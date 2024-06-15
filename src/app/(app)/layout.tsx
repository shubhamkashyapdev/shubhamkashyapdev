import '../global.css';

import { Inter } from 'next/font/google';

import Providers from '@/components/Providers';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="keywords"
        content="freelancer in chandigarh, website developer in chandigarh, website designer in chandigarh, freelance developer in chandigarh"
      />
      <meta name="author" content="Shubham Kashyap" />
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen w-full bg-white  px-1 text-gray-700 antialiased dark:bg-primary-700">
            <div className="mx-auto w-[90%] max-w-[1140px] py-5">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
