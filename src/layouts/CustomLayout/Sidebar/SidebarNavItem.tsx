import React from 'react'
import PropTypes from 'prop-types'
import { Box, Collapse, Flex, Icon, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import Dashboard from 'assets/icons/sidebar/Dashboard'
import { SideBarItem } from 'types'
import { activeMenu } from 'utils/activeMenu'
import If from 'common/If'

const SidebarNavItem = ({ item } :{ item: SideBarItem }) => {
    const { isOpen , onToggle } = useDisclosure();
    const  location = useLocation()
    return (
        <Link to={item?.href ?? "#" } >
            <Flex justifyContent="space-between" pe="20px" >
                <Flex gap="15px"    alignItems="stretch"  >
                    <Box 
                        bg={
                        activeMenu(item.activeKey ,location.pathname ) ?
                        "sidebar.active.identifier"
                        : "sidebar.notActive.identifier"
                        }
                        w="10px"
                        // h="100%"
                        borderTopRightRadius="16px"
                        borderBottomRightRadius="16px"
                    >

                    </Box>
                    <Icon 
                        alignSelf="center" 
                        fill={
                            activeMenu(item.activeKey ,location.pathname ) ?
                            "sidebar.active.iconFill":
                            "sidebar.notActive.iconFill"
                        }
                        stroke={
                            activeMenu(item.activeKey ,location.pathname ) ?
                            "sidebar.active.iconStroke":
                            "sidebar.notActive.iconStroke"
                        }
                        w="20px" 
                        h="20px" >
                    
                        {item.icon && <item.icon />}
                    </Icon>
                    <Text color={ 
                        activeMenu(item.activeKey ,location.pathname ) ?
                        "sidebar.active.text":
                        "sidebar.notActive.text"
                    } 
                    fontSize="16px"  py="5px"  textTransform="capitalize" >
                        {item?.label}
                    </Text>
                </Flex>
                
                <If condition={(item?.children?.length ?? 0 ) >  0 } >
                        <Icon
                            alignSelf="center"
                            justifySelf={"flex-end"}
                            width="12px" height="8px"
                            viewBox="0 0 12 8"
                            onClick={onToggle}
                        >
                            <svg    fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0833 1.9585L5.99999 6.04183L1.91666 1.9585" stroke="#6F7181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </Icon>

                </If>
            </Flex>
            <Collapse in={isOpen} >
                <Stack ps="60px" spacing="2px" py="5px"  >
                    {item?.children?.map((item:any , key: any)=>(
                        <Link to={item?.href ?? "#" } >
                            <Text color={ 
                                activeMenu(item.activeKey ,location.pathname ) ?
                                "sidebar.active.text":
                                "sidebar.notActive.text"
                            } 
                            fontSize="16px"  py="5px"  textTransform="capitalize" >
                                {item?.label}
                            </Text>

                        </Link>
                    ))}

                </Stack>
            </Collapse>
        </Link>
    )
}


export default SidebarNavItem