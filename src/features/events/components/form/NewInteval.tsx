import { useEffect, useState } from 'react';
import {
  Flex,
  IconButton,
  InputGroup,
  InputLeftElement,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import FieldWrapper from 'components/form/FieldWrapper';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import { BiPlus } from 'react-icons/bi';
import { EditorIntervalValue, RangeValue } from 'features/events/types';
import uuid from 'react-uuid';

type NewIntevalProps = {
  editIntevals: any;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NewInteval = ({ editIntevals }: NewIntevalProps) => {
  const defaultInterval = {
    id: uuid(),
    price: '',
    MaxNPlaces: '',
    startingTime: null,
    endingTime: null,
  };
  const [interval, setInterval] = useState<Partial<EditorIntervalValue>>({});

  useEffect(() => {
    setInterval(defaultInterval);
  }, []);

  const onChangeRange = (range: RangeValue) => {
    console.log('our range her eis  ', range);
    const startingTime = range?.[0] as any;
    const endingTime = range?.[1] as any;

    if (startingTime) {
      console.log('chage starting time');
      setInterval({
        ...interval,
        startingTime,
      });
    }

    if (endingTime) {
      console.log('chage eneding time');
      setInterval({
        ...interval,
        endingTime,
      });
    }

    // startTransition(() => {
    //   setInterval({
    //     ...interval,
    //     startingTime: startingTime,
    //     endingTime: endingTime,
    //   });
    // });
  };

  const onChangeNumberPlace = (MaxNPlaces: string) => {
    setInterval({
      ...interval,
      MaxNPlaces,
    });
  };

  const onChangePrice = (price: string) => {
    setInterval({
      ...interval,
      price,
    });
  };

  const handleAddInterval = () => {
    editIntevals(interval);
    setInterval(defaultInterval);
  };

  return (
    <Flex gap="10px">
      <FieldWrapper label="timing">
        <TimeRangePicker
          className="primary"
          value={[interval?.startingTime ?? null, interval?.endingTime ?? null]}
          onChange={onChangeRange as () => void}
        />
      </FieldWrapper>
      <FieldWrapper label="nbPlaces">
        <NumberInput
          onChange={onChangeNumberPlace}
          value={interval?.MaxNPlaces ?? ''}
          min={0}
          precision={0}
          variant="primary"
        >
          <NumberInputField />
        </NumberInput>
      </FieldWrapper>
      <FieldWrapper label="pricing">
        <InputGroup>
          <InputLeftElement>RS</InputLeftElement>
          <NumberInput
            value={interval?.price ?? ''}
            onChange={onChangePrice}
            variant="primary"
          >
            <NumberInputField />
          </NumberInput>
        </InputGroup>
      </FieldWrapper>
      <IconButton
        aria-label="add intervalle"
        marginTop="auto"
        borderRadius="lg"
        icon={<BiPlus />}
        variant="primaryFill"
        isDisabled={
          !interval?.price ||
          !interval?.MaxNPlaces ||
          !interval?.endingTime ||
          !interval?.startingTime
        }
        onClick={handleAddInterval}
      />
    </Flex>
  );
};

export default NewInteval;
