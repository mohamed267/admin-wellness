import {
  Box,
  Collapse,
  Flex,
  HStack,
  Stack,
  Text,
  Thead,
  useColorModeValue,
} from '@chakra-ui/react';

// import {
//     useTable  ,
//     useSortBy ,
//     usePagination,
//     useGlobalFilter
// }

import { useTable, useRowSelect } from 'react-table';

import { FC, useEffect, useMemo } from 'react';

// import Pagination from '@mui/material/Pagination';
import { Table, Tbody, Td, Th, Tr } from '@chakra-ui/react';
import Pagination from 'components/pagination/Pagination';
import { FormattedMessage } from 'react-intl';
import TableSelectCheckBox from './TableSelectCheckBox';
import If from 'common/If';
import Sort from 'assets/icons/table/Sort';
import { useSearchParams } from 'react-router-dom';

// export type TableProps<Entry> = {
//   data: Entry[];
//   columns: TableColumn<Entry>[];
// };

type ColumnType = {
  Header: string;
  Type?: string;
  accessor: string;
};

type TableComponentProps<Entry> = {
  data: Entry[];
  tableColumns: ColumnType[];
  name: string;
  pageIndex: number;
  pageCount: number;
  hideSelection?: boolean;
  paginated?: boolean;
  ExpendedRow?: FC<any> | null;
  TableUtils?: FC<any> | null;
};

const TableComponent = <Entry extends { id: string }>({
  data,
  tableColumns,
  pageIndex,
  pageCount,
  hideSelection = false,
  paginated = false,
  ExpendedRow = null,
  TableUtils = null,
}: TableComponentProps<Entry>) => {
  const [searchParams] = useSearchParams();
  const expandedRow = searchParams?.get('expandedRow') ?? '';
  const columns: any = useMemo(() => tableColumns, [tableColumns]);
  const table: any = useTable(
    {
      columns,
      data,
    },
    // useFilters,
    // useGlobalFilter,
    // useSortBy,
    // usePagination,
    useRowSelect,
    (hooks) => {
      hooks?.visibleColumns?.push((columns: any) => {
        return [
          // Let's make a column for selection
          ...(hideSelection
            ? []
            : [
                {
                  id: 'selection',
                  // The header can use the table's getToggleAllRowsSelectedProps method
                  // to render a checkbox
                  Header: ({ getToggleAllRowsSelectedProps }: any) => (
                    <div>
                      <TableSelectCheckBox
                        {...getToggleAllRowsSelectedProps()}
                      />
                    </div>
                  ),
                  // The cell can use the individual row's getToggleRowSelectedProps method
                  // to the render a checkbox
                  Cell: ({ row }: any) => (
                    <div>
                      <TableSelectCheckBox
                        {...row.getToggleRowSelectedProps()}
                      />
                    </div>
                  ),
                  Extention: () => <div></div>,
                },
              ]),
          ...columns,
        ];
      });
    },
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    initialState,
    selectedFlatRows,
  } = table;
  initialState.pageSize = 8;

  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');

  useEffect(() => {
    console.log('our table select => ', table);
  }, [table]);

  useEffect(() => {
    console.log('our slected flat rows => ', selectedFlatRows);
  }, [selectedFlatRows]);

  return (
    <Stack gap="30px" bg="transparent">
      <Box bg="white" borderRadius="xl" overflow="hidden">
        <HStack px="16px" py="16px" justifyContent="space-between">
          <Text fontSize="14px" color="gray.600">
            {' '}
            {selectedFlatRows?.length} row selected
          </Text>
          {TableUtils && (
            <TableUtils
              ids={selectedFlatRows?.map((row: any) => row?.original?.id) ?? []}
            />
          )}
        </HStack>
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup: any, index: any) => {
              return (
                <Tr key={index} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column: any, index: any) => {
                    console.log('header column  => ', column);

                    return (
                      <Th
                        py="15px"
                        {...column
                          .getHeaderProps
                          // column.getSortByToggleProps()
                          ()}
                        key={index}
                        pe="10px"
                        borderColor={borderColor}
                        bg="gray.100"
                      >
                        <Flex
                          alignItems="center"
                          gap="10px"
                          fontSize={{ sm: '10px', lg: '14px' }}
                          color="gray.600"
                          textTransform={'capitalize'}
                          //   textTransform={""}
                        >
                          <If condition={column.id !== 'selection'}>
                            {column.render('Header') && (
                              <Text
                                fontSize="15px"
                                lineHeight="17px"
                                fontWeight="500"
                                color="secondaryBlack.400"
                                textTransform="capitalize"
                              >
                                <FormattedMessage
                                  id={column.render('Header')}
                                />
                              </Text>
                            )}
                          </If>

                          <If condition={column.id === 'selection'}>
                            {column.render('Header')}
                          </If>

                          <Sort />
                        </Flex>
                      </Th>
                    );
                  })}
                </Tr>
              );
            })}
          </Thead>

          <Tbody {...getTableBodyProps()}>
            {rows.map((row: any, index: any) => {
              prepareRow(row);
              return (
                <>
                  <Tr
                    {...row.getRowProps()}
                    key={index}
                    cursor="pointer"
                    py="0"
                    bg={index % 2 === 1 ? 'gray.100' : 'white'}
                  >
                    {row.cells.map((cell: any, index: any) => {
                      // const data:any =
                      // console.log("our dara ", cell)

                      // const column = columns[index]
                      // const componentType  =  (column && column.Type) || "cell"

                      // let Component = componentType ? components[componentType] : null

                      return (
                        <Td
                          {...cell.getCellProps()}
                          key={index}
                          border="none"
                          color={index === 0 ? 'gray.800' : 'gray.600'}
                        >
                          {cell.render('Cell')}
                          {/* <Text  
                                fontSize='sm' 
                                fontWeight='700'
                              >
                                {
                                  <Component 
                                  value={cell.value}
                                  />
                                }
                              </Text> */}
                        </Td>
                      );
                    })}
                  </Tr>
                  <Tr bg={index % 2 === 1 ? 'gray.100' : 'white'}>
                    <Collapse in={row.original.id === expandedRow}>
                      <Td colSpan={row?.cells?.length ?? 1}>
                        {ExpendedRow && <ExpendedRow row={row.orginal} />}
                      </Td>
                    </Collapse>
                  </Tr>

                  {/* <Tr bg={index % 2 === 1 ? 'gray.100' : 'white'} w="100%">
                    {row.cells.map((cell: any, index: any) => {
                      // const data:any =
                      // console.log("our dara ", cell)

                      // const column = columns[index]
                      // const componentType  =  (column && column.Type) || "cell"

                      // let Component = componentType ? components[componentType] : null

                      return (
                        <Td
                          {...cell.getCellProps()}
                          key={index}
                          border="none"
                          color={index === 0 ? 'gray.800' : 'gray.600'}
                        >
                          {cell.render('Extention')}
                          {/* <Text  
                                fontSize='sm' 
                                fontWeight='700'
                              >
                                {
                                  <Component 
                                  value={cell.value}
                                  />
                                }
                              </Text> */}
                  {/* </Td>
                      );
                    })}
                  </Tr> */}
                </>
              );
            })}
          </Tbody>
        </Table>
      </Box>

      <Flex p={4} justifyContent="end" w={'100%'}>
        {paginated && <Pagination page={pageIndex} pages={pageCount} />}
      </Flex>
    </Stack>
  );
};

export default TableComponent;
