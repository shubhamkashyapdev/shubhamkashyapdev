import React from 'react';

import {
  CodeBlock,
  FeaturesListBlock,
  ImageBlock,
  ImageGridBlock,
  PrimaryHeadingBlock,
} from '@/components/common/blocks';
import BlockquoteBlock from '@/components/common/blocks/BlockquoteBlock';
import RichText from '@/components/elements/RichText';

type BlocksType = {
  blocks: any;
};
const Blocks = ({ blocks = [] }: BlocksType) => {
  return (
    <section className="mb-20 flex flex-col md:flex-row">
      <div className="w-full md:w-[70%]">
        {blocks?.map((item: any, blockIndex: number) => {
          if (item.blockType === 'primary-heading') {
            return (
              <PrimaryHeadingBlock
                variant="PRIMARY"
                key={`block-${item.blockType}-${item.id}-${blockIndex}`}
              >
                {item.text}
              </PrimaryHeadingBlock>
            );
          }
          if (item.blockType === 'secondary-heading') {
            return (
              <PrimaryHeadingBlock
                className="mb-1 mt-12"
                key={`block-${item.blockType}-${item.id}-${blockIndex}`}
              >
                {item.secondaryHeading}
              </PrimaryHeadingBlock>
            );
          }
          if (item.blockType === 'code') {
            return (
              <React.Fragment
                key={`block-${item.blockType}-${item?.id}-${blockIndex}`}
              >
                {item.code.map((childrens: any[]) => {
                  // @ts-ignore
                  return childrens.children.map(
                    (codebox: { text: string }, index: number) => (
                      <CodeBlock
                        key={`block-parragraph-item-${item.id}-${index}`}
                        code={`${codebox.text || ''}`.trim()}
                        language={item.language}
                        showLineNumbers={item.showLineNumbers}
                      />
                    )
                  );
                })}
              </React.Fragment>
            );
          }
          if (item.blockType === 'blockquote') {
            return (
              <BlockquoteBlock
                key={`block-${item.blockType}-${item?.id}-${blockIndex}`}
                subTagline={item.title}
              />
            );
          }
          if (item.blockType === 'imageblock') {
            return (
              <ImageBlock
                key={`block-${item.blockType}-${item?.id}-${blockIndex}`}
                image={item.image}
              />
            );
          }
          if (item.blockType === 'featureslist') {
            return (
              <FeaturesListBlock
                key={`block-${item.blockType}-${item?.id}-${blockIndex}`}
                features={item.features}
              />
            );
          }

          if (item.blockType === 'parragraph') {
            return (
              <React.Fragment
                key={`block-${item.blockType}-${item?.id}-${blockIndex}`}
              >
                <RichText content={item.parragraph}></RichText>
              </React.Fragment>
            );
          }
          if (item.blockType === 'imageGridBlock') {
            return (
              <ImageGridBlock
                key={`block-${item.blockType}-${item?.id}-${blockIndex}`}
                imageGrid={item.imageGrid}
              />
            );
          }
          return null;
        })}
      </div>
      <div className="w-full md:w-[30%]"></div>
    </section>
  );
};

export default Blocks;
