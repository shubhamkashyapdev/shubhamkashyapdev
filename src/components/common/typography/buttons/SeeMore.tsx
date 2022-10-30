import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import type { IChildren } from '@/types/common.types';

type SeeMoreButtonProps = {
  route: string;
} & IChildren;

const SeeMoreButton: FC<SeeMoreButtonProps> = ({ route = '/', children }) => {
  return (
    <Link href={route}>
      <a className="animate-shadow mt-8 inline-flex scale-100 rounded border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-800 shadow-sm transition duration-100 hover:scale-[1.03] focus:outline-none focus-visible:ring focus-visible:ring-primary-300 active:scale-[0.97] disabled:bg-gray-200 motion-safe:transform-gpu motion-reduce:hover:scale-100 motion-reduce:hover:brightness-90 dark:border-gray-600 dark:bg-primary-700 dark:text-gray-100 dark:disabled:bg-gray-700">
        {children}
      </a>
    </Link>
  );
};

export default SeeMoreButton;
