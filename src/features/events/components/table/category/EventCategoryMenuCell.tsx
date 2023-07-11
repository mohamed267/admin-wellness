import React, { ReactElement, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Icon, Menu, MenuItem, MenuList, Popover, PopoverBody, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react'


import { TableMenuItem } from 'types'

//icons
import TableMenuIcon from "assets/icons/table/TableMenuIcon"
import EditPencil from 'assets/icons/table/EditPencil'
import DeleteBinTableIcon from 'assets/icons/table/DeleteBinTableIcon'
import  PauseTableIcon from "assets/icons/table/PauseTableIcon"
import CouponsIcon from "assets/icons/event/CouponsIcon"
import StatisticsIcon from "assets/icons/table/StatisticsIcon"
import { useDeleteEvent } from 'features/events/api/deleteEvent'
import { defaultFn } from 'utils/functions'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { deleteCategory, useDeleteCategory } from 'features/events/api/deleteCategory'



const EventCategoryMenuCell = ({value , ...rest}: any) => {
    const navigate  = useNavigate()


    const { mutate: deleteCategory , isSuccess: isDeleted } =  useDeleteCategory()

     
    const menuItems: TableMenuItem[] = [
        {
            title: "edit", 
            Icon: EditPencil ,
            link: `/events/category/${value?.id}`,
        },
        {
            title: "delete", 
            Icon: DeleteBinTableIcon,
            onClick: ()=>{deleteCategory({categoryId: value?.id})}
        }
    ]


    useEffect( ()=>{
        if(isDeleted){
            navigate(0)
        }
    }, [isDeleted])
    
    return (
        <>
            <Popover>
                <PopoverTrigger>
                    <Icon fill="primary.500"  viewBox="0 0 4 18"  >
                        <TableMenuIcon />
                    </Icon>
                </PopoverTrigger>
                <PopoverContent maxW={"fit-content"} >
                    <Menu isOpen={true} >
                        <MenuList  px="10px" py="5px" rowGap="10px" >
                            {
                                menuItems?.map((item:TableMenuItem , key: any)=>(
                                    <Link
                                        key={key}
                                        to={item?.link ?? ""}
                                        state={item?.state ?? {}}
                                    >
                                        <MenuItem 
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
                                                <Text _firstLetter={{textTransform: "capitalize" }} color="gray.800" > {item?.title} </Text>
                                            
                                        </MenuItem>
                                    </Link>
                                ))
                            }
                        
                        </MenuList>
                    </Menu>
                </PopoverContent>
            </Popover>
        </>
    )
}

export default EventCategoryMenuCell