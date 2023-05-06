
// id : number ,
// clientName: string,
// storeName: string,
// orderNumber: number
export const eventsColumns = [
 
   
    {
        Header :"event",
        accessor : "eventname",
    }, 
    {
        Header :"publishingDate",
        accessor : "createdAt",
    }, 
    {
        Header :"category",
        accessor : "category",
    }, 
    {
        Header: "price",
        accessor : "price",
        Type: "price"
    },  
    {
        Header: "status",
        accessor : "status",
        Type: "eventStatus",
    },

]