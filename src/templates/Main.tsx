import type { ReactNode } from 'react';

type IMainProps = {
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="mt-14 min-h-screen">{props.children}</div>
);

export { Main };
