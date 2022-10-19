import { Image } from '@mantine/core';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import dayjs from 'dayjs';
import React, { useState } from 'react';

import useCloudinary from '@/hooks/useCloudinary';

import {
  DateInputComponent,
  DropzoneComponent,
  FAQRepeaterComponent,
  NumberInputComponent,
  SelectComponent,
  TextAreaComponent,
  TextInputComponent,
} from '../index';

const Form = () => {
  const form = useForm({
    initialValues: {
      projectName: '',
      mintPrice: '',
      slug: '',
      mintDate: null,
      noOfWinners: 0,
      raffleStartDate: null,
      raffleEndDate: null,
      twitterLink: '',
      discordLink: '',
      Discordserverid: '',
      projectInformation: '',
      profileAvatar: null,
      profileBanner: null,
      avatarImage: null,
      bannerImage: null,
      projectFAQs: [
        { question: 'demo data ', answer: 'demo answer', key: randomId() },
      ],
    },
  });

  // const handleDrop = (name: string, value: any) => {
  //     form.setFieldValue(name, value)
  // }
  const handelsubmit = async () => {
    // uploading avatar image
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const avatarImage = await useCloudinary(form.values.avatarImage);
    console.log({ avatarImage });
    // uploading banner image
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const bannerImageResponse = await useCloudinary(form.values.bannerImage);
    console.log({ bannerImageResponse });
  };

  const [avatarImage, setAvatarImage] = useState('');
  const [bannerImage, setBannerImage] = useState('');

  const handleDrop = (_: any, file: any, name: string) => {
    const imageUrl = URL.createObjectURL(file[0]);
    if (name === 'profileBanner') {
      setBannerImage(imageUrl);
      form.setFieldValue('bannerImage', file[0]);
    } else if (name === 'profileAvatar') {
      setAvatarImage(imageUrl);
      form.setFieldValue('avatarImage', file[0]);
    }
  };

  return (
    <>
      <form
        className="flex flex-col space-y-4 md:px-4 lg:px-6"
        onSubmit={form.onSubmit(handelsubmit)}
      >
        <TextInputComponent
          form={form}
          name="projectName"
          label="Project Name"
          placeholder="Project Name"
          type="text"
        />
        <TextInputComponent
          form={form}
          name="slug"
          label="Slug "
          placeholder="Slug"
        />
        <DateInputComponent
          form={form}
          name="mintDate"
          label="Mint Date"
          placeholder="Mint Date"
        />
        <NumberInputComponent
          form={form}
          name="mintPrice"
          label="Mint Price"
          placeholder="Enter Price"
          max={9999999}
          min={1}
        />
        <SelectComponent
          form={form}
          name="noOfWinners"
          label="Number of Winners"
          placeholder="0"
          data={[
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4' },
            { value: 5, label: '5' },
            { value: 6, label: '6' },
            { value: 7, label: '7' },
            { value: 8, label: '8' },
            { value: 9, label: '9' },
            { value: 10, label: '10' },
          ]}
        />
        {/* raffle date group */}
        <div className="flex space-x-6">
          <div className="flex-1">
            <DateInputComponent
              form={form}
              name="raffleStartDate"
              label="Raffle Start Date"
              placeholder="Select Date"
            />
          </div>
          <div className="flex-1">
            <DateInputComponent
              form={form}
              name="raffleEndDate"
              label="Raffle End Date"
              placeholder="Select Date"
              minDate={dayjs(
                // @ts-ignore
                new Date(form.values.raffleStartDate)
              ).toDate()}
            />
          </div>
        </div>
        {/* raffle date group ends */}
        {/* social link group */}
        <div className="flex-1">
          <TextInputComponent
            form={form}
            name="twitterLink"
            label="Twitter Link"
            placeholder="Enter  Twitter Link"
          />
        </div>
        <div className="flex space-x-6">
          <div className="flex-1">
            <TextInputComponent
              form={form}
              name="discordLink"
              label="Discord Link"
              placeholder="Enter Discord Link"
            />
          </div>
          <div className="flex-1">
            <TextInputComponent
              form={form}
              name="Discordserverid"
              label="Discord Server's Id"
              placeholder="Enter Discord Server's Id"
            />
          </div>
        </div>
        {/* social link group ends */}
        <TextAreaComponent
          name="projectInformation"
          label="Project Information"
          placeholder="Enter Your Project Information"
          form={form}
        />
        {/* dropzone group */}
        <div className="flex space-x-6 ">
          <div className="flex-[2] ">
            <DropzoneComponent
              onDrop={handleDrop}
              label="Profile Avatar"
              placeholder="Drag image here"
              name="profileAvatar"
            ></DropzoneComponent>
          </div>
          <div className="flex-[3]">
            <DropzoneComponent
              onDrop={handleDrop}
              label="Profile Banner"
              placeholder="Drag image here"
              name="profileBanner"
            ></DropzoneComponent>
          </div>
        </div>
        {/* dropzone group ends */}
        {/* image Preview  */}

        {(avatarImage || bannerImage) && (
          <div className="flex h-[100px]  space-x-6 overflow-hidden">
            {avatarImage && (
              <div className="flex-[2] ">
                <Image src={avatarImage} fit={'contain'} alt="" height={100} />
              </div>
            )}

            {bannerImage && (
              <div className="flex-[3]">
                <Image src={bannerImage} fit={'contain'} alt="" height={100} />
              </div>
            )}
          </div>
        )}

        {/* image Preview ends here */}
        {/* nested input  */}
        <FAQRepeaterComponent
          form={form}
          name="nested list"
          label="nested list component"
          action={'add new input'}
          answere={'answer'}
          question={'Question'}
        />
        {/* project FAQs ends */}
        <div className="flex items-center justify-center pt-8">
          <button className="h-[45px] w-[250px] rounded-full bg-gray-700 font-sans  text-base font-bold tracking-wide text-white shadow-lg">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
