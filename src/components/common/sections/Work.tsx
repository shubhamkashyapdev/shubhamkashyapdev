import React from 'react';

import { PrimaryHeading, WorkCard } from '@/components/common';

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
    <section className="section">
      <PrimaryHeading>Work</PrimaryHeading>
      {/* Cards */}
      <div className="mt-8 flex flex-col flex-wrap md:flex-row md:space-x-10">
        {workCards.map((item, index) => (
          <WorkCard key={`work-card-${item.image}-${index}`} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Work;
