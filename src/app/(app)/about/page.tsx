import AboutPage from '@/components/views/AboutPage';
import { getAllTags } from '@/graphql/Main';
import { axiosGraphQL } from '@/utils/axios';

async function getTags() {
  const res = await axiosGraphQL.post(`/`, {
    query: getAllTags,
  });
  const tags = res.data?.data?.Tags.docs || [];
  return tags;
}

const Page = async () => {
  const allTags = await getTags();

  return <AboutPage allTags={allTags} />;
};

export default Page;
