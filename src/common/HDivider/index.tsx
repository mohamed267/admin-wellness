import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'

type HDividerProps = any

const HDivider = (rest:HDividerProps) => {
  return (
    <Box {...rest} h="100%"/>
  )
}


export default HDivider