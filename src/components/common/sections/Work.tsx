import Link from 'next/link';
import React from 'react';

import { Parragraph, PrimaryHeading, WorkCard } from '@/components/common';

const workCards = [
  {
    image: 'https://shorturl.at/hwy57',
    label: 'React.js',
    excerpt: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
    perspiciatis. Iorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
    perspiciatis.`,
    route: '/',
  },
  {
    image: 'https://shorturl.at/iwDTZ',
    label: 'Solidity',
    excerpt: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
    perspiciatis. Iorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
    perspiciatis.`,
    route: '/',
  },
  {
    image: 'https://shorturl.at/qwBI7',
    label: 'Node.js',
    excerpt: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
    perspiciatis. Iorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
    perspiciatis.`,
    route: '/',
  },
];

const Work = () => {
  return (
    <section className="section ">
      {/* Cards */}
      <div className="flex min-h-[450px] flex-col items-center justify-center md:flex-row">
        <div className="order-2 mt-8 flex flex-1 flex-col flex-wrap gap-10 md:order-1 md:flex-row">
          {workCards.map((item, index) => (
            <WorkCard key={`work-card-${item.image}-${index}`} {...item} />
          ))}
        </div>
        {/* work section */}
        <div className="order-1 mt-6 w-[280px] md:order-2">
          <PrimaryHeading className="centered">Work</PrimaryHeading>
          <Parragraph className="centered">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            fugit. Doloribus atque, adipisci tempore fuga dignissimos voluptatum
            cupiditate animi voluptas.
          </Parragraph>
          <div className="centered">
            <Link href="/">
              <a className=" group relative mt-4 inline-block text-sm font-semibold text-primary-700   dark:text-gray-200">
                View All Work
                <span className="absolute bottom-[-2px] left-0 h-[2.5px] w-full origin-left scale-x-50 rounded-md bg-primary-700 shadow-sm duration-150 ease-in-out hover:origin-right group-hover:scale-x-100"></span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
