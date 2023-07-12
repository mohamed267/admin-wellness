import { IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import If from 'common/If';
import { BiChevronLeft } from 'react-icons/bi';

type DateProps = {
  value: 'string';
};

const TicketCell = ({ value }: DateProps) => {
  const textColor = useColorModeValue('gray.700', 'white');
  return (
    <Text textTransform={'capitalize'} fontSize="sm" color={textColor}>
      <If condition={value}>
        <IconButton
          aria-label="see commande"
          variant="primaryFill"
          borderRadius="full"
          size="sm"
          icon={<BiChevronLeft />}
        />
      </If>
    </Text>
  );
};

export default TicketCell;
