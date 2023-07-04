
// id : number ,
// partnerName: string,
// storeName: string,

import Cell from "components/table/components/cell";
import Price from "components/table/components/price";
import Status from "components/table/components/status";
import PartnerNameCell from "../components/table/PartnerNameCell";
import Date from "components/table/components/date";
import PartnerMenuCell from "../components/table/PartnerMenuCell";

// orderNumber: number
export const partnersColumns = [

    {
        Header :"partner",
        accessor : "fullName",
        Cell: PartnerNameCell
    }, 
    // {
    //     Header :"subcriptionDate",
    //     accessor : "subscriptionDate",
    //     Cell: Date
    // }, 
    {
        Header :"company",
        accessor : "storeName",
        Cell: Cell
    }, 
    {
        Header :"phoneNumber",
        accessor : "phoneNumber",
        Cell: Cell
    }, 
    // {
    //     Header :"score",
    //     accessor : "score",
    //     Cell: Cell
    // }, 
    // {
    //     Header :"tickets",
    //     accessor : "tickets",
    //     Cell: Cell
    // }, 
    {
        Header: "",
        accessor: "id",
        Cell: PartnerMenuCell
    }

]