'use client';

import React from 'react';

import { About } from '@/components';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { TagType } from '@/types/component.types';

type AboutPageProps = {
  tags: TagType[];
};

const AboutPage = ({ tags }: AboutPageProps) => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <About tags={tags} />
    </Main>
  );
};

export default AboutPage;
