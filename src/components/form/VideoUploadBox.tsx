import React, { useEffect, useState } from "react";
import {
  IconButton,
  Box,
  Image,
  Center,
  // CircularProgress,
  // CircularProgressLabel,
  Input,
  Stack,
  color,
  Text,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import If from "common/If";
import { useUploadFile } from "features/uploadFiles";

type VideoBoxProps = {
  file: any;
  uploaded?: any;
  name?: string,
  videoType: string
};

const VideoUploadBox = ({ file , videoType , uploaded = ()=>{} , name="file" }: VideoBoxProps) => {
  const [completeProgress, setCompleteProgress] = useState<number>(0);
  const {
    mutate: uploadFile,
    data: fileData,
    isSuccess: isUploaded,
    isLoading: uploading,
    reset: resetUpload,
  } = useUploadFile()



 
  useEffect(() => {
      if (file) {
        const data = new FormData();
        data.append(name, file)
        uploadFile({ data, setCompleteProgress , fileType: videoType });
    }
  }, [file]);

  useEffect(() => {
    if (isUploaded) {
        uploaded(fileData?.file)
    }
  }, [isUploaded]);

  return (
    <If condition={!isUploaded}>
      <Center h="100%">
        <CircularProgress
          value={completeProgress}
          color="primary.500"
          size={"100px"}
        >
          <CircularProgressLabel
            fontSize={"lg"}
          >{`${completeProgress}%`}</CircularProgressLabel>
        </CircularProgress>
      </Center>
    </If>
  );
};

export default VideoUploadBox;
