// id : number ,
// clientName: string,
// storeName: string,
import GuideNameCell from '../components/table/BlogNameCell';
import GuideMenuCell from '../components/table/BlogMenuCell';
import DateCell from 'components/table/components/date';
import Cell from 'components/table/components/cell';

// orderNumber: number
export const blogsColumns = [
  {
    Header: 'blogTitle',
    accessor: 'title',
    Cell: GuideNameCell,
  },
  {
    Header: 'publishingDate',
    accessor: 'createdAt',
    Cell: DateCell,
  },
  {
    Header: 'views',
    accessor: 'viewsNumber',
    Cell: Cell,
  },
  {
    Header: 'reviews',
    accessor: 'numReviews',
    Cell: Cell,
  },
  {
    Header: 'rating',
    accessor: 'avgRating',
    Cell: Cell,
  },
  {
    Header: '',
    accessor: 'consultData',
    Cell: GuideMenuCell,
  },
];
