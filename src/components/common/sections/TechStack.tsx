import { motion } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';

import { FadeUpDown, PrimaryHeading } from '@/components/common';
import type { TechStackItem } from '@/types/component.types';
import { TechStacks } from '@/types/component.types';
import { technologies, technologiesLabels } from '@/utils/techstack';

const variants = {
  initial: {
    opacity: 0,
    y: -8,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 8,
  },
};

const TechStack = () => {
  const [activeTech, setActiveTech] = useState<TechStacks>(TechStacks.BACKEND);
  const [filteredTechs, setFilteredTechs] = useState<TechStackItem[]>([]);

  const handleFilterItems = useCallback(
    (activeItem: TechStacks) => {
      const filteredTechItems = technologies.filter(
        (item) => item.category === activeItem
      );
      console.log({ filteredTechItems });
      setFilteredTechs(filteredTechItems);
    },
    [activeTech]
  );
  console.log({ filteredTechs });
  useEffect(() => {
    handleFilterItems(activeTech);
  }, []);
  return (
    <section className="section centered px-2">
      <FadeUpDown>
        <PrimaryHeading>Technology Stack</PrimaryHeading>
      </FadeUpDown>
      {/* tech stack nav */}
      <nav className="mt-8 flex flex-wrap items-center justify-center gap-4  text-base font-medium text-gray-900  dark:text-gray-300 md:justify-start md:gap-6 md:space-x-8 md:text-lg">
        {technologiesLabels.map((item) => (
          <a
            key={`technology-${item.label}`}
            onClick={() => {
              if (activeTech === item.category) {
                return;
              }
              handleFilterItems(item.category);
              setActiveTech(item.category);
            }}
            className="group relative cursor-pointer "
          >
            {item.label}
            <span
              className={`animated-border ${
                activeTech === item.category ? 'scale-100' : null
              }`}
            ></span>
          </a>
        ))}
      </nav>
      {/* technologies  */}

      <div className="mt-2 flex min-h-[100px] w-[90%] max-w-[700px] flex-wrap justify-center gap-4 py-8 md:justify-start">
        {filteredTechs.map((item, index) => (
          <motion.span
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              ease: 'easeInOut',
              duration: 0.2,
              delay: 0.1 + index * 0.01,
            }}
            key={`technology-item-${item.label}-${item.category}`}
            className="h-fit w-fit rounded-md bg-gray-800 px-2 py-1 text-sm text-white drop-shadow-md dark:bg-gray-800 dark:shadow-gray-300"
          >
            {item.label}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
