import { useEffect, useRef, useState } from 'react';
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper';
import {
  Box,
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
import FileUploadBox from './FileUploadBox';
import ImageUploadIcon from 'assets/icons/uploads/imageUploadIcon';
import uuid from 'react-uuid';
import If from 'common/If';

type InputFieldProps = FieldWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
  inputStyle?: any;
  setValue?: any;
  defaultValue?: any;
  name?: string;
  imageType: string;
};

const MultipleImageField = ({
  registration,
  error,
  label,
  setValue = () => {},
  defaultValue = [],
  name = 'media',
  imageType,
}: InputFieldProps) => {
  const [black200] = useToken('colors', ['black.200']);
  const addRef = useRef<any>(null);
  const [images, setImages] = useState<any>(defaultValue);
  const [filesUploaded, setFilesUploaded] = useState<string[]>([]);

  const [files, setFiles] = useState<any>([]);

  const addFiles = () => {
    const fileInput = addRef?.current;
    const inputFiles = fileInput?.files ?? {};

    const filesInstances = Object.keys(inputFiles)?.map((index: any) => ({
      file: inputFiles[index],
      id: uuid(),
    }));
    inputFiles && setFiles([...files, ...filesInstances]);
    fileInput.value = null;
    console.log('files => ', fileInput?.files);
  };
  const handleImageUploaded = (url: string, id: string) => {
    setImages([...images, { url, type: 'image' }]);
    setFilesUploaded([...filesUploaded, id]);
  };
  const deleteImage = (index: any) => {
    setImages(images.filter((image: any, key: any) => index !== key));
  };

  useEffect(() => {
    setValue(name, images);
  }, [images]);

  return (
    <FieldWrapper error={error} label={label}>
      <Flex
        py={5}
        columnGap={{ base: 2, lg: 10 }}
        rowGap={{ base: 5, lg: 30 }}
        flexWrap="wrap"
      >
        {images.map((image: any, key: any) => {
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
                src={image?.url ?? null}
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
            <Icon fill="none" width="53px" height="53px" viewBox="0 0 53 53">
              <ImageUploadIcon />
            </Icon>
          </Stack>
        </Center>
      </Flex>
      <Box>
        {files.map((file: any, key: any) => (
          <If key={key} condition={!filesUploaded?.includes(file?.id)}>
            <FileUploadBox
              file={file?.file}
              imageType={imageType}
              uploaded={(url: string) => handleImageUploaded(url, file?.id)}
            />
          </If>
        ))}
      </Box>
    </FieldWrapper>
  );
};

export default MultipleImageField;
