import { ReactNode } from "react";
import { IconType } from "react-icons/lib";
import { JsxElement } from "typescript";

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