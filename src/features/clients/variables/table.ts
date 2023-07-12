// id : number ,
// clientName: string,
// storeName: string,

import Cell from 'components/table/components/cell';
import ClientNameCell from '../components/table/ClientNameCell';
import Date from 'components/table/components/date';
import ClientMenuCell from '../components/table/ClientMenuCell';

// orderNumber: number
export const clientsColumns = [
  {
    Header: 'client',
    accessor: 'fullName',
    Cell: ClientNameCell,
  },
  {
    Header: 'subcriptionDate',
    accessor: 'subscriptionDate',
    Cell: Date,
  },
  {
    Header: 'phoneNumber',
    accessor: 'phoneNumber',
    Cell: Cell,
  },
  {
    Header: 'score',
    accessor: 'score',
    Cell: Cell,
  },
  {
    Header: 'tickets',
    accessor: 'tickets',
    Cell: Cell,
  },
  {
    Header: '',
    accessor: 'id',
    Cell: ClientMenuCell,
  },
];
