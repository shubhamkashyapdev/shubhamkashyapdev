import React from 'react';

type IChildren = {
  children: React.ReactNode;
};

const Container = ({ children }: IChildren) => {
  return <div className="mx-auto w-[90%] max-w-[1440px]">{children}</div>;
};

export default Container;
