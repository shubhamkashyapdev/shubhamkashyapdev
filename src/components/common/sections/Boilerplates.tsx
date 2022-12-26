import type { FC } from 'react';
import React from 'react';

import {
  BoilerplateCard,
  PrimaryHeading,
  SeeMoreButton,
} from '@/components/common';
import type { BoilerplateCardType } from '@/types/component.types';

type BoilerplateType = {
  boilerplates: BoilerplateCardType[];
};

const Blogs: FC<BoilerplateType> = ({ boilerplates }) => {
  return (
    <section className="section">
      <PrimaryHeading>Starter Templates</PrimaryHeading>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {boilerplates?.map((item, index) => (
          <BoilerplateCard key={`blogs-${index}-${item.id}`} {...item} />
        ))}
      </div>
      <SeeMoreButton route="/blogs">See more post</SeeMoreButton>
    </section>
  );
};

export default Blogs;
