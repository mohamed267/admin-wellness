import React, {  PropsWithChildren } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@chakra-ui/react'

const DefaultButton = ({ children , ...props }: any) => {
  return (
    <Button
        _firstLetter={{
            textTransform: "capitalize"
        }} 
        {...props} 
    >
    {children}    
    </Button>
  )
}

DefaultButton.propTypes = {}

export default DefaultButton