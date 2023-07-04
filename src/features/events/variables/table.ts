
// id : number ,
// clientName: string,
// storeName: string,

import Cell from "components/table/components/cell";
import Price from "components/table/components/price";
import Status from "components/table/components/status";
import EventNameCell from "../components/table/EventNameCell";
import EventMenuCell from "../components/table/EventMenuCell";
import CouponReductionCell from "../components/table/coupon/CouponReduction";
import CouponIdCell from "../components/table/coupon/CouponIdCell";

// orderNumber: number
export const eventsColumns = [
 
   
    {
        Header :"event",
        accessor : "title",
        Cell: EventNameCell
    }, 
    {
        Header :"publishingDate",
        accessor : "createdAt",
        Cell: Cell
    }, 
    {
        Header :"category",
        accessor : "category",
        Cell: Cell
    }, 
    {
        Header: "price",
        accessor : "price",
        Cell: Price
    },  
    {
        Header: "status",
        accessor : "status",
        Cell: Status
    },
    {
        Header: "",
        accessor: "consultData",
        Cell: EventMenuCell
    }

]


//coupons column 


export const couponsColumns = [
    {
        Header :"couponId",
        accessor : "id",
        Cell: CouponIdCell
    } ,
    {
        Header :"promoCode",
        accessor : "promoCode",
        Cell: Cell
    },
    {
        Header :"reduction",
        accessor : "percentage",
        Cell: CouponReductionCell 
    }
   

]