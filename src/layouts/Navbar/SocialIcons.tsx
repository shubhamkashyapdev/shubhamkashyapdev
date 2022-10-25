import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import { BrandGithub, BrandLinkedin, BrandTwitter } from 'tabler-icons-react';

const socialLinks = [
  {
    route: 'www.twitter.com',
    icon: <BrandTwitter />,
  },
  {
    route: 'www.github.com',
    icon: <BrandGithub />,
  },
  {
    route: 'www.linkedin.com',
    icon: <BrandLinkedin />,
  },
];

const SocialIcons: FC = () => {
  return (
    <div className="flex space-x-2">
      {socialLinks.map((item) => (
        <Link
          href={'/'}
          target="_blank"
          passHref
          key={`soicallink-${item.route}`}
        >
          <a
            target="_blank"
            rel="noopener noreferer"
            className="cursor-pointer text-gray-700 duration-150 ease-in-out hover:text-primary-300 dark:text-gray-400 hover:dark:text-primary-200"
          >
            {item.icon}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
