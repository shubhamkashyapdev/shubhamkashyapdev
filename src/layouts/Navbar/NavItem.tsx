import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React from 'react';

type NavItemProps = {
  label: string;
  route: string;
  index: number;
};

const NavItem: FC<NavItemProps> = ({ label, route, index }) => {
  const router = useRouter();
  const activeRoute = router.pathname;
  return (
    <motion.div
      className=" opacity-0"
      initial={{ y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.4 + index * 0.1 }}
    >
      <Link href={route} key={`nav-item-${label}-${route}-${index}`}>
        <li className="group relative cursor-pointer">
          <a
            className={`${
              route === activeRoute
                ? 'bg-primary-300/75 dark:text-primary-300'
                : ''
            } text-base font-medium antialiased drop-shadow-sm ease-in-out hover:bg-primary-300/75 dark:bg-transparent dark:text-gray-200 hover:dark:text-primary-300 focus:dark:text-primary-300`}
          >
            {label}
          </a>
          <span className="animated-border"></span>
        </li>
      </Link>
    </motion.div>
  );
};

export default NavItem;
