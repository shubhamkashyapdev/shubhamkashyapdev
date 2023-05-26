import type { FC } from 'react';
import React from 'react';
import {
  BrandGithub,
  BrandLinkedin,
  BrandTwitter,
  BrandUpwork,
} from 'tabler-icons-react';

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
    route: 'https://www.linkedin.com/in/shubham-kashyap-018448203/',
    icon: <BrandLinkedin />,
  },
  {
    route: 'https://github.com/shubhamkashyapdev',
    icon: <BrandGithub />,
  },
  {
    route:
      'https://www.upwork.com/freelancers/~016892b2e096ca585d?referrer_url_path=%2Fab%2Fprofiles%2Fsearch%2Fdetails%2F~016892b2e096ca585d%2Fprofile',
    icon: <BrandUpwork />,
  },
  {
    route: 'https://twitter.com/Shubham56940033',
    icon: <BrandTwitter />,
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
