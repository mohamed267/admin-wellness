import { Text } from '@chakra-ui/react';

type CellProps = {
  value: string;
};

const Cell = ({ value }: CellProps) => {
  return (
    <Text
      // textTransform={"capitalize"}
      fontSize="sm"
      px={2}
      color="secondaryBlack.400"
    >
      {value}
    </Text>
  );
};

export default Cell;
