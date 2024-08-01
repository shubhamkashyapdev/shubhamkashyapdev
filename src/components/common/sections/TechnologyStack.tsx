import Image from 'next/image';
import React from 'react';

import SectionTitle from '@/components/common/elements/MainTitle';

import Parragraph from '../typography/Parragraph';

const TechnologyStack = () => {
  return (
    <div>
      <div
        style={{ boxShadow: '0px 0px 10px 4px rgba(255,255,255,0.3)' }}
        className=" border-2 bg-white  dark:border-primary-800 dark:bg-primary-700"
      >
        <div className="mx-auto max-w-7xl py-8 px-6 lg:py-12 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div>
              <SectionTitle size="medium">{`My Tech Stack`}</SectionTitle>
              <Parragraph>
                Crafting Robust and Scalable Web & Mobile Apps: With a focus on
                modern technologies, I build applications that scale seamlessly.
                The right technology stack is key to ensuring a smooth
                development journey and robust project architecture.
              </Parragraph>
              <div className="mt-8 sm:flex">
                <div className="rounded-md shadow">
                  <a
                    href="mailto:shubhamkashyapdev@gmail.com"
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
              <div className="col-span-1 flex flex-col items-center justify-center  bg-gray-50 dark:bg-primary-800 p-4">
                <Image
                  height={75}
                  width={75}
                  className="max-h-12 dark:hidden"
                  src="https://backend.shubhamkashyap.in/media/next-js-svgrepo-com%20(1).svg"
                  alt="Next.js"
                />
                <Image
                  height={75}
                  width={75}
                  className="max-h-12 hidden dark:block"
                  src="https://backend.shubhamkashyap.in/media/next-js-white-icon.svg"
                  alt="Next.js"
                />
                <span className="mt-4 text-black dark:text-white text-xs">
                  Next.js
                </span>
              </div>

              <div className="col-span-1 flex flex-col items-center  justify-center  bg-gray-50 dark:bg-primary-800 p-4">
                <Image
                  height={75}
                  width={75}
                  className="max-h-12"
                  src="https://backend.shubhamkashyap.in/media/shadcn-ui.svg"
                  alt="Shadcn"
                />
                <span className="mt-4 text-black dark:text-white text-xs">
                  ShadCN
                </span>
              </div>
              <div className="col-span-1 flex flex-col items-center justify-center   bg-gray-50 dark:bg-primary-800 p-4">
                <Image
                  height={75}
                  width={75}
                  className="max-h-12 object-contain"
                  src="https://backend.shubhamkashyap.in/media/react-query-logo.svg"
                  alt="Tanstack Query"
                />
                <span className="mt-4  text-black dark:text-white text-xs">
                  Tanstack Query
                </span>
              </div>
              <div className="col-span-1 flex flex-col items-center  justify-center  bg-gray-50 dark:bg-primary-800 p-4">
                <Image
                  height={75}
                  width={75}
                  className="max-h-12"
                  src="https://backend.shubhamkashyap.in/media/light-prisma-svgrepo-com.svg"
                  alt="Prisma"
                />
                <span className="mt-4 text-black dark:text-white text-xs">
                  Prisma
                </span>
              </div>
              <div className="col-span-1 flex flex-col items-center justify-center   bg-gray-50 dark:bg-primary-800 p-4">
                <Image
                  height={75}
                  width={75}
                  className="max-h-12"
                  src="https://backend.shubhamkashyap.in/media/Stripe.svg"
                  alt="Stripe"
                />
                <span className="mt-4 text-black dark:text-white text-xs">
                  Stripe
                </span>
              </div>
              <div className="col-span-1 flex flex-col items-center justify-center  bg-gray-50 dark:bg-primary-800 p-4">
                <Image
                  height={75}
                  width={75}
                  className="max-h-12 dark:hidden"
                  src="https://backend.shubhamkashyap.in/media/vercel-logo.svg"
                  alt="Vercel"
                />
                <Image
                  height={75}
                  width={75}
                  className="max-h-12 hidden dark:block"
                  src="https://backend.shubhamkashyap.in/media/vercel-white-logo.svg"
                  alt="Vercel"
                />
                <span className="mt-4 text-black dark:text-white text-xs">
                  Vercel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
