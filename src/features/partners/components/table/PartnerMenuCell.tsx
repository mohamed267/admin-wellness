
import { Icon, Menu, MenuItem, MenuList, Popover, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react'


//types
import { TableMenuItem } from 'types'

//api
import { useDeletePartner } from 'features/partners/api/deletePartner'


// icons
import DeleteBinTableIcon from 'assets/icons/table/DeleteBinTableIcon'
import TableMenuIcon from "assets/icons/table/TableMenuIcon"
import BanIcon from 'assets/icons/table/BanIcon'


//utils
import { defaultFn } from 'utils/functions'
import ConsultIcon from 'assets/icons/table/ConsultIcon'



const PartnerMenuCell = ({value}: any) => {


    const { mutate: deletePartner } =  useDeletePartner()
     


    const menuItems: TableMenuItem[] = [
        {
            title: "consult", 
            Icon: ConsultIcon 
        },
        {
            title: "delete", 
            Icon: DeleteBinTableIcon,
            onClick: ()=>{deletePartner({partnerId: value})}
        },
        {
            title: "ban", 
            Icon: BanIcon
        },
      
    ]
    
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
                                        <Text  _firstLetter={{textTransform: "capitalize"}} color="gray.800" > {item?.title} </Text>
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

export default PartnerMenuCell