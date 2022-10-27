import React from 'react';

const Background = () => {
  return (
    <div className="stars opacity-50 dark:opacity-20">
      {new Array(20).fill(0).map((_, index) => (
        <div
          className="star text-primary-700 dark:text-white"
          key={`star-${index}`}
        ></div>
      ))}
    </div>
  );
};

export default Background;
