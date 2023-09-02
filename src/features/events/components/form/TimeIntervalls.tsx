import { Stack } from '@chakra-ui/react';
import NewInteval from './NewInteval';
import TimeIntervalShow from './TimeIntervalShow';
import uuid from 'react-uuid';

type TimeIntervallsProps = {
  setValue: any;
  name: string;
  watch: any;
};

const TimeIntervalls = ({ watch, name, setValue }: TimeIntervallsProps) => {
  const handleEditIntervals = (interval: any) => {
    if (name) {
      setValue(name, [...(watch?.(name) ?? []), { ...interval, id: uuid() }]);
    }
  };

  const handleDeleteIntervals = (id: string) => {
    if (name) {
      const intervals = watch?.(name) ?? [];
      setValue(name, intervals?.filter((interval: any) => interval?.id !== id));
    }
  };

  const handleEditInterval = (newInterval: any, id: string) => {
    if (name) {
      const intervals = watch?.(name) ?? [];
      console.log('interval is => ', intervals, newInterval, id);
      setValue(
        name,
        intervals?.map((interval: any) => {
          if (interval?.id === id) {
            return newInterval;
          }
          return interval;
        }),
      );
    }
  };

  return (
    <Stack>
      <NewInteval editIntevals={handleEditIntervals} />
      {watch?.(name)?.map((interval: any) => {
        return (
          <>
            <TimeIntervalShow
              defaultInterval={interval}
              key={interval?.id ?? uuid()}
              onDelete={() => {
                handleDeleteIntervals(interval?.id);
              }}
              onEditInterval={(interval: any) => {
                handleEditInterval(interval, interval?.id);
              }}
              showDelete={true}
            />
          </>
        );
      })}
    </Stack>
  );
};

export default TimeIntervalls;
