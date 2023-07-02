import React, { Ref, forwardRef, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Input, useToken } from '@chakra-ui/react'

const TableSelctCheckbox = forwardRef(
    ({ indeterminate, ...rest }:any, ref: any) => {

        const [ primary ] = useToken( 'colors', ["primary.500"])

          const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef

  
      React.useEffect(() => {
        if(resolvedRef?.current){
            // resolvedRef.current.indeterminate = indeterminate
        }
      }, [resolvedRef, indeterminate])
  
      return (
        <>
          <Checkbox
            colorScheme='primary'  
            size="lg"
            // bg="red"
            
            // borderColor="red"
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


export default TableSelctCheckbox