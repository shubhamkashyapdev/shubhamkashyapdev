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

export type TechStackItem = {
  category: TechStacks;
  label: string;
  icon?: string;
};
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
  } | null;
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
  views: number;
  allTags: TagType[];
  createdAt: string;
  excerpt: string;
  publishedDate: string;
};

export type CodeSnippetCardType = {
  id: string;
  slug: string;
  title: string;
  views: number;
  allTags: TagType[];
  tagline: string;
};

export type ProjectCardType = {
  id: string;
  title: string;
  tagline: string;
  allTags: TagType[];
  featuredImage: {
    id: string;
    url: string;
    sizes: {
      thumbnail: {
        url: string;
      };
    };
  };
};

export type BoilerplateCardType = {
  id: string;
  title: string;
  slug: string;
  views: number;
  tagline: string;
  githubURL: string;
  description: string;
  image: {
    id: string;
    url: string;
  };
  allTags: TagType[];
};
