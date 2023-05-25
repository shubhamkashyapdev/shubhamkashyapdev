import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

type ImageType = {
  id: string;
  image: {
    url: string;
  };
  imageLabel: string;
};

type ImageGridBlockType = {
  imageGrid: ImageType[];
};

const ImageGridBlock: FC<ImageGridBlockType> = ({ imageGrid }) => {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4">
      {imageGrid.map((item) => (
        <div
          className="flex flex-col items-center space-y-2 rounded-md p-2 shadow-md"
          key={`image-grid-${item.id} `}
        >
          <Image
            src={item.image.url}
            width={1000}
            height={1000}
            alt="notionlink project"
            objectFit="cover"
            className="rounded-md"
          />
          <p className="text-color text-center">{item.imageLabel}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGridBlock;
