import axios from 'axios';

export const doPost = (url: string, data: any) => {
  return axios.post((process.env.NEXT_PUBLIC_BASE_URL as string) + url, {
    data,
  });
};

export const doUpload = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'hexdev');
  formData.append('cloud_name', 'hexdev');
  const data = axios.post(
    process.env.NEXT_PUBLIC_CLOUDNARY_URL as string,
    formData,
    {}
  );
  return data;
};
