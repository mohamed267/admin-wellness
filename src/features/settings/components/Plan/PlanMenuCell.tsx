import {
  Icon,
  Menu,
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';

import { TableMenuItem } from 'types';

//icons
import TableMenuIcon from 'assets/icons/table/TableMenuIcon';
import EditPencil from 'assets/icons/table/EditPencil';
import DeleteBinTableIcon from 'assets/icons/table/DeleteBinTableIcon';
// import { useDeleteEvent } from 'features/events/api/deleteEvents';
import { defaultFn } from 'utils/functions';
import { Link } from 'react-router-dom';

const PlanMenuCell = ({ value }: any) => {
  // const { mutate: deleteEvent } = useDeleteEvent();

  const menuItems: TableMenuItem[] = [
    {
      title: 'edit',
      Icon: EditPencil,
      link: `/settings/plans/${value?.id}`,
    },
    {
      title: 'delete',
      Icon: DeleteBinTableIcon,
      onClick: () => {
        // deleteEvent({ eventId: value?.id });
      },
    },
  ];

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Icon fill="primary.500" viewBox="0 0 4 18">
            <TableMenuIcon />
          </Icon>
        </PopoverTrigger>
        <PopoverContent maxW={'fit-content'}>
          <Menu isOpen={true}>
            <MenuList px="10px" py="5px" rowGap="10px">
              {menuItems?.map((item: TableMenuItem, key: any) => (
                <Link key={key} to={item?.link ?? ''} state={item?.state ?? {}}>
                  <MenuItem
                    borderRadius="10px"
                    _hover={{
                      bg: 'gray.300',
                    }}
                    columnGap="20px"
                    py="15px"
                    px="20px"
                    onClick={item?.onClick ?? defaultFn}
                  >
                    <Icon viewBox="0 0 19 20" fill="black.200">
                      <item.Icon />
                    </Icon>
                    <Text
                      _firstLetter={{ textTransform: 'capitalize' }}
                      color="gray.800"
                    >
                      {' '}
                      {item?.title}{' '}
                    </Text>
                  </MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default PlanMenuCell;
