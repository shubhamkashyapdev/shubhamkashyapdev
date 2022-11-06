import type { CodeSnippetCardType, TagType } from '@/types/component.types';

export const tags: TagType[] = [
  {
    id: '1',
    title: 'Notion API',
    icon: 'https://res.cloudinary.com/hexdev/image/upload/v1667114429/vmn6yvtjyyk5rsxoacmn.svg',
  },
  {
    id: '2',
    title: 'Node.js',
    icon: 'https://res.cloudinary.com/hexdev/image/upload/v1667114390/lhcvo0mhuhuxdl7zxfih.svg',
  },
  {
    id: '3',
    title: 'Next.js',
    icon: 'https://res.cloudinary.com/hexdev/image/upload/v1667114437/lnc28fpalel9zzcg8gph.svg',
  },
  {
    id: '4',
    title: 'Tailwind',
    icon: 'https://res.cloudinary.com/hexdev/image/upload/v1667114434/f7q0lurtscdasirsi4wi.svg',
  },
];

export const codeSnippets: CodeSnippetCardType[] = [
  {
    id: '1',
    tagline: `Setting up absolute imports with jsconfig.json`,
    views: 2438,
    tags,
    title: `Absolute imports`,
  },
  {
    id: '2',
    tagline: `Current faviorite library for toast notifications, with some custom hooks and implementation`,
    views: 2438,
    tags,
    title: `React Hot Toast`,
  },
];

export const snippet = {
  id: '63629ea40dd9524341ec8eff',
  title: 'Absolute Imports',
  views: 0,
  tags: [
    {
      id: '63629e390dd9524341ec8eeb',
      title: 'Next.js',
      icon: 'https://res.cloudinary.com/hexdev/image/upload/v1667114437/shubhamwebdesign/lnc28fpalel9zzcg8gph.svg',
      createdAt: '2022-11-02T16:43:37.442Z',
      updatedAt: '2022-11-02T16:43:37.442Z',
    },
  ],
  tagline: 'Setting up absolute imports with jsconfig.json',
  'sub-tagline':
    'Absolute imports setup with jsconfig.json for better development experience',
  blocks: [
    {
      text: 'Example',
      classname: 'font-bold ',
      id: '63629e6f9ad821809e98fa3f',
      blockType: 'primary-heading',
    },
    {
      text: [
        {
          children: [
            {
              text: 'This is the usual way of importing with .. operator to go back 1 folder:',
            },
          ],
        },
      ],
      id: '6362a22e8f58e562b2063881',
      blockType: 'parragraph',
    },
    {
      code: [
        {
          children: [
            {
              text: "import Nav from '../../components/Nav';",
              code: true,
            },
          ],
        },
      ],
      language: 'jsx',
      showLineNumbers: false,
      id: '6362a2468f58e562b2063882',
      blockType: 'code',
    },
    {
      text: [
        {
          children: [
            {
              text: 'And this is the clean import using absolute import:',
            },
          ],
        },
        {
          children: [
            {
              text: 'And this is the clean import using absolute import:',
            },
          ],
        },
      ],
      id: '6362a2878f58e562b2063883',
      blockType: 'parragraph',
    },
    {
      code: [
        {
          children: [
            {
              text: "import Nav from '@/components/Nav';",
              code: true,
            },
          ],
        },
      ],
      language: 'jsx',
      showLineNumbers: false,
      id: '6362a2a28f58e562b2063884',
      blockType: 'code',
    },
    {
      text: 'For Next.js',
      classname: 'font-bold',
      id: '6362a2d58f58e562b2063885',
      blockType: 'primary-heading',
    },
    {
      text: 'Add this to root with the filename of `jsconfig.json`',
      classname: 'font-bold',
      id: '6362a2fe8f58e562b2063886',
      blockName: 'Secondarh Heading',
      blockType: 'secondary-heading',
    },
    {
      code: [
        {
          children: [
            {
              text: '{\n  "compilerOptions": {\n    "jsx": "preserve",\n    "baseUrl": ".",\n    "paths": {\n      "@/*": ["*"]\n    }\n  },\n  "exclude": ["node_modules", ".next"]\n}',
              code: true,
            },
          ],
        },
      ],
      language: 'jsx',
      showLineNumbers: false,
      id: '6362a3668f58e562b2063887',
      blockName: 'Code',
      blockType: 'code',
    },
    {
      text: [
        {
          children: [
            {
              text: 'Or you can just use:',
            },
            {
              type: 'link',
              linkType: 'custom',
              url: 'https://github.com/shubhamwebdesign/nextjs_starter_template',
              newTab: true,
              children: [
                {
                  text: 'My Next.js & Tailwindcss starter template',
                },
              ],
            },
            {
              text: '',
            },
            {
              type: 'link',
              newTab: true,
              url: 'https://github.com/theodorusclarence/nextjs-tailwind-starter',
              children: [
                {
                  text: '',
                },
              ],
            },
            {
              text: '',
            },
          ],
        },
      ],
      id: '6362a3938f58e562b2063888',
      blockName: 'Parragraph',
      blockType: 'parragraph',
    },
    {
      text: 'For Create React App',
      classname: 'font-bold',
      id: '6362a47c8f58e562b2063889',
      blockName: 'Primary Heading',
      blockType: 'primary-heading',
    },
    {
      text: 'Add this to root with the filename of `jsconfig.json`',
      classname: 'font-bold',
      id: '6362a4d58f58e562b206388a',
      blockName: 'Secondarh Heading',
      blockType: 'secondary-heading',
    },
    {
      code: [
        {
          children: [
            {
              text: '{\n  "compilerOptions": {\n    "baseUrl": "./src",\n    "jsx": "preserve",\n    "paths": {\n      "@/*": ["./src/*"],\n      "@/components/*": ["./components/*"],\n      "@/pages/*": ["./pages/*"],\n      "@/contexts/*": ["./contexts/*"],\n      "@/routes/*": ["./routes/*"]\n    }\n  },\n  "exclude": ["node_modules", "build"]\n}',
              code: true,
            },
          ],
        },
      ],
      language: 'jsx',
      showLineNumbers: false,
      id: '6362a5048f58e562b206388b',
      blockName: 'Code',
      blockType: 'code',
    },
    {
      text: 'Add this in craco.config.json',
      classname: 'font-bold',
      id: '6362a5278f58e562b206388c',
      blockName: 'Secondarh Heading',
      blockType: 'secondary-heading',
    },
    {
      code: [
        {
          children: [
            {
              text: "const path = require('path');\n\nmodule.exports = {\n  // ...existing code\n  webpack: {\n    alias: {\n      '@': path.resolve(__dirname, 'src'),\n    },\n  },\n};",
              code: true,
            },
          ],
        },
      ],
      language: 'jsx',
      showLineNumbers: false,
      id: '6362a5418f58e562b206388d',
      blockName: 'Code',
      blockType: 'code',
    },
  ],
  createdAt: '2022-11-02T16:45:24.985Z',
  updatedAt: '2022-11-05T15:10:52.019Z',
  subTagline: 'Absolute Imports setup with jsconfig.json',
};
