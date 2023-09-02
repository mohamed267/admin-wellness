import { Image, Stack } from '@chakra-ui/react';
import { CellProps } from 'types';

const GuideCategoryImageCell = ({ value }: CellProps) => {
  return (
    <Stack>
      <Image src={value} width="50px" h="50px" />;
    </Stack>
  );
};

export default GuideCategoryImageCell;
