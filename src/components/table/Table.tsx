import { 
    Box, 
    Button, 
    Flex, 
    Icon, 
    IconButton, 
    Stack, 
    Text, 
    Tfoot, 
    Thead,
    useColorModeValue
} from "@chakra-ui/react"
  
// import { 
//     useTable  , 
//     useSortBy , 
//     usePagination,
//     useGlobalFilter 
// } 

import {
    useTable , 
    useSortBy , 
    usePagination , 
    useGlobalFilter
}from "react-table"
  
import {  useMemo } from "react"
  
  
import { Table, Tbody, Td, Th, Tr } from "@chakra-ui/react"
import Status from "./components/status"
import Image from "./components/image"



import {AiOutlineFilter} from "react-icons/ai"
import {BiShowAlt } from "react-icons/bi"
import UserType from "./components/userType"
import Cell from "./components/cell"
import Date from "./components/date"
import Pagination from "components/pagination/Pagination"
import If from "common/If"
import { FormattedMessage } from "react-intl"
import TicketCell from "./components/ticketCell"
import Sort from "assets/icons/table/Sort"
import UserStatus from "features/users/components/UserStatus"
import Price from "./components/price"
import EventStatus from "features/events/components/EventStatus"
  


const components:any = {
  userStatus: UserStatus,
  status : Status,
  price: Price,
  image : Image , 
  userType : UserType , 
  cell : Cell, 
  date : Date,
  ticketCell: TicketCell,
  eventStatus: EventStatus,
}

// export type TableProps<Entry> = {
//   data: Entry[];
//   columns: TableColumn<Entry>[];
// };

type ColumnType  =  {
  Header : string, 
  Type?: string,
  accessor : string
}

type TableComponentProps<Entry>={
  data : Entry[] ,
  tableColumns : ColumnType[]  , 
  setPageIndex : any ,
  pageIndex : number , 
  pageCount : number 

}
  
const TableComponent = <Entry extends {id : string} >(
  { 
    data ,
    tableColumns , 
    setPageIndex,
    pageIndex ,
    pageCount
  }:
  TableComponentProps<Entry>

) => {


  const columns:any = useMemo(()=>tableColumns , [tableColumns])
  const table:any =  useTable({
    columns ,
    data 
    },
    // useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  
  )



  const {  
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,

    prepareRow , 
    initialState

  } = table
  initialState.pageSize = 8

  
    const textColor = useColorModeValue('secondaryGray.900', 'white');
    const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');


  return (
    <Stack>
      <Table    {...getTableProps()}>
        <Thead
        >
          {
              headerGroups.map(((headerGroup:any , index:any)=>{
                return(
                  <Tr
                    key={index}
                    {...headerGroup.getHeaderGroupProps()}
                  >
                    {
                      headerGroup.headers.map((column:any,  index:any)=>{
                        return(
                          <Th
                            py='15px'
                            {
                              ...column.getHeaderProps(
                                column.getSortByToggleProps()
                              )
                            }
                            key={index}
                            pe="10px"
                            borderColor={borderColor}
                            bg="gray.400"
                          >
                            <Flex
                              alignItems="center"
                              gap="10px"
                              fontSize={{ sm: '10px', lg: "14px" }}
                              color='gray.600'
                              textTransform={"capitalize"}
                            //   textTransform={""}
                            >
                              {
                                column.render("Header") &&
                                <Text>
                                    <FormattedMessage  
                                      id={column.render("Header")}
                                    />
                                </Text> 
                              }
                              <Sort />

                            </Flex>

                          </Th>

                        )

                      })
                    }
                    

                  </Tr>

                )

              }))
            }

        </Thead>

        <Tbody  {...getTableBodyProps()}>
          {
            page.map((row:any , index:any)=>{
              prepareRow(row)
              return(
                <Tr
                  {...row.getRowProps()}
                  key={index}
                  cursor="pointer"
                  bg={
                    index % 2 ==1 ?
                    "gray.400": "white"
                }
                >
                    {

                      row.cells.map((cell:any , index:any)=>{
                        // const data:any = 
                        // console.log("our dara ", cell)
                        
                        const column = columns[index]
                        const componentType  =  (column && column.Type) || "cell"

                        let Component = componentType ? components[componentType] : null
                        
                        return(
                          <Td
                            {...cell.getCellProps()}
                            key={index}
                            border="none"
                            color={index==0 ?  "gray.800" : "gray.600"}
                           
                          >
                            <Text  
                              fontSize='sm' 
                              fontWeight='700'
                            >
                              {
                                <Component 
                                value={cell.value}
                                />
                              }
                            </Text>
                          </Td>
                        )
                      })
                    }

                  


                  
                </Tr>                  
              )
            })
          }

        </Tbody>

        {/* <Flex>
        <Button
          onClick={previousPage}
        >
          previous
        </Button>
        <Button
          onClick={nextPage}
        >
          next
        </Button>
        </Flex> */}


      </Table>
      <Flex
            p={4}
            justifyContent="end"
            w={"100%"}
          >
            <Pagination 
              page={pageIndex}
              pages={pageCount}
              setPage={setPageIndex}
              
            />
    </Flex>

    </Stack>

     
    
  )
}
  
  
export default TableComponent