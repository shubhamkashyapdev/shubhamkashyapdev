'use client';

import type { FC } from 'react';
import React from 'react';

type SearchBarType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: FC<SearchBarType> = ({ value, setValue }) => {
  return (
    <input
      className="text-color mt-4 w-full rounded-md border border-gray-500 p-3 focus:border-primary-300 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-primary-700 dark:focus:border-primary-300"
      data-fade="2"
      placeholder="Search..."
      value={value}
      onChange={(e) => setValue(e.target.value.trim())}
      type="text"
    />
  );
};

export default SearchBar;
