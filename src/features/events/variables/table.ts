// id : number ,
// clientName: string,
// storeName: string,

import Cell from 'components/table/components/cell';
import Price from 'components/table/components/price';
import Status from 'components/table/components/status';
import EventNameCell from '../components/table/EventNameCell';
import EventMenuCell from '../components/table/EventMenuCell';
import CouponReductionCell from '../components/table/coupon/CouponReduction';
import CouponIdCell from '../components/table/coupon/CouponIdCell';
import CategoryNameCell from '../components/table/category/CategoryNameCell';
import CategoryIconCell from '../components/table/category/CategoryIconCell';
import EventCategoryMenuCell from '../components/table/category/EventCategoryMenuCell';
import TownCoverCell from '../components/table/city/TownCoverCell';
import TownNameCell from '../components/table/city/TownNameCell';
import EventTownMenuCell from '../components/table/city/EventTownMenuCell';

// orderNumber: number
export const eventsColumns = [
  {
    Header: 'event',
    accessor: 'title',
    Cell: EventNameCell,
  },
  {
    Header: 'publishingDate',
    accessor: 'createdAt',
    Cell: Cell,
  },
  {
    Header: 'category',
    accessor: 'category',
    Cell: Cell,
  },
  {
    Header: 'price',
    accessor: 'price',
    Cell: Price,
  },
  {
    Header: 'status',
    accessor: 'status',
    Cell: Status,
  },
  {
    Header: '',
    accessor: 'consultData',
    Cell: EventMenuCell,
  },
];

// category column

export const categoryColumn = [
  {
    Header: 'categoryName',
    accessor: 'name',
    Cell: CategoryNameCell,
  },
  // {
  //     Header :"addedDate",
  //     accessor : "createdAt",
  //     Cell: DateCell
  // },
  {
    Header: 'categoryIcon',
    accessor: 'image',
    Cell: CategoryIconCell,
  },
  {
    Header: '',
    accessor: 'consultData',
    Cell: EventCategoryMenuCell,
  },
];

// town column

export const townColumn = [
  {
    Header: 'categoryName',
    accessor: 'name',
    Cell: TownNameCell,
  },
  // {
  //     Header :"addedDate",
  //     accessor : "createdAt",
  //     Cell: DateCell
  // },
  {
    Header: 'categoryIcon',
    accessor: 'image',
    Cell: TownCoverCell,
  },
  {
    Header: '',
    accessor: 'consultData',
    Cell: EventTownMenuCell,
  },
];

//coupons column

export const couponsColumns = [
  {
    Header: 'couponId',
    accessor: 'id',
    Cell: CouponIdCell,
  },
  {
    Header: 'promoCode',
    accessor: 'promoCode',
    Cell: Cell,
  },
  {
    Header: 'reduction',
    accessor: 'percentage',
    Cell: CouponReductionCell,
  },
];
