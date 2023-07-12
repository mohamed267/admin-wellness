import { useEffect } from 'react';
import { z } from 'zod';
import { Button, HStack, Stack, Text } from '@chakra-ui/react';
import Form from 'components/form/Form';
import InputField from 'components/form/InputField';
import NumberInputFieldComponent from 'components/form/NumberInputField';
import { FormattedMessage } from 'react-intl';

import { useNavigate, useParams } from 'react-router-dom';
import { useCreateCoupon } from 'features/events/api/createCoupon';

const schemaCoupon = z.object({
  promoCode: z.string(),
  percentage: z.number(),
});

type ICouponForm = {
  promoCode: string;
  percentage: number;
};

const CouponForm = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const {
    mutate: createCoupon,
    isLoading: isCreatingCoupon,
    isSuccess: isCouponCreated,
  } = useCreateCoupon();

  useEffect(() => {
    if (isCouponCreated) {
      navigate(`/events/${eventId}/coupons`);
    }
  }, [isCouponCreated, navigate, eventId]);

  const handleCreateCoupon = async (couponData: any) => {
    const { percentage, ...snapData } = couponData;

    const data = {
      ...snapData,
      percentage: percentage / 100,
      eventId,
    };
    createCoupon(data);
  };

  return (
    <Form<ICouponForm, typeof schemaCoupon>
      schema={schemaCoupon}
      onSubmit={handleCreateCoupon}
    >
      {({ register, formState, setValue }) => (
        <Stack spacing="20px">
          <HStack>
            <Stack w="500px" spacing="20px">
              <InputField
                registration={register('promoCode')}
                error={formState.errors['promoCode']}
                label={'promoCode'}
                placeholder=""
                inputStyle={{
                  variant: 'primary',
                  fontSize: 'xs',
                  size: 'lg',
                  fontWeight: 'normal',
                }}
              />

              <NumberInputFieldComponent
                registration={register('percentage')}
                error={formState.errors['percentage']}
                label={'reduction'}
                min={0}
                max={100}
                nonDouble={true}
                placeholder=""
                setValue={setValue}
                inputStyle={{
                  variant: 'primary',
                  fontSize: 'xs',
                  size: 'lg',
                  fontWeight: 'normal',
                }}
              />
            </Stack>
          </HStack>

          <Button
            variant="primaryFill"
            w="150px"
            borderRadius="xl"
            lineHeight="21px"
            fontWeight="500"
            fontSize="18px"
            type="submit"
            isLoading={isCreatingCoupon}
          >
            <Text
              _firstLetter={{
                textTransform: 'capitalize',
              }}
            >
              <FormattedMessage id="add" />
            </Text>
          </Button>
        </Stack>
      )}
    </Form>
  );
};

export default CouponForm;
