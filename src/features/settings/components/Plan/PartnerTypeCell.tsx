import { Text } from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';
import { CellProps } from 'types';

const PartnerTypeCell = ({ value }: CellProps) => {
  return (
    <Text fontSize="14px" lineHeight="21px" color="gray.800" maxW="200px">
      <FormattedMessage id={value} />
    </Text>
  );
};

export default PartnerTypeCell;
