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
import PauseTableIcon from 'assets/icons/table/PauseTableIcon';
import StatisticsIcon from 'assets/icons/table/StatisticsIcon';
import { useDeleteEvents } from 'features/events/api/deleteEvents';
import CouponsIcon from 'assets/icons/event/CouponsIcon';
import { EventType } from 'features/events/types';
import { Link } from 'react-router-dom';
import { defaultFn } from 'utils/functions';
import { FormattedMessage } from 'react-intl';
import { useActivateEvents } from 'features/events/api/activateEvents';
import { useBanEvents } from 'features/events/api/banEvents';

type EventMenuCellProps = {
  value: { id: string; eventTitle: string; status: EventType };
};

const EventMenuCell = ({ value }: EventMenuCellProps) => {
  const { mutate: deleteEvents } = useDeleteEvents();
  const { mutate: banEvents } = useBanEvents();
  const { mutate: activateEvents } = useActivateEvents();

  const menuItems: TableMenuItem[] = [
    {
      title: 'edit',
      Icon: EditPencil,
      link: `/events/${value?.id}`,
    },
    {
      title: 'delete',
      Icon: DeleteBinTableIcon,
      onClick: () => {
        deleteEvents([value?.id]);
      },
    },
    {
      title: value.status === 'pending' ? 'activate' : 'pause',
      Icon: PauseTableIcon,
      onClick: () => {
        if (value?.status === 'pending') {
          activateEvents([value?.id]);
        } else {
          banEvents([value?.id]);
        }
      },
    },
    {
      title: 'coupons',
      Icon: CouponsIcon,
      link: `/events/${value?.id}/coupons`,
      state: {
        eventTitle: value?.eventTitle,
      },
    },
    {
      title: 'statitics',
      Icon: StatisticsIcon,
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
                      <FormattedMessage id={item?.title} />{' '}
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

export default EventMenuCell;
