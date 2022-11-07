import type React from 'react';

import type { TagType } from './component.types';

export type IChildren = {
  children: React.ReactNode;
};

type BlockChildrenType = {
  children: {
    text: string;
  }[];
};

type PrimaryHeadingBlock = {
  id: string;
  text: string;
  blockType: string;
};
type SecondaryHeadingBlock = {
  id: string;
  text: string;
  blockType: string;
};
type ParragraphBlockType = {
  id: string;
  parragraph: BlockChildrenType;
  blockType: string;
};

type CodeBlockType = {
  id: string;
  code: BlockChildrenType;
  language: string;
  showLineNumbers: boolean;
};

export type LibaryBlocksType = [
  | PrimaryHeadingBlock
  | SecondaryHeadingBlock
  | CodeBlockType
  | ParragraphBlockType
];

export type LibrarySnippetPageType = {
  id: string;
  title: string;
  tagline: string;
  views: number;
  subTagline: string;
  tags: TagType[];
  blocks: LibaryBlocksType;
};
