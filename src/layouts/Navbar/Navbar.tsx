import type { FC } from 'react';
import React from 'react';

import NavItem from './NavItem';

const navLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Blog',
    route: '/blog',
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

const Navbar: FC = () => {
  return (
    <nav className="text-primary-700 dark:text-white">
      <ul className="flex items-center space-x-3">
        {navLinks.map((item, index) => (
          <NavItem
            key={`navlink-${item.route}-${item.label}`}
            label={item.label}
            route={item.route}
            index={index}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
