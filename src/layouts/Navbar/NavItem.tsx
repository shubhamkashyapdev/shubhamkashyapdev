import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React from 'react';

type NavItemProps = {
  label: string;
  route: string;
};

const NavItem: FC<NavItemProps> = ({ label, route }) => {
  const router = useRouter();
  const activeRoute = router.pathname;
  return (
    <Link href={route} key={`${label}-${route}`}>
      <li className="group relative cursor-pointer">
        <a
          className={`${
            route === activeRoute ? 'bg-primary-300/75' : ''
          } text-base  font-medium antialiased drop-shadow-sm ease-in-out hover:bg-primary-300/75 dark:bg-transparent hover:dark:text-primary-300 focus:dark:text-primary-300`}
        >
          {label}
        </a>
        <span className="absolute left-0 -bottom-0 h-[2px] w-full origin-left scale-0 rounded-sm bg-primary-300 shadow-sm duration-150 ease-in-out group-hover:scale-100 dark:bg-primary-200"></span>
      </li>
    </Link>
  );
};

export default NavItem;
