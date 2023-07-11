import React, { ReactElement, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Icon, Menu, MenuItem, MenuList, Popover, PopoverBody, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react'


import { TableMenuItem } from 'types'

//icons
import TableMenuIcon from "assets/icons/table/TableMenuIcon"
import EditPencil from 'assets/icons/table/EditPencil'
import DeleteBinTableIcon from 'assets/icons/table/DeleteBinTableIcon'
import { defaultFn } from 'utils/functions'
import { Link, useNavigate } from 'react-router-dom'
import {  useDeleteTown } from 'features/events/api/deleteTown'



const EventTownMenuCell = ({value , ...rest}: any) => {
    const navigate  = useNavigate()


    const { mutate: deleteTown , isSuccess: isDeleted } =  useDeleteTown()

     
    const menuItems: TableMenuItem[] = [
        {
            title: "edit", 
            Icon: EditPencil 
        },
        {
            title: "delete", 
            Icon: DeleteBinTableIcon,
            onClick: ()=>{deleteTown({townId: value?.id})}
        }
    ]


    useEffect( ()=>{
        if(isDeleted){
            navigate(0)
        }
    }, [isDeleted, navigate])
    
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

export default EventTownMenuCell