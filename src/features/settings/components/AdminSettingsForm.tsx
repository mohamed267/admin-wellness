import { z } from 'zod';
import { Button, Flex, Text, Stack, Box } from '@chakra-ui/react';
import Form from 'components/form/Form';
import InputField from 'components/form/InputField';
import { FormattedMessage } from 'react-intl';
import PhoneNumberInputField from 'components/form/PhoneNumberField';

const schemaAdminSettings = z.object({
  displayName: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  countryCode: z.string(),
  oldPassword: z.string(),
  newPassword: z.string(),
});

type IAdminSettings = {
  displayName: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  oldPassword: string;
  newPassword: string;
};

const AdminSettingsForm = () => {
  const handleChangeAdminSettings = async () => {};

  return (
    <Form<IAdminSettings, typeof schemaAdminSettings>
      schema={schemaAdminSettings}
      onSubmit={handleChangeAdminSettings}
    >
      {({ register, formState, setValue }) => (
        <Stack>
          <Flex gap="10px" flexWrap="wrap" py="10px">
            <InputField
              registration={register('displayName')}
              error={formState.errors['displayName']}
              label={'displayName'}
              wrapperStyles={{
                w: '45%',
              }}
              inputStyle={{
                variant: 'primary',
                fontSize: 'xs',
                // w: '45%',
                size: 'lg',
                fontWeight: 'normal',
              }}
            />
            <InputField
              registration={register('email')}
              error={formState.errors['email']}
              label={'email'}
              wrapperStyles={{
                w: '45%',
              }}
              inputStyle={{
                variant: 'primary',
                fontSize: 'xs',
                // w: '45%',
                size: 'lg',
                fontWeight: 'normal',
              }}
            />
            <Box w="45%">
              <PhoneNumberInputField
                registration={register('phoneNumber')}
                error={formState.errors['phoneNumber']}
                countryCodeName="countryCode"
                name="phone"
                label="phoneNumber"
                setValue={setValue}
                inputStyle={{
                  variant: 'primary',
                  fontSize: 'sm',
                  size: 'lg',
                  fontWeight: 500,
                }}
              />
            </Box>
            <InputField
              registration={register('oldPassword')}
              error={formState.errors['oldPassword']}
              label={'oldPassword'}
              wrapperStyles={{
                w: '45%',
              }}
              type="password"
              inputStyle={{
                variant: 'primary',
                fontSize: 'xs',
                // w: '45%',
                size: 'lg',
                fontWeight: 'normal',
              }}
            />
            <InputField
              registration={register('newPassword')}
              error={formState.errors['newPassword']}
              label={'newPassword'}
              wrapperStyles={{
                w: '45%',
              }}
              type="password"
              inputStyle={{
                variant: 'primary',
                fontSize: 'xs',
                // w: '45%',
                size: 'lg',
                fontWeight: 'normal',
              }}
            />
          </Flex>
          <Button
            variant="primaryFill"
            w="150px"
            borderRadius="xl"
            lineHeight="21px"
            fontWeight="500"
            fontSize="18px"
            type="submit"
          >
            <Text
              _firstLetter={{
                textTransform: 'capitalize',
              }}
            >
              <FormattedMessage id="save" />
            </Text>
          </Button>
        </Stack>
      )}
    </Form>
  );
};

export default AdminSettingsForm;
