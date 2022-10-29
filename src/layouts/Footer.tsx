import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import {
  BrandDribbble,
  BrandGithub,
  BrandLinkedin,
  BrandTwitter,
  Copyright,
} from 'tabler-icons-react';

import { Parragraph } from '@/components/common';
import { Navbar, SocialIcons } from '@/layouts';
import type { NavItemProps, SocialIconProps } from '@/types/component.types';

const navLinks: NavItemProps[] = [
  {
    label: 'Source Code',
    route: '/source-code',
  },
  {
    label: 'Library',
    route: '/library',
  },
  {
    label: 'Starter Templates',
    route: '/starter-templates',
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
    route: 'www.twitter.com',
    icon: <BrandTwitter />,
  },
  {
    route: 'www.linkedin.com',
    icon: <BrandLinkedin />,
  },
  {
    route: 'www.github.com',
    icon: <BrandGithub />,
  },
  {
    route: 'www.dribble.com',
    icon: <BrandDribbble />,
  },
];

const Footer: FC = () => {
  return (
    <footer className="mt-10 mb-4">
      <hr className="dark:gray-800 h-[2px] bg-primary-700" />
      <Navbar
        navLinks={navLinks}
        navClassName="justify-center mt-4"
        className="flex-wrap justify-center md:justify-start md:space-x-6"
      />
      <div className="text-center">
        <Parragraph className="text-lg font-bold text-primary-700 dark:text-gray-300">
          Reach me out
        </Parragraph>
        <div className="mt-2 flex justify-center">
          <SocialIcons socialLinks={socialLinks} />
        </div>
        <p className="mt-6 flex flex-col items-center justify-center space-x-2 text-base text-gray-900 dark:text-gray-200 md:flex-row">
          <div className="flex items-center space-x-1">
            <Copyright size={16} /> <span>shubhamwebdesign</span>
          </div>
          <Link href="/">
            <a className="font-medium">Please provide your feedback!</a>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
