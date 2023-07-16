import { Badge } from '@chakra-ui/react';

// const colors: any = {
//   active: 'badge.green',
//   pending: 'badge.orange',
// };

type StatusType = {
  value: any;
};

const Status = ({ value }: StatusType) => {
  return (
    <Badge
      textTransform={'capitalize'}
      fontSize="sm"
      fontWeight="700"
      borderRadius="xl"
      // color={'white'}
      textAlign="center"
      px="8px"
      py="3px"
      // bg={colors[value]}
      // variant="subtle"
      colorScheme={'badge.green'}
      // colorScheme={colors[value]}
      // backgroundOpa
    >
      {value}
    </Badge>
  );
};

Status.propTypes = {};

export default Status;
