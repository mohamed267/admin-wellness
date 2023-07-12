import { useEffect, useState } from 'react';
import {
  Image,
  Stack,
  Text,
  Flex,
  Progress,
  HStack,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
import If from 'common/If';
import { useUploadFile } from 'features/uploadFiles';
import BinDeleteIcon from 'assets/icons/global/BinDeleteIcon';
import { reformulateFileSize } from 'utils/functions';
import { FormattedMessage } from 'react-intl';

type FileUploadBoxProps = {
  file: any;
  uploaded?: any;
  name?: string;
  imageType: string;
};

const FileUploadBox = ({
  file,
  imageType,
  uploaded = () => {},
  name = 'file',
}: FileUploadBoxProps) => {
  const [completeProgress, setCompleteProgress] = useState<number>(0);
  const { isOpen: isUploadCanceled, onOpen: cancelUpload } = useDisclosure();
  const {
    mutate: uploadFile,
    data: fileData,
    isSuccess: isUploaded,
  } = useUploadFile();

  useEffect(() => {
    if (file) {
      const data = new FormData();
      data.append(name, file);
      uploadFile({ data, setCompleteProgress, fileType: imageType });
    }
  }, [file, uploadFile, imageType, name]);

  useEffect(() => {
    console.log('her is ', isUploaded, isUploadCanceled);
    if (isUploaded && !isUploadCanceled) {
      uploaded(fileData?.file);
    }
  }, [isUploaded, fileData, uploaded, isUploadCanceled]);

  return (
    <If condition={!isUploadCanceled && !isUploaded}>
      <Flex
        bg="white"
        w="400px"
        borderRadius="xl"
        boxShadow="sm"
        borderColor="gray.400"
        my="10px"
        p="20px"
        px="30px"
        gap="30px"
      >
        <Image
          src={URL.createObjectURL(file)}
          w="60px"
          h="60px"
          objectFit="cover"
          borderRadius="xl"
        />
        <Stack flexGrow="1" gap="10px">
          <HStack justifyContent="space-between" alignItems="start">
            <Stack>
              <Text color="gray.600" fontSize="xl" fontWeight="400">
                {file?.name}
              </Text>
              <Text textTransform="capitalize" color="gray.500">
                {reformulateFileSize(file?.size ?? 0)?.size}
                <FormattedMessage
                  id={reformulateFileSize(file?.size ?? 0)?.unit}
                />
              </Text>
            </Stack>

            <Icon
              cursor="pointer"
              width="26px"
              h="26px"
              viewBox="0 0 16 16"
              fill="none"
              stroke="gray.600"
              _hover={{
                stroke: 'red.500',
              }}
              onClick={cancelUpload}
              // onClick={resetUpload}
            >
              <BinDeleteIcon />
            </Icon>
          </HStack>
          <Progress
            value={completeProgress}
            colorScheme="primary"
            w="100%"
            borderRadius="xl"
          />
        </Stack>
      </Flex>
    </If>
  );
};

export default FileUploadBox;
