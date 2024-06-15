import AboutPage from '@/components/views/AboutPage';
import { getAllTags } from '@/graphql/Main';
import { axiosGraphQL } from '@/utils/axios';

async function getTags() {
  const res = await axiosGraphQL.post(`/`, {
    query: getAllTags,
  });
  const tags = res.data?.data?.Tags.docs;
  return tags;
}

const Page = async () => {
  const tags = await getTags();

  return <AboutPage tags={tags} />;
};

export default Page;
