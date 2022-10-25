import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import { BrandGithub } from 'tabler-icons-react';

import { Parragraph } from '@/components/common';
import type { IChildren } from '@/types/common.types';

type HightlightCardProps = {
  title: string;
  subTitle: string;
  tag: string;
  route: string;
} & IChildren;

const Highlight: FC<HightlightCardProps> = ({
  title,
  subTitle,
  children,
  tag,
  route,
}) => {
  return (
    <div className="w-full rounded-sm border-[1.5px] bg-primary-700/80 p-6 py-4 shadow-sm hover:shadow-md dark:border-gray-700 dark:shadow-gray-700">
      <h3 className="text-sm font-medium text-gray-400">{subTitle}</h3>
      <h2 className="text-shadow-sm mt-1 text-xl font-bold text-gray-200">
        {title}
      </h2>
      <Parragraph className="mt-[8px] text-[14px] font-normal text-gray-400">
        {children}
      </Parragraph>
      <Link href={route}>
        <a className="flex items-center pt-2 text-sm text-gray-300 hover:text-primary-300">
          <BrandGithub /> {tag}
        </a>
      </Link>
    </div>
  );
};

export default Highlight;
