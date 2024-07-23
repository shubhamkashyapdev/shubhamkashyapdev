'use client';

/* eslint-disable no-nested-ternary */
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type NavItemProps = {
  label: string;
  route: string;
  index: number;
};

const NavItem = ({ label, route, index }: NavItemProps) => {
  const activeRoute = usePathname();
  return (
    <motion.div
      className=" opacity-0"
      initial={{ y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.4 + index * 0.1 }}
    >
      {route.startsWith('/') ? (
        <Link href={route} key={`nav-item-${label}-${route}-${index}`}>
          <div className="group relative cursor-pointer">
            <div
              className={`${
                route === '/'
                  ? ''
                  : activeRoute.includes(route)
                  ? 'text-primary-300/75 dark:text-primary-300'
                  : ''
              } text-base font-medium text-gray-900 antialiased drop-shadow-sm ease-in-out hover:text-primary-300/75 dark:bg-transparent dark:text-gray-200 hover:dark:text-primary-300 focus:dark:text-primary-300`}
            >
              {label}
            </div>
            <span className="animated-border"></span>
          </div>
        </Link>
      ) : (
        <a
          href={route}
          target="_blank"
          className={`font-medium text-gray-900 antialiased drop-shadow-sm ease-in-out hover:text-primary-300/75 dark:bg-transparent dark:text-gray-200 hover:dark:text-primary-300 focus:dark:text-primary-300`}
          rel="noreferrer"
        >
          {label}
        </a>
      )}
    </motion.div>
  );
};

export default NavItem;
