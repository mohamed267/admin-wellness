import { useEffect, useRef, useState } from 'react';
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper';
import {
  Center,
  Circle,
  Flex,
  Icon,
  Image,
  Input,
  Stack,
  useToken,
} from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import ImageUploadIcon from 'assets/icons/uploads/videoUploadIcon';
import VideoUploadBox from './VideoUploadBox';

type InputFieldProps = FieldWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
  inputStyle?: any;
  setValue?: any;
  defaultValue?: any;
  name?: string;
  videoType: string;
};

const MultipleVideoField = ({
  registration,
  error,
  label,
  setValue = () => {},
  defaultValue = [],
  name = 'media',
  videoType,
}: InputFieldProps) => {
  const [black200] = useToken('colors', ['black.200']);
  const addRef = useRef<any>(null);
  const [videos, setImages] = useState<any>(defaultValue);

  const [files, setFiles] = useState<any>([]);

  const addFiles = () => {
    const fileInput = addRef?.current;
    const inputFiles = fileInput?.files ?? [];
    inputFiles && setFiles([...files, ...inputFiles]);
  };
  const handleImageUploaded = (url: string) => {
    setImages([...videos, { url, type: 'video' }]);
  };
  const deleteImage = (index: any) => {
    setImages(videos.filter((video: any, key: any) => index !== key));
  };

  useEffect(() => {
    setValue(name, videos);
  }, [videos, name]);

  return (
    <FieldWrapper error={error} label={label}>
      <Flex
        py={5}
        columnGap={{ base: 2, lg: 10 }}
        rowGap={{ base: 5, lg: 30 }}
        flexWrap="wrap"
      >
        {/* <video width="750" height="500">
          <source src="C:/Users/j/Downloads/vid.mp4" type="video/mp4" />
        </video> */}
        <iframe
          width={300}
          height={200}
          allow="autoplay"
          src="C:/Users/j/Downloads/vid.mp4"
          // type="video/mp4"
          title="videolabone"
        ></iframe>
        {files.map((file: any, key: any) => (
          <VideoUploadBox
            file={file}
            key={key}
            videoType={videoType}
            uploaded={handleImageUploaded}
          />
        ))}
        {videos.map((video: any, key: any) => {
          return (
            <Center
              key={key}
              w={{ base: 120, lg: 150 }}
              h={{ base: 120, lg: 130 }}
              cursor="pointer"
              borderRadius="3xl"
              position={'relative'}
            >
              <Image
                src={video?.url ?? null}
                h="100%"
                w="100%"
                objectFit={'cover'}
                borderRadius={'xl'}
              />
              <Circle
                position={'absolute'}
                top={3}
                left={3}
                bg="red.500"
                borderRadius={'full'}
                fontSize="xl"
                color="white"
                size={8}
                _hover={{
                  filter: 'brightness(.85)',
                }}
                onClick={() => {
                  deleteImage(key);
                }}
              >
                <RiDeleteBin7Fill />
              </Circle>
            </Center>
          );
        })}

        <Center
          border="2px solid"
          borderColor={`${black200} !important`}
          w={{ base: 120, lg: 150 }}
          h={{ base: 120, lg: 130 }}
          bg="white"
          borderRadius="xl"
          cursor={'pointer'}
          position="relative"
        >
          <Input
            type={'file'}
            position="absolute"
            h="100%"
            w="100%"
            opacity={0}
            cursor="pointer"
            {...registration}
            onChange={addFiles}
            multiple={true}
            ref={addRef}
          />
          <Stack alignItems="center" spacing="5">
            <Icon
              fill="none"
              stroke="black"
              width="53px"
              height="53px"
              viewBox="0 0 53 53"
            >
              <ImageUploadIcon />
            </Icon>
          </Stack>
        </Center>
      </Flex>
    </FieldWrapper>
  );
};

export default MultipleVideoField;
