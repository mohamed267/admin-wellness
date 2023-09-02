import { Stack } from '@chakra-ui/react';
import { defaultFn } from 'utils/functions';

import TimePeriod from './TimePeriod';
import { EventTimesPeriod } from 'features/events/types';
import { useEffect } from 'react';

type TimePeriodsProps = {
  setValue?: any;
  watch?: any;
  name?: string;
  selectedPeriodName: string;
  selectedIntervalsName: string;
  defaultValue?: EventTimesPeriod[];
};

const TimePeriods = ({
  watch = defaultFn,
  name = '',
  selectedPeriodName,
  selectedIntervalsName,
  setValue,
  defaultValue = [],
}: TimePeriodsProps) => {
  const periods = name ? watch?.(name) ?? [] : [];

  useEffect(() => {
    if (name) {
      setValue?.(name, defaultValue);
    }
  }, []);

  return (
    <Stack>
      {periods?.map((period: any) => (
        <TimePeriod
          watch={watch}
          periodsName={name}
          period={period}
          selectedPeriodName={selectedPeriodName}
          selectedIntervalsName={selectedIntervalsName}
          setValue={setValue}
        />
      ))}
    </Stack>
  );
};

export default TimePeriods;
