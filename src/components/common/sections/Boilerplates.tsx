import type { FC } from 'react';
import React from 'react';

import BoilerplateCard from '@/components/common/cards/BoilerplateCard';
import SectionTitle from '@/components/common/elements/MainTitle';
import type { BoilerplateCardType } from '@/types/component.types';

type BoilerplateType = {
  boilerplates: BoilerplateCardType[];
};

const Blogs: FC<BoilerplateType> = ({ boilerplates }) => {
  return (
    <section className="">
      <SectionTitle>Starter Templates</SectionTitle>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {boilerplates?.map((item, index) => (
          <BoilerplateCard key={`blogs-${index}-${item.id}`} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
