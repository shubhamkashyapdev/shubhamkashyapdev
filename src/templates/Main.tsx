import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="h-screen w-full bg-white px-1  text-gray-700 antialiased dark:bg-primary-700 ">
    {props.meta}

    <div className="mx-auto w-[90%] max-w-screen-lg">
      <div className="content py-5 text-xl">{props.children}</div>
    </div>
  </div>
);

export { Main };