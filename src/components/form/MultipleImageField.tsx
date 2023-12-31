import { useEffect, useRef, useState } from 'react';
import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper';
import {
  Box,
  Center,
  Circle,
  // Circle,
  Flex,
  Icon,
  Image,
  // Image,
  Input,
  Stack,
  useToken,
} from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';

// import { RiDeleteBin7Fill } from 'react-icons/ri';
import FileUploadBox from './FileUploadBox';
import ImageUploadIcon from 'assets/icons/uploads/imageUploadIcon';
import uuid from 'react-uuid';
import If from 'common/If';
import { defaultFn } from 'utils/functions';
import { RiDeleteBin7Fill } from 'react-icons/ri';

type InputFieldProps = FieldWrapperPassThroughProps & {
  registration?: Partial<UseFormRegisterReturn>;
  inputStyle?: any;
  setValue?: any;
  defaultValue?: any;
  name?: string;
  imageType: string;
  nameDeleted?: string;
  watch?: any;
};

const MultipleImageField = ({
  // registration,
  error,
  label,
  setValue = () => {},
  defaultValue = [],
  name = 'medias',
  nameDeleted = 'deletedMedias',
  imageType,
  watch = defaultFn,
}: InputFieldProps) => {
  const [black200] = useToken('colors', ['black.200']);
  // const deletedImages = watch?.(nameDeleted);
  const images = watch?.(name) ?? [];
  const deletedImages = watch?.(nameDeleted);
  const addRef = useRef<any>(null);
  // const [images, setImages] = useState<any>(defaultValue);
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
    // fileInput.value = null;
  };
  const handleImageUploaded = (url: string, id: string) => {
    console.log('uploaded here => ', images);
    setValue(name, [
      ...images,
      { id: uuid(), url, type: 'image', isNew: true },
    ]);
    setFilesUploaded([...filesUploaded, id]);
  };
  const deleteImage = (deletedImage: any) => {
    const newImages = images.filter(
      (image: any) => deletedImage?.id !== image?.id,
    );
    setValue?.(name, newImages);
    if (!deletedImage.isNew) {
      setValue(nameDeleted, [...(deletedImages ?? []), deletedImage]);
    }
  };

  useEffect(() => {
    if (defaultValue) {
      name && setValue?.(name, defaultValue);
    }
  }, []);

  return (
    <FieldWrapper error={error} label={label}>
      <Flex
        py={5}
        columnGap={{ base: 2, lg: 10 }}
        rowGap={{ base: 5, lg: 30 }}
        flexWrap="wrap"
      >
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
            // {...registration}
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
        {images?.map((image: any, key: any) => {
          return (
            <If
              condition={
                true
                // !deletedImages?.some((filt: any) => filt?.id === image?.id)
              }
            >
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
                    deleteImage(image);
                  }}
                >
                  <RiDeleteBin7Fill />
                </Circle>
              </Center>
            </If>
          );
        })}
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
