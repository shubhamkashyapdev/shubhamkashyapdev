import type { BlogCardType } from '@/types/component.types';

export const blogs: BlogCardType[] = [
  {
    createdAt: 'May 10, 2022',
    excerpt:
      'Increase your efficiency by using the preconfigured starter repositories with rich features and automations',
    image: `https://shorturl.at/ILPWX`,
    readTime: 12,
    tags: [
      { label: 'Next.js', icon: '' },
      { label: 'Tailwind', icon: '' },
    ],
    title:
      'One stop starter for maximize efficiency on Next.js and TailwindCSS',
    viewes: 4290,
  },
  {
    createdAt: 'June 1, 2022',
    excerpt:
      'Complete configuration and seutp for storybook in Next.js application',
    image: `https://shorturl.at/ILPWX`,
    readTime: 8,
    tags: [
      { label: 'Next.js', icon: '' },
      { label: 'Stroybook', icon: '' },
    ],
    title: 'How to setup Storybook with Next.js',
    viewes: 2040,
  },
];
