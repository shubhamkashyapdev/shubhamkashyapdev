import type React from 'react';

import type { IChildren } from './common.types';

export type IHeader = {} & IChildren;
export enum SecondaryHeadingSizes {
  SM,
  MD,
  LG,
}

export enum TechStacks {
  BACKEND,
  FRONTEND,
  TOOLS,
  TESTING,
  INFRASTRUCTURE,
}

export type TechStackItem = { category: TechStacks; label: string };
export type NavItemProps = {
  route: string;
  label: string;
};

export type SocialIconProps = {
  route: string;
  icon: React.ReactNode;
};

export type TagType = {
  id: string;
  title: string;
  icon: {
    id: string;
    url: string;
  };
};

export type BlogCardType = {
  id: string;
  featuredImage: {
    id: string;
    url: string;
  };
  slug: string;
  title: string;
  readTime: number;
  viewes: number;
  tags: TagType[];
  createdAt: string;
  excerpt: string;
  publishedDate: string;
};

export type CodeSnippetCardType = {
  id: string;
  title: string;
  views: number;
  tags: TagType[];
  tagline: string;
};

export type ProjectCardType = {
  id: string;
  title: string;
  tagline: string;
  tags: TagType[];
  featuredImage: {
    sizes: {
      thumbnail: {
        url: string;
      };
    };
  };
};
