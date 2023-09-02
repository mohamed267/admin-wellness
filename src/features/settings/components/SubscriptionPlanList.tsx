import { Button, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import PlanIcon from 'assets/icons/plan/PlanIcon';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { useSubcriptionPlans } from '../apis/getSubscriptionPlans';
import TableComponent from 'components/table/Table';
import { subscriptionPlansColumns } from '../variables/table';
import { SubscriptionPlan } from '../types';

const SubscriptionPlansList = () => {
  const { data: subscriptionPlansData } = useSubcriptionPlans({});
  return (
    <Stack>
      <HStack justifyContent="space-between">
        <Text
          color="primary.500"
          fontSize="md"
          _firstLetter={{
            textTransform: 'capitalize',
          }}
        >
          <FormattedMessage id="subscriptionPlans" />
        </Text>
        <Link to="/settings/plans/new">
          <Button
            variant="primaryFill"
            borderRadius="31px"
            fontSize="14px"
            py="5px"
            fontWeight="500"
            h="31px"
            iconSpacing="5px"
            leftIcon={
              <Icon viewBox="0 0 17 15" width="17" height="15">
                <PlanIcon />
              </Icon>
            }
          >
            <Text
              _firstLetter={{
                textTransform: 'capitalize',
              }}
              fontSize="14px"
            >
              <FormattedMessage id="addPlan" />
            </Text>
          </Button>
        </Link>
      </HStack>
      <TableComponent<SubscriptionPlan>
        name="subscriptionPlans"
        // selectRow={navigateOrderDetails}
        data={subscriptionPlansData?.plans ?? []}
        tableColumns={subscriptionPlansColumns}
        pageIndex={1}
        pageCount={10}
        // searching={setSearch}
        // detailsIcon={true}
      />
    </Stack>
  );
};

export default SubscriptionPlansList;
