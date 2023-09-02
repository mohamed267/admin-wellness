import {
  Box,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';
import TimeCalendarIcon from 'assets/icons/global/TimeCalendarIcon';
import Switcher from 'common/Switcher';
import FieldWrapper from 'components/form/FieldWrapper';
import moment from 'moment';
import uuid from 'react-uuid';
import TimeIntervalShow from './TimeIntervalShow';
import { defaultFn } from 'utils/functions';

type TimePeriodProps = {
  period: {
    id: string;
    endsIn: string;
    beginsIn: string;
    timingIntervalls: any[];
  };
  setValue: any;
  selectedPeriodName: string;
  selectedIntervalsName: string;
  periodsName: string;
  watch: any;
};

const TimePeriod = ({
  period,
  setValue,
  selectedPeriodName,
  selectedIntervalsName,
  periodsName,
  watch,
}: TimePeriodProps) => {
  const periods = watch(periodsName) ?? [];
  const handleSelectPeriod = () => {
    setValue(selectedPeriodName, period);
    setValue(selectedIntervalsName, period?.timingIntervalls);
    setValue(
      periodsName,
      periods?.filter((itemPeriod: any) => itemPeriod?.id !== period?.id),
    );
  };

  return (
    <Flex key={period?.id ?? uuid()} gap="20px">
      <Box w="300px">
        <FieldWrapper label="period">
          <InputGroup variant="primary">
            <Switcher Left={InputRightElement} Right={InputLeftElement}>
              <Icon onClick={handleSelectPeriod} stroke="black">
                <TimeCalendarIcon />
              </Icon>
            </Switcher>
            <Input
              pr="40px"
              value={`${moment(period?.beginsIn).format(
                'MMMM DD',
              )}  -  ${moment(period?.endsIn).format('MMMM DD')}`}
            />
          </InputGroup>
        </FieldWrapper>
      </Box>
      <Stack spacing="10px" mt="30px">
        {period?.timingIntervalls.map((interval: any) => {
          return (
            <>
              <TimeIntervalShow
                defaultInterval={interval}
                key={interval?.id ?? uuid()}
                onDelete={defaultFn}
                onEditInterval={defaultFn}
              />
            </>
          );
        })}
      </Stack>
    </Flex>
  );
};

export default TimePeriod;
