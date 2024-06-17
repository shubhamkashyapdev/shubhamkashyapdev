import type { FC } from 'react';
import React, { Fragment } from 'react';

import { AppleSVG } from '@/assets/svg';
import Parragraph from '@/components/common/typography/Parragraph';
import PrimaryHeading from '@/components/common/typography/PrimaryHeading';

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
      <div className="centered flex-1">
        <div className="centered">
          <h5 className="subtitle w-full">/ &nbsp; Clients</h5>
        </div>

        <PrimaryHeading className="xl:text-5xl">Clients</PrimaryHeading>

        <Parragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime
          incidunt possimus? Vero aliquam unde consectetur ex enim culpa
          explicabo maxime. Rerum hic ex voluptas, amet cupiditate veritatis
          dolor atque.
        </Parragraph>
      </div>
      <div className="mt-8 flex flex-1 flex-wrap gap-1 gap-y-6 md:mt-2">
        {clients?.map((item, index) => (
          <Fragment key={`client-logo-${index}`}>
            <div className="flex min-w-[140px] flex-1 flex-col items-center">
              {item.logo}
              <Parragraph>{item.label}</Parragraph>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Clients;
