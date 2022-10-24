import type { FC } from 'react';
import React from 'react';

import { ToggleButton } from '@/components/common';

const Header: FC = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <div className=" text-primary-700 dark:text-white ">Navbar</div>
        <ToggleButton />
      </div>
    </div>
  );
};

export default Header;
