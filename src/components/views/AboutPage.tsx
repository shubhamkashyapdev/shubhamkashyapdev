'use client';

import React from 'react';

import { About } from '@/components';
import { Main } from '@/templates/Main';
import type { TagType } from '@/types/component.types';

type AboutPageProps = {
  allTags: TagType[];
};

const AboutPage = ({ allTags }: AboutPageProps) => {
  return (
    <Main>
      <About allTags={allTags} />
    </Main>
  );
};

export default AboutPage;
