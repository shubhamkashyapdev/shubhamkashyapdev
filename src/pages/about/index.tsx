import type { NextPage } from 'next';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import {About} from '@/components'



const AboutPage: NextPage = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
     <About />
    </Main>
  );
};

export default AboutPage;
