import Image from 'next/image';
import { notFound } from 'next/navigation';

import {
  ParragraphBlock,
  PrimaryHeadingBlock,
} from '@/components/common/blocks';
import Blocks from '@/components/common/elements/Blocks';
import CardMeta from '@/components/common/elements/CardMeta';
import { getBlogDataForPage } from '@/graphql/Blogs';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { axiosGraphQL } from '@/utils/axios';

async function getBlog(id: string) {
  const res = await axiosGraphQL.post(`/`, {
    query: getBlogDataForPage,
    variables: { id },
  });
  const blog = res?.data?.data?.Post;
  return blog;
}

const BlogPage = async ({ params }: { params: { id: string } }) => {
  const blog = await getBlog(params.id);

  if (!blog) {
    notFound();
  }

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_URL}${blog?.featured.image.url}`}
        height={700}
        width={1440}
        alt="notionlink project"
      />
      <PrimaryHeadingBlock variant="TITLE">{blog?.title}</PrimaryHeadingBlock>
      <ParragraphBlock className="mt-1 max-w-[70ch]">
        {blog?.excerpt}
      </ParragraphBlock>
      <CardMeta className="mt-2" tags={blog.tags} views={blog.views} />
      <Blocks blocks={blog.blocks} />
    </Main>
  );
};

export default BlogPage;
