import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="h-full w-full  px-1 text-gray-700 antialiased ">
    {props.meta}

    <div className="mx-auto w-[90%] max-w-screen-lg">
      <div className="content py-5 text-xl">{props.children}</div>
    </div>
  </div>
);

export { Main };
