import { ComponentState } from "react";

export interface ISideBarItem {
  icon?: ComponentState;
  iconActive?: ComponentState;
  iconHover?: ComponentState;
  name?: string;
  path?: string;
  hoverMenu?: MenuItem[];
  route?: string[];
}

interface MenuItem {
  name: string;
  path: string;
}
