import type { FC } from 'react';
import React from 'react';

type IChildren = {
  children: React.ReactNode;
};

const Container: FC<IChildren> = ({ children }) => {
  return <div className="mx-auto w-[90%] max-w-[1440px]">{children}</div>;
};

export default Container;
