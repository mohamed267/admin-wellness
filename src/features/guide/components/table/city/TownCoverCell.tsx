import { Image } from '@chakra-ui/react';
import { CellProps } from 'types';

const TownCoverCell = ({ value }: CellProps) => {
  return <Image src={value ?? ''} borderRadius="xl" width="50px" h="50px" />;
};

export default TownCoverCell;
