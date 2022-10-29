import { motion } from 'framer-motion';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import { fadeDown } from '@/components/common/animation/variants';
import type { SocialIconProps } from '@/types/component.types';

type SocialIconsProps = {
  socialLinks: SocialIconProps[];
};

const SocialIcons: FC<SocialIconsProps> = ({ socialLinks }) => {
  return (
    <div className="flex space-x-2">
      {socialLinks.map((item, index) => (
        <motion.div
          key={`soicallink-${item.route}`}
          variants={fadeDown}
          initial="initial"
          animate="animate"
          transition={{ ease: 'easeIn', duration: 0.4 + index * 0.2 }}
        >
          <Link href={'/'} target="_blank" passHref>
            <a
              target="_blank"
              rel="noopener noreferer"
              className="cursor-pointer text-gray-700 duration-150 ease-in-out hover:text-primary-300 dark:text-gray-400 hover:dark:text-primary-200"
            >
              {item.icon}
            </a>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialIcons;
