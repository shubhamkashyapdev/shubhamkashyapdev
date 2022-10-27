import type { FC } from 'react';
import React from 'react';

import { AppleSVG } from '@/assets/svg';
import { Parragraph, PrimaryHeading } from '@/components/common';
import { PrimaryHeadingSizes } from '@/types/component.types';

const clients = [
  {
    logo: <AppleSVG />,
    label: 'Apple LTD',
  },
  {
    logo: <AppleSVG />,
    label: 'Apple LTD',
  },
  {
    logo: <AppleSVG />,
    label: 'Apple LTD',
  },
  {
    logo: <AppleSVG />,
    label: 'Apple LTD',
  },
  {
    logo: <AppleSVG />,
    label: 'Apple LTD',
  },
  {
    logo: <AppleSVG />,
    label: 'Apple LTD',
  },
];

const Clients: FC = () => {
  return (
    <section className="section flex flex-col overflow-hidden md:flex-row md:space-x-10">
      <div className="flex-1 ">
        <PrimaryHeading size={PrimaryHeadingSizes.LG}>Clients</PrimaryHeading>
        <Parragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime
          incidunt possimus? Vero aliquam unde consectetur ex enim culpa
          explicabo maxime. Rerum hic ex voluptas, amet cupiditate veritatis
          dolor atque.
        </Parragraph>
      </div>
      <div className="mt-8 flex flex-1 flex-wrap gap-1 gap-y-6 md:mt-2">
        {clients.map((item, index) => (
          <>
            <div
              key={`client-${index}`}
              className="flex min-w-[130px] flex-1 flex-col items-center"
            >
              {item.logo}
              <Parragraph>{item.label}</Parragraph>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Clients;
