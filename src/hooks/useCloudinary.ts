import { doUpload } from '@/utils/axios';

const useCloudinary = async (files: any) => {
  let image = '';
  const uploadFile = async () => {
    const res = await doUpload(files);
    image = res?.data.secure_url as string;
  };
  await uploadFile();
  return { image };
};

export default useCloudinary;
