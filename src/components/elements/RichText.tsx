import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { CodeBlock } from '@/components/common/blocks';

interface BaseNode {
  type?: string;
  children?: RichTextNode[];
  [key: string]: any;
}

interface TextNode extends BaseNode {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
}

interface HeadingNode extends BaseNode {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

interface ListNode extends BaseNode {
  type: 'ul' | 'ol';
}

interface ListItemNode extends BaseNode {
  type: 'li';
}

interface IndentNode extends BaseNode {
  type: 'indent';
}

interface LinkNode extends BaseNode {
  type: 'link';
  linkType: 'custom' | 'internal';
  url?: string;
  doc?: {
    value: {
      id: string;
      name: string;
    };
    relationTo: string;
  };
  newTab?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
}

interface UploadNode extends BaseNode {
  type: 'upload';
  relationTo: 'media';
  value: {
    id: string;
    alt: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    url: string;
    sizes: {
      thumbnail: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}

type RichTextNode =
  | TextNode
  | HeadingNode
  | ListNode
  | ListItemNode
  | IndentNode
  | LinkNode
  | UploadNode;

interface RichTextProps {
  content: RichTextNode[];
}

const RichText: React.FC<RichTextProps> = ({ content }) => {
  const renderChildren = (children?: RichTextNode[]): React.ReactNode => {
    return children?.map((child, index) => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      return renderNode(child, index);
    });
  };
  const renderNode = (node: RichTextNode, index: number): React.ReactNode => {
    if ('text' in node) {
      let textContent: React.ReactNode = node.text;
      if (node.bold) textContent = <strong>{textContent}</strong>;
      if (node.italic) textContent = <em>{textContent}</em>;
      if (node.underline) textContent = <u>{textContent}</u>;
      if (node.code)
        textContent = (
          <CodeBlock code={node.text} language="jsx" showLineNumbers={false} />
        );
      return <React.Fragment key={index}>{textContent}</React.Fragment>;
    }

    switch (node.type) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6': {
        const HeadingTag = node.type;
        return (
          <HeadingTag key={index}>{renderChildren(node.children)}</HeadingTag>
        );
      }

      case 'ul':
      case 'ol': {
        const ListTag = node.type;
        return <ListTag key={index}>{renderChildren(node.children)}</ListTag>;
      }
      case 'li':
        return <li key={index}>{renderChildren(node.children)}</li>;
      case 'indent':
        return (
          <div key={index} style={{ marginLeft: '20px' }}>
            {renderChildren(node.children)}
          </div>
        );
      case 'link': {
        const href =
          // eslint-disable-next-line no-nested-ternary
          node.linkType === 'custom'
            ? node.url?.startsWith('http')
              ? node.url
              : `https://${node.url}`
            : `/${node.doc?.relationTo}/${node.doc?.value.id}`;
        const item = node?.children?.length
          ? (node.children[0] as LinkNode)
          : null;
        let linkStyle = '';
        if (item?.bold) linkStyle += 'font-bold ';
        if (item?.underline) linkStyle += 'underline ';
        if (item?.strikethrough) linkStyle += 'line-through ';
        if (item?.italic) linkStyle += 'italic ';
        return (
          <Link
            key={index}
            href={href || '/'}
            target={node.newTab ? '_blank' : undefined}
            rel="noopener noreferrer"
            className={linkStyle}
          >
            {item?.text}
          </Link>
        );
      }

      case 'upload':
        if (node.value.mimeType.startsWith('image')) {
          return (
            <Image
              key={index}
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${node.value.url}`}
              height={750}
              width={750}
              className="w-full"
              alt={node.value.alt}
            />
          );
        }
        return (
          <Link key={index} href={node.value.url}>
            {node.value.filename}
          </Link>
        );

      default:
        // @ts-ignore
        return <p key={index}>{renderChildren(node?.children)}</p>;
    }
  };

  return (
    <div className="rich-text flex flex-col gap-2">
      {content.map((node, index) => renderNode(node, index))}
    </div>
  );
};

export default RichText;
