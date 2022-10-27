import type { FC } from 'react';
import React, { Fragment } from 'react';

import { AppleSVG } from '@/assets/svg';
import { FadeUpDown, Parragraph, PrimaryHeading } from '@/components/common';

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
        <FadeUpDown>
          <h5 className="subtitle">/ &nbsp; Clients</h5>
        </FadeUpDown>
        <FadeUpDown>
          <PrimaryHeading className="xl:text-5xl">Clients</PrimaryHeading>
        </FadeUpDown>
        <FadeUpDown>
          <Parragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime
            incidunt possimus? Vero aliquam unde consectetur ex enim culpa
            explicabo maxime. Rerum hic ex voluptas, amet cupiditate veritatis
            dolor atque.
          </Parragraph>
        </FadeUpDown>
      </div>
      <div className="mt-8 flex flex-1 flex-wrap gap-1 gap-y-6 md:mt-2">
        {clients.map((item, index) => (
          <Fragment key={`client-logo-${index}`}>
            <FadeUpDown
              className="flex min-w-[130px] flex-1 flex-col items-center"
              delay={0.2 + index * 0.2}
            >
              {item.logo}
              <Parragraph>{item.label}</Parragraph>
            </FadeUpDown>
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Clients;
