import { HStack, Text, VStack } from '@chakra-ui/react';
import { GuideListEntity } from 'features/guide/types';
import React from 'react';

type ExpendedGuideRowProps = {
  row: GuideListEntity;
};
const ExpendedGuideRow = ({}: ExpendedGuideRowProps) => {
  return (
    <HStack>
      <VStack>
        <Text>linkes</Text>
        <Text>here</Text>
      </VStack>
    </HStack>
  );
};

export default ExpendedGuideRow;
