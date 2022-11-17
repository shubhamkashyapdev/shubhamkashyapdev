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
      showLineNumbers: true,
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
      showLineNumbers: true,
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
      showLineNumbers: true,
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
      showLineNumbers: true,
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
      showLineNumbers: true,
      id: '6362a5418f58e562b206388d',
      blockName: 'Code',
      blockType: 'code',
    },
  ],
  createdAt: '2022-11-02T16:45:24.985Z',
  updatedAt: '2022-11-05T15:10:52.019Z',
  subTagline: 'Absolute Imports setup with jsconfig.json',
};

export const project = {
  id: '636d48e38156c0b02b0c18f0',
  title: 'NotionLink',
  views: 0,
  tagline:
    'Self-hostable branded link shortener built with Next.js & Notion API',
  subTagline:
    'Self-hostable branded link shortener built with Next.js & Notion API',
  createdAt: '2022-11-10T18:54:27.300Z',
  featuredImage: {
    id: '6374ec7353dc844e262013e5',
    url: 'http://localhost:5000/media/notiolink.webp',
  },
  projectType: 'Personal Project',
  blocks: [
    {
      id: '6372685fa6ea9710d1361d3d',
      blockType: 'blockquote',
      title: 'Short Explanation',
    },
    {
      id: '63726887a6ea9710d1361d3e',
      parragraph: [
        {
          children: [
            {
              text: "Notiolink is a self-hostable link shortener built with Next.js & Notion API. It's a simple and easy-to-deploy shortener that's using Notion as a CMS.",
            },
          ],
        },
      ],
      blockType: 'parragraph',
    },
    {
      id: '637268f58ed8045353c27ce7',
      blockType: 'featureslist',
      features: [
        {
          id: '637268f78ed8045353c27ce8',
          featureText: '⚡ Unlimited branded links (use your own domain!)',
        },
        {
          id: '637269048ed8045353c27ce9',
          featureText: '☝ Self-hostable with Vercel',
        },
        {
          id: '6372690c8ed8045353c27cea',
          featureText: '💨 Fast redirect using Next.js Middleware Functions',
        },
        {
          id: '637269188ed8045353c27ceb',
          featureText: '🌑 Awesome CMS using Notion',
        },
        {
          id: '637269278ed8045353c27cec',
          featureText: '➕ See click count statistics',
        },
        {
          id: '6372692f8ed8045353c27ced',
          featureText: '💠 Zero config, all customizable via env',
        },
        {
          id: '637269378ed8045353c27cee',
          featureText: '💅 Numerous themes',
        },
      ],
    },
    {
      id: '6372695b8ed8045353c27cef',
      blockType: 'blockquote',
      title: 'Project Goals',
    },
    {
      id: '6372697f8ed8045353c27cf0',
      parragraph: [
        {
          children: [
            {
              text: 'I did this project originally for my personal use. Shortening links is easier for me to remember than having to search through numerous bookmarks. I can just pick a short slug—which usually is not an option when you are using a free service—and remember it.',
            },
          ],
        },
      ],
      blockType: 'parragraph',
    },
    {
      id: '637269a88ed8045353c27cf1',
      blockType: 'blockquote',
      title: 'Tech Stack Used',
    },
    {
      id: '63726a3d8ed8045353c27cf6',
      parragraph: [
        {
          children: [
            {
              text: 'Notiolink is a full-stack application built using Next.js and Notion API. I chose notion because of the easy-to-use UI. All links are served as a table inside the notion and can be edited whenever you want.',
            },
          ],
        },
      ],
      blockType: 'parragraph',
    },
    {
      id: '63726a608ed8045353c27cf7',
      blockType: 'blockquote',
      title: 'Features',
    },
    {
      id: '63726a7d8ed8045353c27cf8',
      secondaryHeading: 'Notion CMS',
      blockType: 'secondary-heading',
    },
    {
      id: '63726a978ed8045353c27cf9',
      parragraph: [
        {
          children: [
            {
              text: 'All links are customizable via notion',
            },
          ],
        },
      ],
      blockType: 'parragraph',
    },
    {
      id: '63726aeb8ed8045353c27cfa',
      blockType: 'imageblock',
      image: {
        id: '63726b2abb43865ec69d5d06',
        url: 'http://localhost:5000/media/template-link-shortner.webp',
      },
    },
    {
      id: '63726b468ed8045353c27cfb',
      secondaryHeading: 'Link Tree Page',
      blockType: 'secondary-heading',
    },
    {
      id: '63726b618ed8045353c27cfc',
      parragraph: [
        {
          children: [
            {
              text: 'You can easily configure it on the notion database',
            },
          ],
        },
      ],
      blockType: 'parragraph',
    },
    {
      id: '63726b8d8ed8045353c27cfd',
      blockType: 'imageblock',
      image: {
        id: '63726b9fbb43865ec69d5d13',
        url: 'http://localhost:5000/media/notion-image-grid.webp',
      },
    },
    {
      id: '63726bb68ed8045353c27cfe',
      secondaryHeading: 'Add New Link',
      blockType: 'secondary-heading',
    },
    {
      id: '63726bd48ed8045353c27cff',
      parragraph: [
        {
          children: [
            {
              text: "You can add link straight from the website for easy access, don't worry this is protected with login page so no one will mess with your links.",
            },
          ],
        },
      ],
      blockType: 'parragraph',
    },
    {
      id: '63726bf98ed8045353c27d00',
      blockType: 'imageblock',
      image: {
        id: '63726c03bb43865ec69d5d24',
        url: 'http://localhost:5000/media/shorten-new-link_tkinse.webp',
      },
    },
    {
      id: '63726c198ed8045353c27d01',
      secondaryHeading: 'Link Details & Count',
      blockType: 'secondary-heading',
    },
    {
      id: '63726c378ed8045353c27d02',
      parragraph: [
        {
          children: [
            {
              text: 'You can see the statistics with /:slug/detail route',
            },
          ],
        },
      ],
      blockType: 'parragraph',
    },
    {
      id: '63726c518ed8045353c27d03',
      blockType: 'imageblock',
      image: {
        id: '63726c63bb43865ec69d5d35',
        url: 'http://localhost:5000/media/link-details-and-count_ae7x2e.webp',
      },
    },
    {
      id: '63726c718ed8045353c27d04',
      secondaryHeading: 'Categorized Tree',
      blockType: 'secondary-heading',
    },
    {
      id: '63726c878ed8045353c27d05',
      parragraph: [
        {
          children: [
            {
              text: 'Every category will be made into a standalone tree on /c/:category route',
            },
          ],
        },
      ],
      blockType: 'parragraph',
    },
    {
      id: '63726cae8ed8045353c27d06',
      blockType: 'imageblock',
      image: {
        id: '63726cc1bb43865ec69d5d42',
        url: 'http://localhost:5000/media/categorized-tree_aeottm.webp',
      },
    },
    {
      id: '63726ce08ed8045353c27d08',
      secondaryHeading: 'Themes',
      blockType: 'secondary-heading',
    },
    {
      id: '63726cee8ed8045353c27d09',
      parragraph: [
        {
          children: [
            {
              text: 'Themes you can choose',
            },
          ],
        },
      ],
      blockType: 'parragraph',
    },
    {
      id: '63726dbcce4960ea255ee06f',
      blockType: 'imageGridBlock',
      imageGrid: [
        {
          id: '63726dc0ce4960ea255ee070',
          imageLabel: 'Dark',
          image: {
            id: '63726b9fbb43865ec69d5d13',
            url: 'http://localhost:5000/media/notion-image-grid.webp',
          },
        },
        {
          id: '63726dd2ce4960ea255ee071',
          imageLabel: 'Light',
          image: {
            id: '63726de267f7c728a3ea48a5',
            url: 'http://localhost:5000/media/theme-light_pmkjnq.webp',
          },
        },
        {
          id: '63726de5ce4960ea255ee072',
          imageLabel: 'Street',
          image: {
            id: '63726df967f7c728a3ea48ac',
            url: 'http://localhost:5000/media/theme-street_nx7i4f.webp',
          },
        },
        {
          id: '63726dfcce4960ea255ee073',
          imageLabel: 'Monokai',
          image: {
            id: '63726e0a67f7c728a3ea48b3',
            url: 'http://localhost:5000/media/theme-monokai_ndz8rx.webp',
          },
        },
      ],
    },
    {
      id: '63726e48ce4960ea255ee075',
      blockType: 'blockquote',
      title: 'Spotlight',
    },
    {
      id: '63726e63ce4960ea255ee076',
      secondaryHeading: 'Creating An Easy To Deploy App',
      blockType: 'secondary-heading',
    },
    {
      id: '63726e73ce4960ea255ee077',
      parragraph: [
        {
          children: [
            {
              text: 'I aim for this project to be easy to fork and deploy. Therefore, every configuration is done via environment variables.',
            },
          ],
        },
      ],
      blockType: 'parragraph',
    },
    {
      id: '63726eb0ce4960ea255ee078',
      secondaryHeading: 'Installation Guide',
      blockType: 'secondary-heading',
    },
    {
      id: '63726eccce4960ea255ee079',
      blockType: 'imageblock',
      image: {
        id: '63726eda67f7c728a3ea48c8',
        url: 'http://localhost:5000/media/notiolink-installation-guide_hcgett.webp',
      },
    },
    {
      id: '6374f6f7fbdf2b1d1b70b8a4',
      blockType: 'blockquote',
      title: 'Launching on ProductHunt',
    },
    {
      id: '63726f0bce4960ea255ee07b',
      parragraph: [
        {
          children: [
            {
              text: 'I launched the app on ProductHunt, and the review is quite positive!',
            },
          ],
        },
      ],
      blockType: 'parragraph',
    },
    {
      id: '63726f27ce4960ea255ee07c',
      blockType: 'imageblock',
      image: {
        id: '63726f3767f7c728a3ea48d5',
        url: 'http://localhost:5000/media/producthunt_boyaq5.webp',
      },
    },
    {
      id: '6374f6d6fbdf2b1d1b70b8a3',
      blockType: 'blockquote',
      title: 'The Problems and How I Deal With It',
    },
    {
      id: '63726f5bce4960ea255ee07e',
      parragraph: [
        {
          children: [
            {
              text: 'Optimizing the repository so it is fairly customizable is hard. I created some features which users can customize and have to account for whether the feature will be hard to implement or set up. However, it was a thought-provoking activity that I enjoyed.',
            },
          ],
        },
      ],
      blockType: 'parragraph',
    },
  ],
};
