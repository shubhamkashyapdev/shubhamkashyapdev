import React from 'react';
import {
  BrandGithub,
  BrandLinkedin,
  BrandTwitter,
  BrandUpwork,
  Copyright,
} from 'tabler-icons-react';

import Parragraph from '@/components/common/typography/Parragraph';
import Navbar from '@/layouts/Navbar/Navbar';
import SocialIcons from '@/layouts/Navbar/SocialIcons';
import type { NavItemProps, SocialIconProps } from '@/types/component.types';

const navLinks: NavItemProps[] = [
  {
    label: 'Source Code',
    route: 'https://github.com/shubhamkashyapdev/shubhamkashyapdev',
  },
  {
    label: 'Library',
    route: '/library',
  },
  {
    label: 'Starter Templates',
    route: 'https://github.com/stars/shubhamkashyapdev/lists/starter-templates',
  },
  {
    label: 'Projects',
    route: '/projects',
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

const Footer = () => {
  return (
    <footer className="mt-60 mb-4">
      <hr className="h-[2px] bg-primary-700 dark:bg-gray-800" />
      <Navbar
        navLinks={navLinks}
        navClassName="justify-center mt-4"
        className="flex-wrap justify-center md:justify-start md:space-x-6"
      />
      <div className="text-center">
        <Parragraph className="text-lg font-bold text-primary-700 dark:text-gray-300">
          Reach out to me
        </Parragraph>
        <div className="mt-2 flex justify-center">
          <SocialIcons socialLinks={socialLinks} />
        </div>
        <div className="mt-6 flex flex-col items-center justify-center space-x-2 text-base text-gray-900 dark:text-gray-200 md:flex-row">
          <div className="flex items-center space-x-1">
            <Copyright size={16} /> <span>shubhamkashyapdev</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
