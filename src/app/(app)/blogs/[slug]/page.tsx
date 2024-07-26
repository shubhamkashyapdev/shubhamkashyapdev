import Image from 'next/image';
import { notFound } from 'next/navigation';

import {
  ParragraphBlock,
  PrimaryHeadingBlock,
} from '@/components/common/blocks';
import Blocks from '@/components/common/elements/Blocks';
import CardMeta from '@/components/common/elements/CardMeta';
import { getBlogDataForPage } from '@/graphql/Blogs';
import { Main } from '@/templates/Main';
import { axiosGraphQL } from '@/utils/axios';

async function getBlog(slug: string) {
  const res = await axiosGraphQL.post(`/`, {
    query: getBlogDataForPage,
    variables: { slug },
  });

  const blog = res?.data?.data?.Posts.docs[0];
  return blog;
}

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound();
  }
   if (blog.status !== 'published') {
     notFound();
   }

  return (
    <Main>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_URL}${
          blog?.featuredImage?.url || '/'
        }`}
        height={700}
        width={1440}
        alt="notionlink project"
      />
      <PrimaryHeadingBlock variant="TITLE">{blog?.title}</PrimaryHeadingBlock>
      <ParragraphBlock className="mt-1 max-w-[70ch]">
        {blog?.excerpt}
      </ParragraphBlock>
      <CardMeta className="mt-2" allTags={blog.allTags} views={blog.views} />
      <Blocks blocks={blog.blocks} />
    </Main>
  );
};

export default BlogPage;
