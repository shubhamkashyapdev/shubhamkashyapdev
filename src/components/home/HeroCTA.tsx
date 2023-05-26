import Link from 'next/link';
import React from 'react';

const HeroCTA = () => {
  return (
    <div className="mt-8 flex justify-center space-x-4 md:justify-start">
      <Link href="/projects">
        <button className=" rounded-sm border-[1.5px] border-gray-800 bg-white px-3 py-2 text-base font-bold text-primary-700 shadow-md duration-150 ease-in-out hover:scale-105 hover:shadow-lg dark:bg-primary-700 dark:text-gray-100 dark:shadow-gray-800 hover:dark:border-primary-200 md:px-4">
          View My Projects
        </button>
      </Link>
      <Link href="/about">
        <button className="rounded-sm border-[1.5px] border-gray-800 bg-white py-2 px-3 text-base font-bold text-primary-700 shadow-md duration-150 ease-in-out hover:scale-105 hover:shadow-lg dark:bg-primary-700 dark:text-gray-100 dark:shadow-gray-800 hover:dark:border-primary-200 md:px-4">
          Learn more about me
        </button>
      </Link>
    </div>
  );
};

export default HeroCTA;
