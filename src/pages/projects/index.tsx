import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import { BrandGithub, Eye, Link, User } from 'tabler-icons-react';

import {
  ParragraphBlock,
  PrimaryHeadingBlock,
} from '@/components/common/blocks';
import BlockquoteBlock from '@/components/common/blocks/BlockquoteBlock';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const features = [
  {
    text: `⚡ Unlimited branded links (use your own domain!)`,
  },
  {
    text: `☝ Self-hostable with Vercel`,
  },
  {
    text: `💨 Fast redirect using Next.js Middleware Functions`,
  },
  {
    text: `🌑 Awesome CMS using Notion`,
  },
  {
    text: `➕ See click count statistics`,
  },
  {
    text: `💅 Numerous themes`,
  },
];

const imageGrid = [
  {
    image:
      'https://res.cloudinary.com/hexdev/image/upload/v1668348898/shubhamwebdesign/wuecqv0qjauk7ztgmsqf.webp',
    text: 'NotionLink',
  },
  {
    image:
      'https://res.cloudinary.com/hexdev/image/upload/v1668348898/shubhamwebdesign/wuecqv0qjauk7ztgmsqf.webp',
    text: 'Dracula',
  },
  {
    image:
      'https://res.cloudinary.com/hexdev/image/upload/v1668348898/shubhamwebdesign/wuecqv0qjauk7ztgmsqf.webp',
    text: 'Material Dark',
  },
  {
    image:
      'https://res.cloudinary.com/hexdev/image/upload/v1668348898/shubhamwebdesign/wuecqv0qjauk7ztgmsqf.webp',
    text: 'EtheDark',
  },
  {
    image:
      'https://res.cloudinary.com/hexdev/image/upload/v1668348898/shubhamwebdesign/wuecqv0qjauk7ztgmsqf.webp',
    text: 'JetBlack',
  },
];

const Projects = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <section>
        <Image
          src={`https://res.cloudinary.com/hexdev/image/upload/v1668343779/shubhamwebdesign/ogtfzbe13lqcx0tfcxsp.webp`}
          height={700}
          width={1440}
          alt="notionlink project"
        />
      </section>
      <section>
        <PrimaryHeadingBlock variant="TITLE">NotionLink</PrimaryHeadingBlock>
        <ParragraphBlock className="mt-1">
          Self-hostable branded link shortener built with Next.js & Notion API
        </ParragraphBlock>
        {/* Page Meta */}
        <div className="mt-4 grid max-w-[500px] grid-cols-3 gap-2">
          <div className="flex gap-2 text-gray-700 dark:text-gray-300 ">
            <Eye />
            592 Views
          </div>
          <div className="flex gap-2 text-gray-700 dark:text-gray-300">
            <BrandGithub />
            <NextLink href="/">
              <a className="dark:text-gradient border-b-2 border-dotted border-gray-700 text-gray-700 hover:border-primary-300 dark:border-gray-300">
                Repository
              </a>
            </NextLink>
          </div>
          <div className="flex gap-2 text-gray-700 dark:text-gray-300">
            <Link />
            <NextLink href="/">
              <a className="dark:text-gradient border-b-2 border-dotted border-gray-700 text-gray-700 hover:border-primary-300 dark:border-gray-300">
                Open Live Site
              </a>
            </NextLink>
          </div>
        </div>
        {/* Project Type */}
        <div className="text-color mt-4 flex gap-2">
          <User />
          Personal Project
        </div>
        <hr className="my-6 h-[1.5px] border-primary-300 dark:border-gray-700" />
      </section>
      <section className="mb-20 flex flex-col md:flex-row">
        <div className="w-[70%]">
          <BlockquoteBlock subTagline="Short Explanation" className="" />
          <ParragraphBlock>
            Notiolink is a self-hostable link shortener built with Next.js &
            Notion API. {`It's`} a simple and easy-to-deploy shortener{' '}
            {` that's `}
            using Notion as a CMS.
          </ParragraphBlock>
          <ParragraphBlock>Some features including:</ParragraphBlock>
          <ul className="mt-4 mb-6 space-y-3">
            {features.map((item, index) => (
              <li
                key={`feature-${index}`}
                className="relative flex items-center text-[18px] before:absolute before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray-500 dark:text-gray-300 dark:before:bg-gray-700"
              >
                <span className="ml-6">{item.text}</span>
              </li>
            ))}
          </ul>
          <Image
            src={`https://res.cloudinary.com/hexdev/image/upload/v1668348406/shubhamwebdesign/qyozdteanwqrhgglbldt.webp`}
            height={500}
            width={800}
            alt="notionlink project"
          />
          {/* Image Grid */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            {imageGrid.map((item, index) => (
              <div
                className="flex flex-col items-center space-y-2 rounded-md p-2 shadow-md"
                key={`image-grid-${index} `}
              >
                <Image
                  src={item.image}
                  width={370}
                  height={400}
                  alt="notionlink project"
                  objectFit="cover"
                  className="rounded-md"
                />
                <p className="text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[30%]"></div>
      </section>
    </Main>
  );
};

export default Projects;
