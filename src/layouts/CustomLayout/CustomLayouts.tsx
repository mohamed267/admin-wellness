import { Box, HStack, Icon, Text, Stack } from '@chakra-ui/react';

//component
import SidebarContent from './Sidebar/SidebarContent';
import { Outlet } from 'react-router-dom';
import SearchBar from 'components/SearchBar';
import Sec from 'assets/icons/navbar/Sec';

const CustomLayouts = () => {
  return (
    <Box>
      <SidebarContent />
      <Box
        marginLeft={{
          base: 0,
          md: '250px',
        }}
      >
        <Stack px="30px" py="30px" spacing="30px">
          <HStack justifyContent="space-between">
            <SearchBar width={'600px'} placeholder="Search" />

            <HStack bg="white" borderRadius="3xl" px="20px" py="8px" h="100%">
              <Icon fill="primary.500" w="24px" h="24px">
                <Sec />
              </Icon>
              <Text fontSize="16px" color="gray.900">
                zaydi abda9A
              </Text>
            </HStack>
          </HStack>
          <Outlet />
        </Stack>
      </Box>
    </Box>
  );
};

export default CustomLayouts;
