import { Flex, Icon, Text } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import Logout from 'assets/icons/sidebar/Logout'

const SidebarLogout = () => {
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