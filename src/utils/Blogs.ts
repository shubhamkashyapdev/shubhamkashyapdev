import type { BlogCardType } from '@/types/component.types';

export const blogs: BlogCardType[] = [
  {
    id: '1',
    publishedDate: '',
    createdAt: 'May 10, 2022',
    excerpt:
      'Increase your efficiency by using the preconfigured starter repositories with rich features and automations',
    featuredImage: {
      id: '1',
      url: `https://res.cloudinary.com/hexdev/image/upload/v1667844619/shubhamwebdesign/m04zrhz6cotn4mvrupdz.jpg`,
    },
    readTime: 12,
    tags: [
      {
        title: 'Next.js',
        icon: {
          id: '1',
          url: '',
        },
        id: '1',
      },
      {
        title: 'Tailwind',
        icon: {
          id: '1',
          url: '',
        },
        id: '2',
      },
    ],
    title:
      'One stop starter for maximize efficiency on Next.js and TailwindCSS',
    viewes: 4290,
  },
  {
    id: '2',
    publishedDate: '',
    createdAt: 'June 1, 2022',
    excerpt:
      'Complete configuration and seutp for storybook in Next.js application',
    featuredImage: {
      id: '2',
      url: `https://res.cloudinary.com/hexdev/image/upload/v1667844619/shubhamwebdesign/fcivpzom3stnmouigmpu.jpg`,
    },
    readTime: 8,
    tags: [
      {
        title: 'Next.js',
        icon: {
          id: '1',
          url: '',
        },
        id: '1',
      },
      {
        title: 'Stroybook',
        icon: {
          id: '1',
          url: '',
        },
        id: '2',
      },
    ],
    title: 'How to setup Storybook with Next.js',
    viewes: 2040,
  },
];
