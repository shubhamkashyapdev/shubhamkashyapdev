'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React from 'react';
import {
  BrandGithub,
  BrandLinkedin,
  BrandTwitter,
  BrandUpwork,
} from 'tabler-icons-react';

import { fadeDown } from '@/components/common/animation/variants';
import type { SocialIconProps } from '@/types/component.types';

type SocialIconsProps = {
  socialLinks: SocialIconProps[];
};

const SocialIcons = ({ socialLinks }: SocialIconsProps) => {
  const { theme } = useTheme();

  // Function to determine icon color based on theme
  const getIconColor = () => (theme === 'dark' ? 'white' : 'black');

  // Function to render the appropriate icon component based on icon type
  const renderIcon = (iconType: React.ReactNode) => {
    switch (iconType) {
      case 'linkedin':
        return <BrandLinkedin color={getIconColor()} />;
      case 'github':
        return <BrandGithub color={getIconColor()} />;
      case 'upwork':
        return <BrandUpwork color={getIconColor()} />;
      case 'twitter':
        return <BrandTwitter color={getIconColor()} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex space-x-2">
      {socialLinks.map((item, index) => (
        <motion.div
          key={`sociallink-${item.route}`}
          variants={fadeDown}
          initial="initial"
          animate="animate"
          transition={{ ease: 'easeIn', duration: 0.4 + index * 0.2 }}
        >
          <a
            href={item.route}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-gray-700 duration-150 ease-in-out hover:text-primary-300 dark:text-gray-400 hover:dark:text-primary-200"
          >
            {renderIcon(item.icon)}
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialIcons;
