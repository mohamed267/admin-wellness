import { z } from 'zod';
import { Button, Flex, Text, Stack, Box } from '@chakra-ui/react';
import Form from 'components/form/Form';
import InputField from 'components/form/InputField';
import { FormattedMessage, useIntl } from 'react-intl';
import SelectField from 'components/form/SelectField';
import NumberInputFieldComponent from 'components/form/NumberInputField';
import { useCreatePlan } from 'features/settings/apis/createSubscriptionPlan';
import { PlanPermission } from 'features/settings/types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const schemaPlan = z.object({
  title: z.string(),
  permissions: z.any(),
  forPartener: z.any(),
  price: z.string(),
});

type IPlan = {
  title: string;
  permissions: any;
  forPartener: any;
  price: string;
};

const AddPlanForm = () => {
  const navigate = useNavigate();
  const intl = useIntl();
  const { mutate: createPlan, isSuccess: isPlanCreated } = useCreatePlan();
  const handleCreatePlan = async (planData: IPlan) => {
    const { title, permissions, forPartener, price } = planData;
    console.log('our planData are  ', planData);
    createPlan({
      price: Number(price),
      forPartener: forPartener?.id ?? '',
      permissions: permissions?.map(
        (permission: PlanPermission) => permission.id,
      ),
      title: title,
    });
  };

  const permissionOptions = [
    {
      id: 'activate_discount_event_with_loyalty_point',
      name: intl.formatMessage({
        id: 'activate_discount_event_with_loyalty_point',
      }),
    },
    {
      id: 'activate_loyalty_program',
      name: intl.formatMessage({ id: 'activate_loyalty_program' }),
    },
    {
      id: 'limited_products',
      name: intl.formatMessage({ id: 'limited_products' }),
    },
    { id: 'subscription', name: intl.formatMessage({ id: 'subscription' }) },
    {
      id: 'unlimited_products',
      name: intl.formatMessage({ id: 'unlimited_products' }),
    },
    { id: 'free', name: intl.formatMessage({ id: 'free' }) },
  ];

  const partnerOptions = [
    {
      id: 'seller',
      name: intl.formatMessage({
        id: 'seller',
      }),
    },
    { id: 'organizer', name: intl.formatMessage({ id: 'organizer' }) },
  ];

  useEffect(() => {
    if (isPlanCreated) {
      navigate({
        pathname: '/settings',
      });
    }
  }, [isPlanCreated]);

  return (
    <Form<IPlan, typeof schemaPlan>
      schema={schemaPlan}
      onSubmit={handleCreatePlan}
    >
      {({ register, formState, setValue }) => (
        <Stack>
          <Flex gap="10px" flexWrap="wrap" py="10px">
            <InputField
              registration={register('title')}
              error={formState.errors['title']}
              label={'planTitle'}
              wrapperStyles={{
                w: '30%',
              }}
              inputStyle={{
                variant: 'primary',
                fontSize: 'xs',
                // w: '45%',
                size: 'lg',
                fontWeight: 'normal',
              }}
            />
            <Box w="30%">
              <SelectField
                registration={register('forPartener')}
                label={'partner'}
                controlStyles={{
                  bg: 'white',
                  minH: '3rem',
                  borderRadius: 'xl',
                }}
                options={partnerOptions}
                setValue={setValue}
                name="forPartener"
                optionLabel="name"
                optionValue="id"
                placeholder={intl.formatMessage({ id: 'partner' })}
              />
            </Box>
            <Box w="30%">
              <NumberInputFieldComponent
                registration={register('price')}
                error={formState.errors['price']}
                label={'pricing'}
                wrapperStyles={{
                  w: '50%',
                }}
                setValue={setValue}
                name="price"
                inputStyle={{
                  variant: 'primary',
                  fontSize: 'xs',
                  // w: '45%',
                  size: 'lg',
                  fontWeight: 'normal',
                }}
              />
            </Box>

            <Box w="50%">
              <SelectField
                registration={register('permissions')}
                label={'permissions'}
                controlStyles={{
                  bg: 'white',
                  minH: '3rem',
                  borderRadius: 'xl',
                }}
                options={permissionOptions}
                setValue={setValue}
                name="permissions"
                optionLabel="name"
                optionValue="id"
                isMulti={true}
                placeholder={intl.formatMessage({ id: 'permissions' })}
              />
            </Box>
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

export default AddPlanForm;
