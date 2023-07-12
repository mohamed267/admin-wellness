import { Center, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SidebarLogo = () => {
  return (
    <Center p={'5'}>
      <Link to="/">
        <Image src="/logo100.png" w="100px" h="60px" />
      </Link>
    </Center>
  );
};

SidebarLogo.propTypes = {};

export default SidebarLogo;
