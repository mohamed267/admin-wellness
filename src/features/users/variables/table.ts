// id : number ,
// clientName: string,
// storeName: string,
// orderNumber: number
export const usersColumns = [
  {
    Header: 'user',
    accessor: 'id',
  },
  {
    Header: 'inscriptiondate',
    accessor: 'createdAt',
  },
  {
    Header: 'email',
    accessor: 'email',
  },
  {
    Header: 'tickets',
    accessor: 'tickets',
  },
  {
    Header: 'score',
    accessor: 'score',
  },
  {
    Header: 'status',
    accessor: 'status',
    Type: 'userStatus',
  },
];
