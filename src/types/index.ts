
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