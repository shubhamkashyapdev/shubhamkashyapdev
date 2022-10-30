import type { FC } from 'react';
import React from 'react';

import type { NavItemProps } from '@/types/component.types';

import NavItem from './NavItem';

type NavbarProps = {
  navLinks: NavItemProps[];
  className?: string;
  navClassName?: string;
};

const Navbar: FC<NavbarProps> = ({ navLinks, className, navClassName }) => {
  return (
    <nav className={`flex justify-center text-primary-700 ${navClassName}`}>
      <ul className={`flex items-center space-x-3 ${className}`}>
        {navLinks.map((item, index) => (
          <NavItem
            key={`navlink-${item.route}-${item.label}-${index}`}
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
