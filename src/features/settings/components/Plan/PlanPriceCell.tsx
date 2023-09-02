import { Text } from '@chakra-ui/react';
import { FormattedMessage, useIntl } from 'react-intl';
import { CellProps } from 'types';

const PlanPriceCell = ({ value }: CellProps) => {
  const intl = useIntl();
  return (
    <Text fontSize="14px" lineHeight="21px" color="gray.800" maxW="200px">
      <FormattedMessage
        id="priceFormat"
        values={{ price: value, currency: intl.formatMessage({ id: 'SAR' }) }}
      />
    </Text>
  );
};

export default PlanPriceCell;
