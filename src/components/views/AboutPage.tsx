'use client';

import React from 'react';

import { About } from '@/components';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { TagType } from '@/types/component.types';

type AboutPageProps = {
  allTags: TagType[];
};

const AboutPage = ({ allTags }: AboutPageProps) => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <About allTags={allTags} />
    </Main>
  );
};

export default AboutPage;
