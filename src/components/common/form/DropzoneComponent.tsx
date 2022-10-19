import { Group, Text, useMantineTheme } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons';
import type { FC } from 'react';
import { Photo, Upload, X } from 'tabler-icons-react';

// @ts-ignore
function ImageUploadIcon({ status, ...props }) {
  if (status.accepted) {
    return <Upload {...props} />;
  }

  if (status.rejected) {
    return <X {...props} />;
  }

  return <Photo {...props} />;
}

export const dropzoneChildren = (status: any, theme: any, placeholder: any) => (
  <div className="flex flex-col items-center justify-center p-4">
    <div>
      <ImageUploadIcon
        status={status}
        size={80}
        color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
      />
    </div>
    <div>
      <Text size="xl">{placeholder}</Text>
    </div>
  </div>
);

type DropZoneProps = {
  label: string;
  placeholder?: string;
  name: string;
  onDrop: any;
};

const DropzoneComponent: FC<DropZoneProps> = ({ label, name, onDrop }) => {
  const imageUploader = (imageName: string, files: any) => {
    if (files[0] === undefined) {
      alert(`Please select a file to upload!`);
      return;
    }

    onDrop(imageName, files, name);
  };
  const theme = useMantineTheme();
  return (
    <div>
      <h5>{label}</h5>
      {/* @ts-ignore */}
      <Dropzone
        onDrop={(files: any) => imageUploader(name, files)}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        multiple={false}
      >
        {/* @ts-ignore */}
        <Group
          position="center"
          spacing="xl"
          style={{ minHeight: 220, pointerEvents: 'none' }}
        >
          <Dropzone.Idle>
            <IconPhoto size={50} stroke={1.5} />
          </Dropzone.Idle>

          <Dropzone.Accept>
            <IconUpload size={50} stroke={1.5} />
          </Dropzone.Accept>

          <Dropzone.Reject>
            <IconX
              size={50}
              stroke={1.5}
              color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
            />
          </Dropzone.Reject>
        </Group>
      </Dropzone>
    </div>
  );
};

export default DropzoneComponent;
