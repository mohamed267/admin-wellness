import { ReactElement } from "react";

export type BaseEntity = {
    id: string;
}

export type SideBarItem = {
    label: string;
    subLabel?: string;
    children?: Array<SideBarItem>;
    icon?: ()=> JSX.Element;
    activeKey:string;
    href?: string;
}

export type CellProps = {
    value : string
}


export type TableMenuItem = {
    title: string, 
    Icon: ()=> JSX.Element,
    onClick?: ()=>any 
}
