import type { FC } from 'react';
import React from 'react';

type FeatureType = {
  id: string;
  featureText: string;
};

type FeaturesListBlockType = {
  features: FeatureType[];
};

const FeaturesListBlock: FC<FeaturesListBlockType> = ({ features }) => {
  return (
    <ul className="mt-4 mb-6 space-y-3">
      {features.map((item, index) => (
        <li
          key={`feature-${index}`}
          className="relative flex items-center text-[18px] before:absolute before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray-500 dark:text-gray-300 dark:before:bg-gray-700"
        >
          <span className="ml-6">{item.featureText}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeaturesListBlock;
