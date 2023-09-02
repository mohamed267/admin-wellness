import { useState } from 'react';
import TableComponent from 'components/table/Table';
import { EventTown } from 'features/events/types';
import { townColumn } from 'features/events/variables/table';
import { useTowns } from 'features/events/api/getEventTowns';

const TownsList = () => {
  const [pageIndex] = useState(1);

  // const  [ pageIndex, setPageIndex ] = useState(1)
  const { data: towns } = useTowns({
    query: {},
  });
  return (
    <TableComponent<EventTown>
      name="towns"
      // name="users"
      // selectRow={navigateOrderDetails}
      data={towns ?? []}
      tableColumns={townColumn}
      pageIndex={pageIndex}
      pageCount={1}
      //
      // searching={setSearch}
      // detailsIcon={true}
    />
  );
};

export default TownsList;
