import React from 'react';

import {
  FeaturedProjectCard,
  Parragraph,
  PrimaryHeading,
} from '@/components/common';

const FeaturedProjects = () => {
  return (
    <section className="section">
      <PrimaryHeading className="">Featured Projects</PrimaryHeading>
      <Parragraph className="mt-1">{`Project's that i am proud of`}</Parragraph>
      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        <FeaturedProjectCard />
        <FeaturedProjectCard />
        <FeaturedProjectCard />
      </div>
    </section>
  );
};

export default FeaturedProjects;
