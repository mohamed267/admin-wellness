// id : number ,
// partnerName: string,
// storeName: string,

import Cell from 'components/table/components/cell';
import PartnerNameCell from '../components/table/PartnerNameCell';
import PartnerMenuCell from '../components/table/PartnerMenuCell';

// orderNumber: number
export const partnersColumns = [
  {
    Header: 'partner',
    accessor: 'fullName',
    Cell: PartnerNameCell,
  },
  // {
  //     Header :"subcriptionDate",
  //     accessor : "subscriptionDate",
  //     Cell: Date
  // },
  {
    Header: 'company',
    accessor: 'storeName',
    Cell: Cell,
  },
  {
    Header: 'phoneNumber',
    accessor: 'phoneNumber',
    Cell: Cell,
  },
  // {
  //     Header :"score",
  //     accessor : "score",
  //     Cell: Cell
  // },
  // {
  //     Header :"tickets",
  //     accessor : "tickets",
  //     Cell: Cell
  // },
  {
    Header: '',
    accessor: 'id',
    Cell: PartnerMenuCell,
  },
];
