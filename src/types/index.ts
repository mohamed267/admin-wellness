export type BaseEntity = {
  id: string;
};

export type SideBarItem = {
  label: string;
  subLabel?: string;
  children?: Array<SideBarItem>;
  icon?: () => JSX.Element;
  activeKey: string;
  href?: string;
};

export type CellProps = {
  value: any;
};

export type TableMenuItem = {
  title: string;
  Icon: () => JSX.Element;
  onClick?: () => any;
  link?: string;
  state?: any;
};
