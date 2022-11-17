import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

type ImageType = {
  id: string;
  url: string;
};

type ImageBlockType = {
  image: ImageType;
};

const ImageBlock: FC<ImageBlockType> = ({ image }) => {
  return (
    <div className="my-6" key={image.id}>
      <Image
        src={image.url}
        height={500}
        width={800}
        alt="notionlink project"
        objectFit="contain"
      />
    </div>
  );
};

export default ImageBlock;
