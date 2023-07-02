import ColumnFilter from "./ColumnFilter";




export const COLUMNS:any = [
    {
        Header: "Id",
        accessor: "id",
        Filter: ColumnFilter
    },
    {
        Header: "event title",
        accessor: "event_title",
        Filter: ColumnFilter
    }, 
    {
        Header: "publishing Date",
        accessor: "creatd_at",
        Filter: ColumnFilter
    },
    {
        Header: "category",
        accessor: "category",
        Filter: ColumnFilter
    },{
        Header: "price",
        accessor: "price",
        Filter: ColumnFilter
    },
    {
        Header: "status",
        accessor: "status",
        Filter: ColumnFilter
    }
]