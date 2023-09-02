/* eslint-disable @typescript-eslint/no-unused-vars */
import { Stack, Text, useToken, Button } from '@chakra-ui/react';

import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'assets/css/CalendarRange.css';
import { FormattedMessage } from 'react-intl';
import uuid from 'react-uuid';
import { useEffect } from 'react';

type CalendarRangeProps = {
  setValue: any;
  name: string;
  watch: any;
  defaultValue?: any;
  selectedIntervalsName: string;
  periodsName: string;
};

const CalendarRange = ({
  setValue,
  watch,
  name,
  selectedIntervalsName,
  periodsName,
  defaultValue = {
    id: uuid(),
    beginsIn: new Date(),
    endsIn: new Date(),
    key: 'selection',
    timingIntervalls: [],
  },
}: CalendarRangeProps) => {
  const [primary500] = useToken('colors', ['primary.500']);
  const period = watch?.(name);
  const selectedIntervals = watch?.(selectedIntervalsName) ?? [];
  const periods = watch?.(periodsName) ?? [];

  const handleChangeRange = (range: any) => {
    if (name) {
      const newRange = {
        beginsIn: range?.selection?.startDate,
        endsIn: range?.selection?.endDate,
        key: range?.selection?.key,
      };
      setValue?.(name, { ...period, ...newRange });
    }
  };

  useEffect(() => {
    if (name) {
      setValue?.(name, defaultValue);
    }
  }, []);

  const handleAddPeriod = () => {
    console.log('our periods are  ', periodsName, [
      ...periods,
      {
        ...period,
        timingIntervalls: selectedIntervals,
      },
    ]);
    setValue(periodsName, [
      ...periods,
      {
        ...period,
        timingIntervalls: selectedIntervals,
      },
    ]);

    setValue(selectedIntervalsName, []);
    setValue(name, {
      beginsIn: new Date(),
      endIn: new Date(),
      key: 'selection',
    });
  };

  return (
    <Stack>
      <DateRangePicker
        ranges={[
          {
            startDate: period?.beginsIn ?? new Date(),
            endDate: period?.endsIn ?? new Date(),
            key: period?.key ?? 'selection',
          },
        ]}
        onChange={handleChangeRange}
        rangeColors={[primary500]}
        color={primary500}
      />
      <Button variant="primaryFill" maxW="200px" onClick={handleAddPeriod}>
        <Text
          _firstLetter={{
            textTransform: 'capitalize',
          }}
          fontSize="sm"
        >
          <FormattedMessage id="addPeriod" />
        </Text>
      </Button>
    </Stack>
  );
};

export default CalendarRange;
