import { List, ListItem, Text } from '@chakra-ui/react';
import { PlanPermission } from 'features/settings/types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { CellProps } from 'types';

const PlanPermissionCell = ({ value }: CellProps) => {
  return (
    <List>
      {value?.map((permission: PlanPermission) => (
        <ListItem listStyleType="disc" key={permission?.id}>
          <Text fontSize="14px" lineHeight="21px" color="gray.800" maxW="200px">
            <FormattedMessage id={permission?.name} />
          </Text>
        </ListItem>
      ))}
    </List>
  );
};

export default PlanPermissionCell;
