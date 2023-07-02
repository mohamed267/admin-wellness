import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { Icon, Menu, MenuItem, MenuList, Popover, PopoverBody, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react'


import { TableMenuItem } from 'types'

//icons
import ConsultIcon from "assets/icons/table/ConsultIcon"
import EditPencil from 'assets/icons/table/EditPencil'
import DeleteBinTableIcon from 'assets/icons/table/DeleteBinTableIcon'
import  PauseTableIcon from "assets/icons/table/PauseTableIcon"
import CouponsIcon from "assets/icons/event/CouponsIcon"
import StatisticsIcon from "assets/icons/table/StatisticsIcon"
import { useDeleteEvent } from 'features/events/api/deleteEvent'
import { defaultFn } from 'utils/functions'



const EventMenuCell = ({value}: any) => {


    const { mutate: deleteEvent } =  useDeleteEvent()
     


    const menuItems: TableMenuItem[] = [
        {
            title: "Edit", 
            Icon: EditPencil 
        },
        {
            title: "Delete", 
            Icon: DeleteBinTableIcon,
            onClick: ()=>{deleteEvent({eventId: value})}
        },
        {
            title: "Pause", 
            Icon:PauseTableIcon
        },
        {
            title: "Coupons", 
            Icon: CouponsIcon
        },
        {
            title: "Statitics", 
            Icon:StatisticsIcon
        }
    ]
    
    return (
        <>
            {value}
            <Popover>
                <PopoverTrigger>
                    <Icon fill="primary.500"  viewBox="0 0 4 18"  >
                        <ConsultIcon />
                    </Icon>
                </PopoverTrigger>
                <PopoverContent maxW={"fit-content"} >
                    <Menu isOpen={true} >
                        <MenuList  px="10px" py="5px" rowGap="10px" >
                            {
                                menuItems?.map((item:TableMenuItem , key: any)=>(
                                    <MenuItem 
                                        key={key}
                                        borderRadius="10px"
                                        _hover={{
                                            bg: "gray.300"
                                        }}
                                        columnGap="20px"
                                        py='15px'
                                        px="20px"
                                        onClick={item?.onClick ?? defaultFn}
                                    >
                                        <Icon viewBox="0 0 19 20" fill="black.200" >
                                            <item.Icon />
                                        </Icon>
                                        <Text color="gray.800" > {item?.title} </Text>
                                    </MenuItem>
                                ))
                            }
                        
                        </MenuList>
                    </Menu>
                </PopoverContent>
            </Popover>
        </>
    )
}

export default EventMenuCell