import React, { PropsWithChildren } from 'react'
import PropTypes from 'prop-types'
import { Box, Center, Stack } from '@chakra-ui/react'
import SidebarLogo from './SidebarLogo'
import SidebarNavItem from './SidebarNavItem'
import { SIDEBAR_ITEMS } from '../variables/SIDEBAR_ITEMS'
import { SideBarItem } from 'types'
import { activeMenu } from 'utils/activeMenu'
import SidebarLogout from './SidebarLogout'

const SidebarContent = () => {
  return (
    <Stack
        w={{
            base: "full",
            md: "250px"
        }}
        h="100vh"
        bg="white"
        pos="fixed"
        boxShadow="md"
    >
        <SidebarLogo />
        <Stack 
            justifyContent="space-between"
            flexGrow="1"
        >
            <Stack spacing="10px" >
                {
                    SIDEBAR_ITEMS.map((item:SideBarItem, key: any)=>(
                        <SidebarNavItem
                            key={key}
                            item={item}
                        />
                    ))
                }
            </Stack>


            <Box py="15px" px="35px" >
                <SidebarLogout/>
            </Box>


        </Stack>

        
    </Stack>
  )
}


export default SidebarContent