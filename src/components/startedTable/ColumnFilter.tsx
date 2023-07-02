import { Input } from "@chakra-ui/react"


const ColumnFilter = ({column}:any)=>{
    const { filterValue , setFilter } = column
    return (
        <Input value={filterValue || ""}  onChange={(e:any) => setFilter(e.target.value)} />
    )
}

export default ColumnFilter