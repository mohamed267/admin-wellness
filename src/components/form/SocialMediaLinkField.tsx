import {
  Center,
  Flex,
  IconButton,
  Input,
  InputGroup,
  Stack,
} from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import SocialMediaAccount from 'components/SocialMedia/SocialMediaAccount';
import FieldWrapper, {
  FieldWrapperPassThroughProps,
} from 'components/form/FieldWrapper';
import { SocialMediaUrl } from 'features/guide/types';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';
import { useIntl } from 'react-intl';
import uuid from 'react-uuid';
import { SocialLinks } from 'social-links';
import { getSocialMediaName } from 'utils/functions';

type SocialMediaLinkFieldProps = FieldWrapperPassThroughProps & {
  setValue: any;
  watch: any;
  defaulValue?: SocialMediaUrl[];
  name: string;
  nameDeleted?: string;
};

const socialLinks = new SocialLinks();
const SocialMediaLinkField = ({
  error,
  watch,
  setValue,
  name,
  defaulValue,
  nameDeleted,
}: SocialMediaLinkFieldProps) => {
  const links = watch?.(name) ?? [];
  const deletedLinks = watch?.(nameDeleted) ?? [];
  const urlInputRef = useRef<any>(null);
  const [errors, setError] = useState<{
    type: any;
    link: any;
  }>({
    type: null,
    link: null,
  });
  const intl = useIntl();
  const platforms = [
    { id: 'youtube', name: 'youtube' },
    { id: 'facebook', name: 'faccebook' },
    { id: 'twitter', name: 'twitter' },
    { id: 'linkedin', name: 'linkedin' },
    { id: 'instagram', name: 'instagram' },
  ];

  const handleAddSocialLink = () => {
    let url = urlInputRef?.current?.value;
    if (url.includes('web.')) {
      url = url.replace('web.', '');
    }
    const account = url && socialLinks.detectProfile(url);
    if (account && platforms.some((acc: any) => acc?.id === account)) {
      setValue(name, [
        ...links,
        {
          id: uuid(),
          url,
          name: account,
          isNew: true,
        },
      ]);
      setError({
        type: null,
        link: null,
      });
    } else {
      setError({
        type: null,
        link: {
          message: 'pleaseprovideavalidsociallink',
        },
      });
    }
  };

  const handleChangeTypeMedia = () => {};

  const deleteLink = (deletedLink: any) => {
    const snapLinks = links.filter((link: any) => {
      return link?.id !== deletedLink?.id;
    });

    setValue?.(name, snapLinks);
    if (!deletedLink.isNew) {
      nameDeleted && setValue(nameDeleted, [...deletedLinks, deletedLink]);
    }
  };

  useEffect(() => {
    if (defaulValue) {
      setValue(name, defaulValue);
    }
  }, []);

  return (
    <FieldWrapper error={error}>
      <Stack>
        <Flex gap="10px" alignItems="center">
          <FieldWrapper error={errors?.type} label="">
            <Select
              onChange={handleChangeTypeMedia}
              isInvalid={errors?.type ? true : false}
              options={platforms ?? []}
              focusBorderColor="primary.500"
              selectedOptionColorScheme="primary"
              //   defaultValue={defaultValue}
              getOptionValue={(cell: any) => cell['id']}
              getOptionLabel={(cell: any) => cell['name']}
              placeholder={intl.formatMessage({
                id: 'accountType',
              })}
              chakraStyles={{
                control: (provided: any) => ({
                  ...provided,
                  bg: 'white',
                  h: '45px',
                }),
                placeholder: (provided: any) => ({
                  ...provided,
                  color: 'gray.500',
                  _firstLetter: {
                    textTransform: 'capitalize',
                  },
                }),
                menu: (provider: any) => ({
                  ...provider,
                  zIndex: 10000000,
                }),
              }}
            />
          </FieldWrapper>
          <FieldWrapper error={errors?.link} label="">
            <InputGroup>
              <Input
                ref={urlInputRef}
                variant="primary"
                placeholder={intl?.formatMessage({
                  id: 'URL',
                })}
                h="45px"
                borderColor={errors?.link ? 'red.500' : 'auto'}
              />
            </InputGroup>
          </FieldWrapper>
          <IconButton
            aria-label="add intervalle"
            marginTop="auto"
            borderRadius="lg"
            icon={<BiPlus />}
            variant="primaryFill"
            onClick={handleAddSocialLink}
          />
        </Flex>
      </Stack>
      <Flex py={5} gap={3} flexWrap="wrap" maxW={{ base: '100%', md: '500px' }}>
        {links?.map((link: any) => {
          return (
            <SocialMediaAccount
              type={link?.name}
              account={getSocialMediaName(link?.url)}
              key={link?.id ?? uuid()}
            >
              <Center
                bg="red.500"
                position="absolute"
                borderRadius="full"
                top={'-8px'}
                left="-8px"
                fontSize="md"
                p={1}
                onClick={() => deleteLink(link)}
                cursor="pointer"
              >
                <AiOutlineClose fill="#fff" />
              </Center>
            </SocialMediaAccount>

            // <HStack
            //     bg={"gray.200"}
            //     w={"65px"}
            //     p={1}
            //     borderRadius="xl"
            //     justifyContent={"space-between"}
            // >
            //     <Icon cursor={"pointer"} fontSize="lg"
            //         onClick={()=>deleteLink(key)}
            //     >
            //         <AiOutlineClose />
            //     </Icon>
            //     <Icon fontSize={"22px"}  color="primary.500">
            //         {icons[link?.name]}
            //     </Icon>

            // </HStack>
          );
        })}
      </Flex>
    </FieldWrapper>
  );
};

export default SocialMediaLinkField;
