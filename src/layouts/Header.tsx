import type { FC } from 'react';
import React from 'react';

import { ToggleButton } from '@/components/common';
import { Navbar } from '@/layouts';

import SocialIcons from './Navbar/SocialIcons';

const Header: FC = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <Navbar />

        <div className="flex items-center space-x-4">
          <SocialIcons />
          <ToggleButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
