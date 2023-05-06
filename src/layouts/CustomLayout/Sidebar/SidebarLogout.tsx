import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import Dashboard from 'assets/icons/sidebar/Dashboard'
import { SideBarItem } from 'types'
import { activeMenu } from 'utils/activeMenu'
import Logout from 'assets/icons/sidebar/Logout'

const SidebarLogout = () => {
    const  location = useLocation()
  return (
    <Link to={"/logout"} >
        <Flex gap="15px"    alignItems="stretch"  >
            <Icon 
                alignSelf="center" 
                    fill={
                    "sidebar.logout.iconFill"
                }
                stroke={
                    "sidebar.logout.iconStroke"
                }
                w="20px" 
                h="20px" >
                <Logout />
            </Icon>
            <Text color={ 
                "sidebar.logout.text"
            } 
            fontSize="16px"  py="5px"  textTransform="capitalize" >
                logout
            </Text>
        </Flex>
    </Link>
  )
}


export default SidebarLogout