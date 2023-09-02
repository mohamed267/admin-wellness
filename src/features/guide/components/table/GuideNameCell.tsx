import { Text } from '@chakra-ui/react';
import { CellProps } from 'types';

const GuideNameCell = ({ value }: CellProps) => {
  return (
    <Text fontSize="14px" lineHeight="21px" color="gray.800" maxW="200px">
      {value}
    </Text>
  );
};

GuideNameCell.propTypes = {};

export default GuideNameCell;
