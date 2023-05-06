import { Button, useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { PropsWithChildren, useState } from 'react'

type HCollapseProps = {
  width: number | string,
  isOpen: boolean,
  style?: any,
  hiddenWidth: number | string,
  [rest:string]: any,
  // disclosure: any
}

const HCollapse = ({width, children , 
  isOpen, 
  hiddenWidth,
  style={},
  ...rest
  // disclosure 
}: PropsWithChildren<HCollapseProps>) =>{
  
  return (
    <motion.div
      {...rest}
      animate={{ 
        width: isOpen ? width : hiddenWidth ,
        opacity: isOpen ?  1 : 0
      }}
      style={style}
    >
      {children}
    </motion.div>
    
  )
}

export default HCollapse