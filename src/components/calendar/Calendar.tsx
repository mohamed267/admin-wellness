import React, { useState } from 'react';
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import 'assets/css/CalendarRange.css';

import { DateRangePicker } from 'react-date-range';

import { Flex, useToken } from '@chakra-ui/react';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const CalendarComponent = () => {
  const [primary500] = useToken('colors', ['primary.500']);
  //   const { selectRange, ...rest } = props;
  //   const [value, onChange] = useState(new Date());

  const [selectionRange, setSelectionRange] = useState<any>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  return (
    <Flex
      alignItems="center"
      direction="column"
      w="100%"
      maxW="max-content"
      p="20px 15px"
      h="max-content"
      //   {...rest}
    >
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={(range) => {
          console.log('range = > ', range);
          setSelectionRange(range.selection);
        }}
        rangeColors={[primary500]}
        color={primary500}
      />
    </Flex>
  );
};

export default CalendarComponent;
