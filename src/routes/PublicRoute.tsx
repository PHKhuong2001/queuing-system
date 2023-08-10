import { ComponentState } from "react";
import routesConfig from "../config/routes";
import {
  DashBoard,
  Equipment,
  PersonalInformation,
  ProgressionPage,
  ReportPage,
  ServicePage,
} from "@/view/Page";
import LayoutLogin from "@/layouts/LayoutLogin";
import Login from "@/view/Auth/Login";
import ForgotPassword from "@/view/Auth/ForgotPassword";
import ChangePassword from "@/view/Auth/ChangePassword";
import EquipmentCreate from "@/view/Page/Equipment/EquipmentCRUD/CreateEquipment";
import EquipmentDetail from "@/view/Page/Equipment/EquipmentCRUD/DetailEquipment";

interface PublicRouteType {
  path: string;
  component: ComponentState;
  layout?: ComponentState;
  exact?: boolean;
}
const publicRoute: PublicRouteType[] = [
  {
    path: routesConfig.login,
    component: <Login></Login>,
    exact: true,
    layout: LayoutLogin,
  },
  {
    path: routesConfig.forgotPassword,
    component: <ForgotPassword></ForgotPassword>,
    layout: LayoutLogin,
  },
  {
    path: routesConfig.changePassword,
    component: <ChangePassword></ChangePassword>,
    layout: LayoutLogin,
  },
  {
    path: routesConfig.personalInformation,
    component: <PersonalInformation></PersonalInformation>,
  },
  { path: routesConfig.dashboard, component: <DashBoard></DashBoard> },
  { path: routesConfig.equipment, component: <Equipment></Equipment> },
  {
    path: routesConfig.equipmentCreate,
    component: <EquipmentCreate></EquipmentCreate>,
  },
  {
    path: routesConfig.equipmentDetail,
    component: <EquipmentDetail></EquipmentDetail>,
  },
  {
    path: routesConfig.equipmentUpdate,
    component: <EquipmentCreate></EquipmentCreate>,
  },
  { path: routesConfig.service, component: <ServicePage></ServicePage> },
  {
    path: routesConfig.progression,
    component: <ProgressionPage></ProgressionPage>,
  },
  { path: routesConfig.report, component: <ReportPage></ReportPage> },
];

export default publicRoute;
