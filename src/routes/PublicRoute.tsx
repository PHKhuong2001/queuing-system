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
import EquipmentUpdate from "@/view/Page/Equipment/EquipmentCRUD/UpdateEquipment";
import ServiceCreate from "@/view/Page/ServicePage/ServiceCRUD/CreateService";
import ServiceDetail from "@/view/Page/ServicePage/ServiceCRUD/DetailService";
import ServiceUpdate from "@/view/Page/ServicePage/ServiceCRUD/UpdateService";
import ProgressionDetail from "@/view/Page/ProgressionPage/ProgressionCRUD/DetailProgression";
import ProgressionCreate from "@/view/Page/ProgressionPage/ProgressionCRUD/CreateProgression";
import RoleManagementPage from "@/view/Page/RoleManagement";
import AccountManagementPage from "@/view/Page/AccountManagement";
import RoleUpdate from "@/view/Page/RoleManagement/RoleCRUD/UpdateRole";

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
    component: <EquipmentUpdate></EquipmentUpdate>,
  },
  { path: routesConfig.service, component: <ServicePage></ServicePage> },
  {
    path: routesConfig.serviceCreate,
    component: <ServiceCreate></ServiceCreate>,
  },
  {
    path: routesConfig.serviceDetail,
    component: <ServiceDetail></ServiceDetail>,
  },
  {
    path: routesConfig.serviceUpdate,
    component: <ServiceUpdate></ServiceUpdate>,
  },
  {
    path: routesConfig.progression,
    component: <ProgressionPage></ProgressionPage>,
  },
  {
    path: routesConfig.progressionDetail,
    component: <ProgressionDetail></ProgressionDetail>,
  },
  {
    path: routesConfig.progressionCreate,
    component: <ProgressionCreate></ProgressionCreate>,
  },
  { path: routesConfig.report, component: <ReportPage></ReportPage> },
  {
    path: routesConfig.roleManagement,
    component: <RoleManagementPage></RoleManagementPage>,
  },
  {
    path: routesConfig.roleUpdate,
    component: <RoleUpdate></RoleUpdate>,
  },
  {
    path: routesConfig.accountManagement,
    component: <AccountManagementPage></AccountManagementPage>,
  },
  {
    path: routesConfig.userLogs,
    component: <AccountManagementPage></AccountManagementPage>,
  },
];

export default publicRoute;
