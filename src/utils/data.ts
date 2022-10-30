import type { CodeSnippetCardProps } from '@/types/component.types';

export const tags = [
  {
    label: 'Notion API',
    icon: 'https://res.cloudinary.com/hexdev/image/upload/v1667114429/vmn6yvtjyyk5rsxoacmn.svg',
  },
  {
    label: 'Node.js',
    icon: 'https://res.cloudinary.com/hexdev/image/upload/v1667114390/lhcvo0mhuhuxdl7zxfih.svg',
  },
  {
    label: 'Next.js',
    icon: 'https://res.cloudinary.com/hexdev/image/upload/v1667114437/lnc28fpalel9zzcg8gph.svg',
  },
  {
    label: 'Tailwind',
    icon: 'https://res.cloudinary.com/hexdev/image/upload/v1667114434/f7q0lurtscdasirsi4wi.svg',
  },
];

export const codeSnippets: CodeSnippetCardProps[] = [
  {
    excerpt: `Setting up absolute imports with jsconfig.json`,
    likes: 2438,
    tags,
    title: `Absolute imports`,
  },
  {
    excerpt: `Current faviorite library for toast notifications, with some custom hooks and implementation`,
    likes: 2438,
    tags,
    title: `React Hot Toast`,
  },
];
