import { Flex, Icon, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Logout from 'assets/icons/sidebar/Logout'
import { useLogout } from 'lib/auth'

const SidebarLogout = () => {
    const { mutate: logout } = useLogout()
    return (
        // <Link to={"/logout"} >
            <Flex  onClick={logout} cursor="pointer" gap="15px"    alignItems="stretch"  >
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
        // </Link>   
    )
}


export default SidebarLogout