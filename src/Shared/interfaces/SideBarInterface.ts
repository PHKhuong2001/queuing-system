import { ComponentState } from "react";

export interface ISideBarItem {
  icon?: ComponentState;
  iconActive?: ComponentState;
  iconHover?: ComponentState;
  name?: string;
  path?: string;
  menu?: MenuItem[];
}

interface MenuItem {
  name: string;
  path: string;
}
