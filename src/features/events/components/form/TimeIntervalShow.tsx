import {
  Flex,
  Icon,
  IconButton,
  InputGroup,
  InputLeftElement,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import FieldWrapper from 'components/form/FieldWrapper';
import BinDeleteIcon from 'assets/icons/global/BinDeleteIcon';
import { defaultFn } from 'utils/functions';
import uuid from 'react-uuid';
import { EditorIntervalValue, RangeValue } from 'features/events/types';

type NewIntevalProps = {
  defaultInterval: EditorIntervalValue;
  onDelete?: any;
  onEditInterval: any;
  showDelete?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TimeIntervalShow = ({
  defaultInterval,
  onDelete = defaultFn,
  onEditInterval,
  showDelete = false,
}: NewIntevalProps) => {
  const onChangeRange = (range: RangeValue) => {
    // if (range?.[0]) {
    const startingTime = range?.[0] as any;
    const endingTime = range?.[1] as any;

    if (startingTime && endingTime) {
      onEditInterval({
        ...defaultInterval,
        startingTime,
        endingTime,
      });
    }
  };
  const onChangeNumberPlace = (MaxNPlaces: string) => {
    if (MaxNPlaces) {
      onEditInterval({
        ...defaultInterval,
        MaxNPlaces,
      });
    }
  };

  const onChangePrice = (price: string) => {
    if (price) {
      onEditInterval({
        ...defaultInterval,
        price,
      });
    }
  };

  return (
    <>
      <Flex gap="10px">
        <FieldWrapper label="">
          <TimeRangePicker
            className="primary"
            key={defaultInterval?.id ?? uuid()}
            value={[defaultInterval.startingTime, defaultInterval.endingTime]}
            onChange={onChangeRange as () => void}
          />
        </FieldWrapper>
        <FieldWrapper label="">
          <NumberInput
            onChange={onChangeNumberPlace}
            value={defaultInterval?.MaxNPlaces}
            min={0}
            precision={0}
            variant="primary"
          >
            <NumberInputField />
          </NumberInput>
        </FieldWrapper>
        <FieldWrapper label="">
          <InputGroup>
            <InputLeftElement>RS</InputLeftElement>
            <NumberInput
              value={defaultInterval?.price}
              onChange={onChangePrice}
              variant="primary"
            >
              <NumberInputField />
            </NumberInput>
          </InputGroup>
        </FieldWrapper>
        {showDelete && (
          <IconButton
            aria-label="add intervalle"
            marginTop="auto"
            borderRadius="lg"
            icon={
              <Icon stroke="white" width="16px" height="18px">
                <BinDeleteIcon />
              </Icon>
            }
            isDisabled={false}
            variant="dangerFill"
            onClick={onDelete}
          />
        )}
      </Flex>
    </>
  );
};

export default TimeIntervalShow;
