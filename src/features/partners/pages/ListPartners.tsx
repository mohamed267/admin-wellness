import { useState } from 'react';
import {
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import CustomBreadcrumb from 'components/CustomBreadcrumb/CustomBreadcrumb';
import { usePartners } from '../api/getPartners';
import TableComponent from 'components/table/Table';
import { Partner } from '../types';
import { partnersColumns } from '../variables/table';
import ChevronDown from 'assets/icons/chevrons/ChevronDown';

type ListPartnersProps = {
  type?: 'seller' | 'organizer';
};

const ListPartners = ({ type = 'organizer' }: ListPartnersProps) => {
  const [pageIndex, setPageIndex] = useState(1);
  const { data: partners } = usePartners({
    query: {
      filterBy: type,
    },
  });

  const breadItems = [
    {
      name: <FormattedMessage id="users" />,
    },
    {
      name: <FormattedMessage id="partners" />,
    },
  ];

  return (
    <Stack py="15px" spacing="10px">
      <HStack justifyContent="space-between">
        <CustomBreadcrumb items={breadItems} />
        <HStack>
          <Menu>
            <MenuButton
              //  color="primary.500"
              minW="150px"
              borderRadius="31px"
              fontSize="14px"
              py="5px"
              bg="white"
              fontWeight="500"
              h="31px"
              px="20px"
              justifyContent="space-between"
              as={Button}
              variant="whiteFill"
              rightIcon={
                <Icon fill="none" viewBox="0 0 12 8" stroke="gray.500">
                  {' '}
                  <ChevronDown />{' '}
                </Icon>
              }
            >
              <Text
                _firstLetter={{ textTransform: 'capitalize' }}
                textAlign="start"
              >
                <FormattedMessage id={type} />
              </Text>
            </MenuButton>

            <MenuList borderRadius="xl">
              <Link to="/users/partners/organizers">
                <MenuItem>
                  <FormattedMessage id="eventOrganizer" />
                </MenuItem>
              </Link>
              <Link to="/users/partners/sellers">
                <MenuItem>
                  <FormattedMessage id="seller" />
                </MenuItem>
              </Link>
            </MenuList>

            {/* <Link to="/events/city/new">
                <Button 
                 < color="primary.500"
                  borderRadius="31px"
                  fontSize="14px" 
                  py="5px" 
                  bg="white"
                  fontWeight="500"
                  h="31px">
                  iconSpacing="5px"
                  leftIcon={<Icon viewBox="0 0 17 15" width="17" height="15" fill="primary.500" >
                  <AddCityIcon />
                </Icon>}
                >
                  <Text               
                    _firstLetter={
                      {
                        textTransform: "capitalize"
                      }
                    }
                    fontSize="14px"
                  >
                    <FormattedMessage  id="newCity" />
                  </Text>
                </Button>
            </Link> */}
          </Menu>
        </HStack>
      </HStack>
      <TableComponent<Partner>
        name="events"
        // name="users"
        // selectRow={navigateOrderDetails}
        data={partners?.partners ?? []}
        tableColumns={partnersColumns}
        setPageIndex={setPageIndex}
        pageIndex={pageIndex}
        pageCount={partners?.meta?.totalPages ?? 1}
        //
        // searching={setSearch}
        // detailsIcon={true}
      />
    </Stack>
  );
};

ListPartners.propTypes = {};

export default ListPartners;
