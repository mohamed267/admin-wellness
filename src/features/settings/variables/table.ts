import Cell from 'components/table/components/cell';
import PlanPermissionCell from '../components/Plan/PlanPermissionCell';
import PlanPriceCell from '../components/Plan/PlanPriceCell';
import PlanMenuCell from '../components/Plan/PlanMenuCell';

export const subscriptionPlansColumns = [
  {
    Header: 'plan',
    accessor: 'title',
    Cell: Cell,
  },
  {
    Header: 'partner',
    accessor: 'for',
    Cell: Cell,
  },
  {
    Header: 'permissions',
    accessor: 'permissions',
    Cell: PlanPermissionCell,
  },
  {
    Header: 'pricing',
    accessor: 'price',
    Cell: PlanPriceCell,
  },
  {
    Header: '',
    accessor: 'consultData',
    Cell: PlanMenuCell,
  },
];
