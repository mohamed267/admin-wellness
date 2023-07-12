import { Avatar } from '@chakra-ui/react';

type ImageType = {
  value: any;
};

const Image = ({ value }: ImageType) => {
  return <Avatar size={'md'} src={value?.file_url ?? null} />;
};

export default Image;
