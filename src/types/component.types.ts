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
