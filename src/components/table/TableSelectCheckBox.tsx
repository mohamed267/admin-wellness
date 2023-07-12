import React, { forwardRef } from 'react';
import { Checkbox } from '@chakra-ui/react';

const TableSelectCheckBox = forwardRef(
  ({ indeterminate, ...rest }: any, ref: any) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    return (
      <>
        <Checkbox
          colorScheme="primary"
          size="lg"
          borderRadius="30px"
          isChecked={rest.checked}
          ref={resolvedRef}
          isIndeterminate={indeterminate || false}
          {...rest}
          variant="primary"
        />
      </>
    );
  },
);

export default TableSelectCheckBox;
