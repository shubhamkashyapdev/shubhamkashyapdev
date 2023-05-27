import React from 'react';

const Divider = ({
  className,
  title,
  id,
}: {
  className?: string;
  title: string;
  id?: string;
}) => {
  return (
    <div id={id} className={` relative mt-60 mb-20 ${className} `}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-700 dark:border-gray-300"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-sm uppercase tracking-widest text-primary-300 dark:bg-primary-700">
          {title}
        </span>
      </div>
    </div>
  );
};

export default Divider;
