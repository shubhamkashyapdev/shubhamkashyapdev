import { useTheme } from 'next-themes';
import type { FC } from 'react';
import React from 'react';

const ToggleButton: FC = () => {
  const { theme, setTheme } = useTheme();
  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <button
      onClick={handleToggle}
      className="rounded-md border-primary-300  p-2 text-lg text-primary-300 shadow-md  hover:border-primary-300 hover:text-primary-300 focus:outline-none focus-visible:border-primary-300 focus-visible:text-primary-300 dark:border-gray-600 dark:text-white dark:hover:border-primary-300 dark:hover:text-primary-300 dark:focus-visible:border-primary-300 dark:focus-visible:text-primary-300 md:p-2.5 md:text-xl"
    >
      {theme === 'dark' ? (
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      ) : (
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )}
    </button>
  );
};

export default ToggleButton;
