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
import uuid from 'react-uuid';

import { RiDeleteBin7Fill } from 'react-icons/ri';
import FileUploadBox from './FileUploadBox';
import If from 'common/If';
import ImageUploadIcon from 'assets/icons/uploads/imageUploadIcon';
import { AnimatePresence, motion } from 'framer-motion';

type InputFieldProps = FieldWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
  inputStyle?: any;
  setValue?: any;
  name?: string;
  defaultValue?: string | null;
  imageType: string;
  watch: any;
};

const SingleImageField = ({
  registration,
  error,
  label,
  setValue = () => {},
  defaultValue = null,
  name = 'media',
  imageType,
  watch,
}: InputFieldProps) => {
  // let uuid = 1
  const [black200] = useToken('colors', ['black.200']);
  const addRef = useRef<any>(null);
  const image = watch?.(name);
  // const [image, setImage] = useState<any>(
  //   defaultValue ? { url: defaultValue, _old: true } : null,
  // );
  const [file, setFile] = useState<any>(null);

  useEffect(() => {
    if (defaultValue) {
      setValue(name, { url: defaultValue, isOld: true });
    }
  }, [defaultValue]);

  const addFile = () => {
    const fileInput = addRef?.current;
    const inputFile = fileInput?.files?.[0] ?? null;
    inputFile && setFile(inputFile);
  };
  const handleImageUploaded = (url: string) => {
    setValue(name, { url });
    setFile(null);
  };
  const deleteImage = () => {
    setValue(name, null);
  };

  return (
    <FieldWrapper error={error} label={label}>
      <Flex
        columnGap={{ base: 2, lg: 10 }}
        rowGap={{ base: 5, lg: 30 }}
        flexWrap="wrap"
      >
        <If condition={image}>
          <Center
            w={{ base: '100px', md: '150px' }}
            h={{ base: '100px', md: '130px' }}
            cursor="pointer"
            borderRadius="3xl"
            position={'relative'}
          >
            <Image
              src={image?.url}
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
              onClick={deleteImage}
            >
              <RiDeleteBin7Fill />
            </Circle>
          </Center>
        </If>

        <If condition={!image}>
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
              onChange={addFile}
              multiple={true}
              ref={addRef}
            />
            <Stack alignItems="center" spacing="5">
              <Icon fill="none" width="53px" height="53px" viewBox="0 0 53 53">
                <ImageUploadIcon />
              </Icon>
            </Stack>
          </Center>
        </If>
      </Flex>
      <AnimatePresence>
        {file && (
          <Stack
            key={uuid()}
            as={motion.div}
            exit={{
              x: '-300px',
              opacity: 0,
              transition: {
                duration: 0.7,
              },
            }}
          >
            <FileUploadBox
              key={uuid()}
              file={file}
              uploaded={handleImageUploaded}
              imageType={imageType}
            />
          </Stack>
        )}
      </AnimatePresence>
    </FieldWrapper>
  );
};

export default SingleImageField;
