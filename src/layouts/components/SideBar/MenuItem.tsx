import {
  DashboardIcon,
  EquipmentIcon,
  ProgressionIcon,
  ReportIcon,
  ServiceIcon,
  SettingIcon,
} from "@/Shared/components/icon";
import { handlerSplitRoute } from "@/Shared/helpers";
import { ISideBarItem } from "@/Shared/interfaces/SideBarInterface";
import routesConfig from "@/config/routes";

const MenuItem: ISideBarItem[] = [
  {
    icon: <DashboardIcon />,
    iconActive: <DashboardIcon fillColor="white" />,
    iconHover: <DashboardIcon fillColor="#ff7506" />,
    name: "Dashboard",
    path: routesConfig.dashboard,
  },
  {
    icon: <EquipmentIcon />,
    iconActive: <EquipmentIcon fillColor="white" />,
    iconHover: <EquipmentIcon fillColor="#ff7506" />,
    name: "Thiết bị",
    path: routesConfig.equipment,
    route: [
      `${handlerSplitRoute(routesConfig.equipmentUpdate)}`,
      `${handlerSplitRoute(routesConfig.equipmentDetail)}`,
      routesConfig.equipmentCreate,
    ],
  },
  {
    icon: <ServiceIcon />,
    iconActive: <ServiceIcon fillColor="white" />,
    iconHover: <ServiceIcon fillColor="#ff7506" />,
    name: "Dịch vụ",
    path: routesConfig.service,
    route: [
      `${handlerSplitRoute(routesConfig.serviceUpdate)}`,
      `${handlerSplitRoute(routesConfig.serviceDetail)}`,
      routesConfig.serviceCreate,
    ],
  },
  {
    icon: <ProgressionIcon />,
    iconActive: <ProgressionIcon fillColor="white" />,
    iconHover: <ProgressionIcon fillColor="#ff7506" />,
    name: "Cấp số",
    path: routesConfig.progression,
    route: [
      `${handlerSplitRoute(routesConfig.progressionDetail)}`,
      routesConfig.progressionCreate,
    ],
  },
  {
    icon: <ReportIcon />,
    iconActive: <ReportIcon fillColor="white" />,
    iconHover: <ReportIcon fillColor="#ff7506" />,
    name: "Báo cáo",
    path: routesConfig.report,
  },
  {
    icon: <SettingIcon />,
    iconActive: <SettingIcon fillColor="white" />,
    iconHover: <SettingIcon fillColor="#ff7506" />,
    name: "Cài đặt hệ thống",
    hoverMenu: [
      {
        name: "Quản lý vai trò",
        path: routesConfig.roleManagement,
      },
      {
        name: "Quản lý tài khoản",
        path: routesConfig.accountManagement,
      },
      {
        name: "Nhật ký người dùng",
        path: routesConfig.userLogs,
      },
    ],
    route: [
      `${handlerSplitRoute(routesConfig.roleUpdate)}`,
      routesConfig.roleCreate,
      routesConfig.roleManagement,
      routesConfig.accountManagement,
      routesConfig.accountCreate,
      `${handlerSplitRoute(routesConfig.accountUpdate)}`,
      routesConfig.userLogs,
    ],
  },
];
export default MenuItem;
