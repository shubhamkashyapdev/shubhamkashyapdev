import type { FC } from 'react';
import React from 'react';
import { BrandLinkedin, BrandTwitter } from 'tabler-icons-react';

import { ToggleButton } from '@/components/common';
import { Navbar } from '@/layouts';
import type { SocialIconProps } from '@/types/component.types';

import SocialIcons from './Navbar/SocialIcons';

const navLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Blog',
    route: '/blogs',
  },
  {
    label: 'Projects',
    route: '/projects',
  },
  {
    label: 'Library',
    route: '/library',
  },
  {
    label: 'About',
    route: '/about',
  },
];

const socialLinks: SocialIconProps[] = [
  {
    route: 'https://www.twitter.com',
    icon: <BrandTwitter />,
  },
  {
    route: 'https://www.linkedin.com',
    icon: <BrandLinkedin />,
  },
];

const Header: FC = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <Navbar navLinks={navLinks} />

        <div className="flex items-center space-x-4">
          <SocialIcons socialLinks={socialLinks} />
          <ToggleButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
