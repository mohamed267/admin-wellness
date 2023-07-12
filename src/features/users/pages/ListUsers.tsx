import {
  Breadcrumb,
  BreadcrumbItem,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import TableComponent from 'components/table/Table';
import { Link } from 'react-router-dom';
import { User } from '../types';

import { usersColumns } from '../variables/table';
import { useUsers } from '../api/getUsers';
import { useEffect } from 'react';

const ListUsers = () => {
  const { data: usersData } = useUsers({});

  useEffect(() => {
    console.log('user dat => ', usersData);
  }, [usersData]);

  return (
    <Stack py="15px">
      <Breadcrumb>
        <BreadcrumbItem color="primary.500">
          <Link to="/users">Users</Link>
        </BreadcrumbItem>
      </Breadcrumb>

      <Stack bg="white" borderRadius="xl" spacing={0}>
        <HStack px="16px" py="16px">
          <Text fontSize="14px" color="gray.600">
            {' '}
            1 row selected{' '}
          </Text>
        </HStack>
        <TableComponent<User>
          name="users"
          // selectRow={navigateOrderDetails}
          data={usersData?.users ?? []}
          tableColumns={usersColumns}
          setPageIndex={() => {}}
          pageIndex={1}
          pageCount={10}
          // searching={setSearch}
          // detailsIcon={true}
        />
      </Stack>
    </Stack>
  );
};

export default ListUsers;
