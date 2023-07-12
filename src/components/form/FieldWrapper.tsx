import React, { ReactNode } from 'react';
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Collapse,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

import { AiOutlineWarning } from 'react-icons/ai';
import { FormattedMessage } from 'react-intl';
type FieldWrapperProps = {
  children: ReactNode;
  styles?: any;
  label?: string;
  error?: FieldError | undefined;
  required?: boolean;
};

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'styles' | 'children'
>;

const FieldWrapper = ({
  children,
  error,
  label,
  required = false,
}: FieldWrapperProps) => {
  const textColor = useColorModeValue('black.700', 'white');
  const brandStars = useColorModeValue('primary.500', 'primary.400');
  return (
    <FormControl
      // mb='24px'
      isInvalid={error?.message !== undefined}
    >
      {label && (
        <FormLabel
          color={textColor}
          mb={'8px'}
          ms={'4px'}
          fontSize="sm"
          fontWeight={'500'}
        >
          <Flex>
            <Text
              _firstLetter={{
                textTransform: 'capitalize',
              }}
            >
              <FormattedMessage id={label} />
            </Text>
            {required && <Text color={brandStars}>*</Text>}
          </Flex>
        </FormLabel>
      )}
      {children}

      <FormErrorMessage
        display="flex"
        // alignItems={"center"}
        justifyContent={'start'}
        fontSize="13px"
        fontWeight="semibold"
        // bg="white"
      >
        <Collapse in={error?.message !== ''}>
          <UnorderedList
            fontSize={'xs'}
            listStyleType="none"
            // px={5}
            // py={3}
            // bg="yellow"
            mx="0"
          >
            <ListItem color="red.500">
              <HStack w="100%" alignItems="center">
                <AiOutlineWarning />

                <Text fontSize={'xs'}>
                  <FormattedMessage id={error?.message} />
                </Text>
              </HStack>
            </ListItem>
          </UnorderedList>
        </Collapse>
      </FormErrorMessage>
    </FormControl>
  );
};

FieldWrapper.propTypes = {};

export default FieldWrapper;
