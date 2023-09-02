// id : number ,
// clientName: string,
// storeName: string,

import DateCell from 'components/table/components/date';
import GuideNameCell from '../components/table/GuideNameCell';
import Cell from 'components/table/components/cell';
import GuideMenuCell from '../components/table/GuideMenuCell';
import TownNameCell from '../components/table/city/TownNameCell';
import TownCoverCell from '../components/table/city/TownCoverCell';
import EventTownMenuCell from 'features/events/components/table/city/EventTownMenuCell';

//category
import GuideCategoryImageCell from '../components/table/category/GuideCategoryImageCell';
import CategoryNameCell from '../components/table/category/CategoryNameCell';
import GuideCategoryMenuCell from '../components/table/category/GuideCategoryMenuCell';

// orderNumber: number
export const guidesColumns = [
  {
    Header: 'guideTitle',
    accessor: 'title',
    Cell: GuideNameCell,
    Extention: GuideNameCell,
  },
  {
    Header: 'publishingDate',
    accessor: 'createdAt',
    Cell: DateCell,
    Extention: DateCell,
  },
  {
    Header: 'views',
    accessor: 'viewsNumber',
    Cell: Cell,
    Extention: Cell,
  },
  {
    Header: 'reviews',
    accessor: 'numReviews',
    Cell: Cell,
    Extention: Cell,
  },
  {
    Header: 'rating',
    accessor: 'avgRating',
    Cell: Cell,
    Extention: Cell,
  },
  {
    Header: '',
    accessor: 'consultData',
    Cell: GuideMenuCell,
  },
];

// // category column

export const guidecategoriesColumn = [
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
    accessor: 'imageUrl',
    Cell: GuideCategoryImageCell,
  },
  {
    Header: '',
    accessor: 'consultData',
    Cell: GuideCategoryMenuCell,
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

// //coupons column

// export const couponsColumns = [
//   {
//     Header: 'couponId',
//     accessor: 'id',
//     Cell: CouponIdCell,
//   },
//   {
//     Header: 'promoCode',
//     accessor: 'promoCode',
//     Cell: Cell,
//   },
//   {
//     Header: 'reduction',
//     accessor: 'percentage',
//     Cell: CouponReductionCell,
//   },
// ];
