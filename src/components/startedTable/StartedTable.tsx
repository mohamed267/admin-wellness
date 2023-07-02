import { HeaderProps, TableHeaderGroupProps, UseTableHeaderGroupProps, useFilters, useGlobalFilter, useRowSelect, useSortBy, useTable } from "react-table"
import { COLUMNS } from "./columns"


import Data from "./MOCK_DATA.json"
import { useMemo } from "react"
import { Flex, Icon, Input, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import Sort from "assets/icons/table/Sort"
import { RiSortAsc } from "react-icons/ri"
import SortDesc from "assets/icons/table/SortDesc"
import SortAsc from "assets/icons/table/SortAsc"
import If from "common/If"
import { ZodAnyDef } from "zod"
import TableSelctCheckbox from "./TableSelctCheckbox"


const GlobalFilter = ({filter , setFilter}:any)=>{
    return (
        <Input value={filter || ""}  onChange={(e:any) => setFilter(e.target.value)} />
    )
}


const StartedTable = () => {
    const columns = useMemo(()=> COLUMNS , [])
    const data = useMemo(()=>Data , [])


    const table: any   = useTable({
        columns,
        data,
    } ,
    // useFilters,
    // useGlobalFilter,
    // useSortBy,
    useRowSelect,
    hooks => {
        hooks.visibleColumns.push((columns:any) => [
          // Let's make a column for selection
          {
            id: 'selection',
            // The header can use the table's getToggleAllRowsSelectedProps method
            // to render a checkbox
            Header: ({ getToggleAllRowsSelectedProps }:any) => (
              <div>
                <TableSelctCheckbox {...getToggleAllRowsSelectedProps()} />
              </div>
            ),
            // The cell can use the individual row's getToggleRowSelectedProps method
            // to the render a checkbox
            Cell: ({ row }:any) => (
              <div>
                <TableSelctCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...columns,
        ])
    }
    
    )


    const  {   getTableProps , getTableBodyProps , headerGroups , rows , prepareRow , state , setGlobalFilter , selectedFlatRows  }  = table

    const { globalFilter } =  state

     
    return (
        <>
            {/* <GlobalFilter 
                filter={globalFilter}
                setFilter={setGlobalFilter}
            /> */}

            <Table {...getTableProps()} >
                <Thead>
                    {
                        headerGroups?.map((headerGroup:any , index: any)=>{
                            return (
                                <Tr {...headerGroup.getHeaderGroupProps()} >
                                        {
                                            headerGroup?.headers?.map((column: any , key : any)=>{
                                                console.log("column => ", column)
                                                return (
                                                    <Th      key={key} {...column.getHeaderProps()} > 
                                                        <Flex  columnGap="5px"  alignItems="center" >
                                                            <Text
                                                                color={column?.isSorted ? "primary.500" : "gray.600"  }
                                                            >
                                                                {column?.render("Header")} 
                                                                
                                                            </Text>

                                                            {/* <If condition={column.canFilter} >
                                                                {column?.render("Filter")}      
                                                            </If> */}
                                                            
                                                            <Icon  viewBox="0 0 14 14"  fill={column?.isSorted ? "primary.500" :"gray.600"}  >
                                                            
                                                            <If condition={!column?.isSorted   || column.isSortedDesc} >
                                                                     <SortDesc />
                                                            </If>
                                                            <If condition={!column?.isSorted   ||  !column.isSortedDesc} >
                                                                    <SortAsc />
                                                            </If>
                                                            </Icon>
                                                        </Flex>
                                                    </Th>
                                                )
                                            })
                                        }
                                </Tr>
                            )
                        })
                    }

                </Thead>
                <Tbody {...getTableBodyProps()} >
                {
                    rows?.map((row:any , keu: any)=>{
                        prepareRow(row)
                        return(
                            <Tr {...row.getRowProps()} >
                                {
                                    row.cells.map((cell:any , key: any)=>{
                                        return (
                                            <Td {...cell.getCellProps()} >{cell.render("Cell") } </Td>
                                        )
                                    })
                                }
                            </Tr>
                        )
                    })
                }

                </Tbody>

            </Table>
        </>
    )
}

StartedTable.propTypes = {}

export default StartedTable