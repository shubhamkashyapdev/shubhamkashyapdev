import type { NextPage } from 'next';

import { About } from '@/components';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { axiosGraphQL } from '@/utils/axios';
import { getAllTags } from '@/graphql/Main';
import { TagType } from '@/types/component.types';
type AboutPageType = {
  tags: TagType[]
}
const AboutPage: NextPage<AboutPageType> = ({tags}) => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <About tags={tags} />
    </Main>
  );
};

export const getServerSideProps = async () => {
  const res = await axiosGraphQL.post(`/`, {
    query: getAllTags,
  });
  const tags = res.data?.data?.Tags.docs
  return {
    props: {
      tags
    },
  };
};

export default AboutPage;
