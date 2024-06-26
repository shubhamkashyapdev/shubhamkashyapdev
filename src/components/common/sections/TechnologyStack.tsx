import Image from 'next/image';
import React from 'react';

import SectionTitle from '@/components/common/elements/MainTitle';

import Parragraph from '../typography/Parragraph';

const TechnologyStack = () => {
  return (
    <div>
      <div
        style={{ boxShadow: '0px 0px 10px 4px rgba(255,255,255,0.3)' }}
        className=" border-2 bg-white  dark:border-primary-700 dark:bg-primary-700"
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
              <div className="col-span-1 flex flex-col items-center justify-center bg-gray-50 p-4">
                <Image
                  height={75}
                  width={75}
                  className="max-h-12"
                  src="https://backend.shubhamkashyap.in/media/react-javascript-js-framework-facebook-svgrepo-com.svg"
                  alt="React"
                />
                React.js
              </div>
              <div className="col-span-1 flex flex-col items-center  justify-center bg-gray-50 p-4">
                <Image
                  height={75}
                  width={75}
                  className="max-h-12"
                  src="https://backend.shubhamkashyap.in/media/next-js-svgrepo-com%20(1).svg"
                  alt="Nextjs"
                />
                Next.js
              </div>
              <div className="col-span-1 flex flex-col items-center  justify-center bg-gray-50 p-4">
                <Image
                  height={75}
                  width={75}
                  className="max-h-12"
                  src="https://backend.shubhamkashyap.in/media/angular-svgrepo-com.svg"
                  alt="Angular"
                />
                Angular
              </div>
              <div className="col-span-1 flex flex-col items-center  justify-center bg-gray-50 p-4">
                <Image
                  height={75}
                  width={75}
                  className="max-h-12"
                  src="https://backend.shubhamkashyap.in/media/node-js-svgrepo-com.svg"
                  alt="Nodejs"
                />
                Node.js
              </div>
              <div className="col-span-1 flex flex-col items-center  justify-center bg-gray-50 p-4">
                <Image
                  height={75}
                  width={75}
                  className="max-h-12"
                  src="https://backend.shubhamkashyap.in/media/mongo-svgrepo-com.svg"
                  alt="MongoDB"
                />
                MongoDB
              </div>
              <div className="col-span-1 flex flex-col items-center  justify-center bg-gray-50 p-4">
                <Image
                  height={75}
                  width={75}
                  className="max-h-12"
                  src="https://backend.shubhamkashyap.in/media/aws-svgrepo-com.svg"
                  alt="AWS"
                />
                AWS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
