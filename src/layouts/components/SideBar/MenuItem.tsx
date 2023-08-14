import {
  DashboardIcon,
  EquipmentIcon,
  ProgressionIcon,
  ReportIcon,
  ServiceIcon,
} from "@/Shared/components/icon";
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
  },
  {
    icon: <ServiceIcon />,
    iconActive: <ServiceIcon fillColor="white" />,
    iconHover: <ServiceIcon fillColor="#ff7506" />,
    name: "Dịch vụ",
    path: routesConfig.service,
  },
  {
    icon: <ProgressionIcon />,
    iconActive: <ProgressionIcon fillColor="white" />,
    iconHover: <ProgressionIcon fillColor="#ff7506" />,
    name: "Cấp số",
    path: routesConfig.progression,
  },
  {
    icon: <ReportIcon />,
    iconActive: <ReportIcon fillColor="white" />,
    iconHover: <ReportIcon fillColor="#ff7506" />,
    name: "Báo cáo",
    path: routesConfig.report,
  },
  {
    icon: <DashboardIcon />,
    iconActive: <DashboardIcon fillColor="white" />,
    iconHover: <DashboardIcon fillColor="#ff7506" />,
    name: "Cài đặt hệ thống",
    menu: [
      {
        name: "",
        path: "",
      },
      {
        name: "",
        path: "",
      },
      {
        name: "",
        path: "",
      },
    ],
  },
];
export default MenuItem;
