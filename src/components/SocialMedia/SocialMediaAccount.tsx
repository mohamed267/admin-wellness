import { PropsWithChildren } from 'react';
import { HStack, Text, Icon } from '@chakra-ui/react';
//icons
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import YoutubeIcon from 'assets/icons/socialLinks/YoutubeIcon';
import FacebookIcon from 'assets/icons/socialLinks/FacebookIcon';
import TwitterIcon from 'assets/icons/socialLinks/TwitterIcon';

const icons: any = {
  facebook: <FacebookIcon />,
  youtube: <YoutubeIcon />,
  twitter: <TwitterIcon />,
  linkedin: <AiFillLinkedin />,
  instagram: <AiOutlineInstagram />,
};

// const icons:any = {
//     facebook: <FiFacebook /> ,
//     youtube: <AiOutlineYoutube /> ,
//     linkedin: <AiFillLinkedin /> ,
// }

type SocialMediaAccountProps = {
  type: string;
  account: string;
};

// we are providing a color of each account on the theme

const SocialMediaAccount = ({
  account,
  type,
  children,
}: PropsWithChildren<SocialMediaAccountProps>) => {
  return (
    <HStack
      position={'relative'}
      boxShadow="1px 1px 4px 0px #e2e2e2"
      bg="white"
      p={3}
      borderRadius="xl"
      spacing={3}
    >
      <Icon color={type} fontSize={{ base: 'lg', md: '2xl' }}>
        {icons[type]}
      </Icon>
      <Text fontWeight="bold" fontSize={{ base: 'sm', md: 'md' }}>
        {account}
      </Text>
      {children}
    </HStack>
  );
};

export default SocialMediaAccount;
