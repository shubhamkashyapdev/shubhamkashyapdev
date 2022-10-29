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
