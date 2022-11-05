import type { FC } from 'react';
import React from 'react';

type LabelType = {
  handleClick: (topic: string) => void;
  topic: string;
};

const Label: FC<LabelType> = ({ handleClick, topic }) => {
  return (
    <button
      onClick={() => handleClick(topic)}
      className="inline-block rounded-md bg-gray-100 px-1.5 py-0.5 font-medium text-gray-700 transition-colors hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-primary-300 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:text-white dark:disabled:bg-gray-600 dark:disabled:text-gray-500"
    >
      {topic}
    </button>
  );
};

export default Label;
