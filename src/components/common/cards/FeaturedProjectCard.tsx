import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React from 'react';

import type { ProjectCardType } from '@/types/component.types';

import Parragraph from '../typography/Parragraph';

type ProjectCardComponentType = {
  project: ProjectCardType;
};

const ProjectCard: FC<ProjectCardComponentType> = ({ project }) => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="project-card animate-shadow card-border scale-100 cursor-pointer rounded-md transition duration-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 md:w-full"
    >
      <div className="flex h-full flex-col items-start rounded-md p-4 focus:outline-none focus-visible:ring focus-visible:ring-primary-300">
        <h3 className="font-semibold text-primary-700 dark:text-gray-300">
          {project.title}
        </h3>
        <Parragraph className="mt-1 text-[0.85rem]">
          {project.tagline}
        </Parragraph>
        {/* tags - icons */}
        <div className="mt-2 flex gap-2">
          {project.tags.map((item) => (
            <Image
              className="dark:rounded-sm dark:bg-white"
              key={item?.icon ? item.icon.id : ''}
              src={item?.icon ? item.icon.url : ''}
              height={20}
              width={20}
              objectFit="cover"
              alt={`${item.title} SVG Icon`}
            />
          ))}
        </div>
        <div className="mt-4 h-[150px] w-full">
          <Image
            className="rounded-md"
            src={project?.featuredImage.url}
            height={170}
            width={350}
            objectFit="cover"
            alt="project image"
          />
        </div>
        <Link href={`/projects/${project.id}`}>
          <a className="group relative mt-6 text-base font-semibold text-gray-700 hover:text-primary-700 dark:text-gray-300 hover:dark:text-white">
            View Project
            <span className="animated-border"></span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
