import type { FC } from 'react';
import React from 'react';

import { Label } from '@/components/common/elements';

type TopicType = {
  topics: string[];
  handleClick: (topic: string) => void;
};

const Topic: FC<TopicType> = ({ handleClick, topics }) => {
  return (
    <div
      className="mt-2 flex flex-wrap items-baseline justify-start gap-2 text-sm text-gray-600 dark:text-gray-300"
      data-fade="3"
    >
      <span className="font-medium">Choose topic:</span>
      {topics.map((item: string, index: number) => (
        <Label
          key={`code-snippet-${item}-${index}`}
          handleClick={handleClick}
          topic={item}
        />
      ))}

      <div id="skip-tags" className="hidden"></div>
    </div>
  );
};

export default Topic;
