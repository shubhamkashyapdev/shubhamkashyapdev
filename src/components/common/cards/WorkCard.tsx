import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

type WorkCardProps = {
  label: string;
  route: string;
  image: string;
  excerpt: string;
};

const WorkCard: FC<WorkCardProps> = ({ label, route, image, excerpt }) => {
  return (
    <div className="group card-border flex h-[300px] w-[220px] flex-col rounded-lg p-3 drop-shadow-lg duration-300 ease-in-out hover:h-[340px] hover:scale-105 dark:bg-gray-800 dark:shadow-gray-300">
      {/* top section */}
      <div>
        <Image
          src={image}
          height={150}
          width={200}
          alt="blog"
          objectFit="cover"
          className="rounded-lg shadow-md duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      {/* bottom section */}
      <div className="py-2">
        <h6 className="text-[0.7rem] font-semibold uppercase text-gray-600 dark:text-gray-300 ">
          {label}
        </h6>
        <h4 className="mt-[8px] text-[1.05rem] leading-[1.2em] text-gray-800 dark:text-gray-300">
          {`${excerpt}`?.substring(0, 90)}
        </h4>
        <Link href={route}>
          <a className="bottom-2 mt-4 inline-block w-fit rounded-md bg-gray-800 py-1 px-2 text-left text-sm text-gray-300 opacity-0 shadow-sm duration-150 ease-in-out hover:scale-95 group-hover:bottom-0 group-hover:opacity-100 group-hover:delay-100 dark:shadow-sm dark:shadow-gray-800 dark:hover:shadow-md">
            Read More
          </a>
        </Link>
      </div>
    </div>
  );
};

export default WorkCard;
