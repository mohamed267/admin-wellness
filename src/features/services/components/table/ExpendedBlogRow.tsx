import { HStack, Text, VStack } from '@chakra-ui/react';
import { BlogListEntity } from 'features/services/types';
import React from 'react';

type ExpendedBlogRowProps = {
  row: BlogListEntity;
};
const ExpendedBlogRow = ({}: ExpendedBlogRowProps) => {
  return (
    <HStack>
      <VStack>
        <Text>linkes</Text>
        <Text>here</Text>
      </VStack>
    </HStack>
  );
};

export default ExpendedBlogRow;
