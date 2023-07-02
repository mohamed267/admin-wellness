import React, { Ref, forwardRef, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Input, useToken } from '@chakra-ui/react'

const TableSelectCheckBox = forwardRef(
    ({ indeterminate, ...rest }:any, ref: any) => {

          const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef

  
      return (
        <>
          <Checkbox
            colorScheme='primary'  
            size="lg"
            borderRadius="30px"
            isChecked={rest.checked}   
            ref={resolvedRef} 
            isIndeterminate={indeterminate || false}
            {...rest} 
            variant="primary"
          />
        </>
      )
    }
  )


export default TableSelectCheckBox