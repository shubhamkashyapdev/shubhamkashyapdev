import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import { ArrowRight } from 'tabler-icons-react';

import {
  CodeBlock,
  FeaturesListBlock,
  ImageBlock,
  ImageGridBlock,
  ParragraphBlock,
  PrimaryHeadingBlock,
} from '@/components/common/blocks';
import BlockquoteBlock from '@/components/common/blocks/BlockquoteBlock';

type BlocksType = {
  blocks: any;
};
const Blocks: FC<BlocksType> = ({ blocks }) => {
  const pBlocks = blocks.filter((item: any) => item.blockType === 'parragraph');
  console.log({ ParragraphBlock: pBlocks });
  return (
    <section className="mb-20 flex flex-col md:flex-row">
      <div className="w-full md:w-[70%]">
        {blocks.map((item: any) => {
          if (item.blockType === 'primary-heading') {
            return (
              <PrimaryHeadingBlock
                variant="PRIMARY"
                key={`block-heading-${item.id}`}
              >
                {item.text}
              </PrimaryHeadingBlock>
            );
          }
          if (item.blockType === 'secondary-heading') {
            return (
              <PrimaryHeadingBlock
                className="mb-1 mt-12"
                key={`block-heading-${item.id}`}
              >
                {item.secondaryHeading}
              </PrimaryHeadingBlock>
            );
          }
          if (item.blockType === 'code') {
            return (
              <React.Fragment key={`block-parragraph-${item?.id}`}>
                {item.code.map((childrens: any[]) => {
                  // @ts-ignore
                  return childrens.children.map(
                    (codebox: { text: string }, index: number) => (
                      <>
                        <CodeBlock
                          key={`block-parragraph-item-${item.id}-${index}`}
                          code={`${codebox.text || ''}`.trim()}
                          language={item.language}
                          showLineNumbers={item.showLineNumbers}
                        />
                      </>
                    )
                  );
                })}
              </React.Fragment>
            );
          }
          if (item.blockType === 'blockquote') {
            return <BlockquoteBlock key={item.id} subTagline={item.title} />;
          }
          if (item.blockType === 'imageblock') {
            return <ImageBlock key={item.id} image={item.image} />;
          }
          if (item.blockType === 'featureslist') {
            return <FeaturesListBlock key={item.id} features={item.features} />;
          }

          if (item.blockType === 'parragraph') {
            return (
              <React.Fragment key={`block-parragraph-${item.id}`}>
                {item.parragraph.map((items: any, pIndex: number) => {
                  if (items.type === 'ul') {
                    return (
                      <ul className="my-4 flex flex-col gap-1" key={items.id}>
                        {items.children.map((pItem: any, index: number) =>
                          pItem.children.map((subItem: { text: string }) => (
                            <li
                              className="text-color flex gap-6"
                              key={`sub-item-${index}`}
                            >
                              <span className="">{index + 1}.</span>
                              <span>{subItem.text}</span>
                            </li>
                          ))
                        )}
                      </ul>
                    );
                  }
                  // @ts-ignore
                  return items.children.map((parra: any, index: number) => (
                    <div
                      key={`block-parragraph-${index}-${item.id}`}
                      className="flex space-x-4"
                    >
                      {parra?.text ? (
                        <ParragraphBlock
                          key={`block-parragraph-item-${item.id}-${index}`}
                          className={`${
                            pIndex > 0 ? 'mt-2' : 'mt-1'
                          } flex space-x-4`}
                        >
                          {parra.text}
                        </ParragraphBlock>
                      ) : null}
                      <span>
                        {parra?.type &&
                        parra?.type === 'link' &&
                        parra?.children[0]?.text ? (
                          <div className="flex space-x-4">
                            <ArrowRight className="text-color" />
                            <Link
                              href={parra?.url}
                              target={parra.newTab ? '_blank' : '_self'}
                            >
                              <a className="text-color border-b-2 border-transparent hover:border-b-2 hover:border-primary-300">
                                {parra?.children[0]?.text}
                              </a>
                            </Link>
                          </div>
                        ) : null}
                      </span>
                    </div>
                  ));
                })}
              </React.Fragment>
            );
          }
          if (item.blockType === 'imageGridBlock') {
            return <ImageGridBlock key={item.id} imageGrid={item.imageGrid} />;
          }
          return null;
        })}
      </div>
      <div className="w-full md:w-[30%]"></div>
    </section>
  );
};

export default Blocks;
