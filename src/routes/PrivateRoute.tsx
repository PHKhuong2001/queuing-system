import {
  DashBoard,
  Equipment,
  PersonalInformation,
  ProgressionPage,
  ReportPage,
  ServicePage,
} from "@/view/Page";

import { PrivateRouteType } from "@/Shared/interfaces";
import routesConfig from "@/config/routes";
import ServiceCreate from "@/view/Page/ServicePage/ServiceCRUD/CreateService";
import ServiceDetail from "@/view/Page/ServicePage/ServiceCRUD/DetailService";
import ServiceUpdate from "@/view/Page/ServicePage/ServiceCRUD/UpdateService";
import AccountManagementPage from "@/view/Page/AccountManagement";
import AccountCreate from "@/view/Page/AccountManagement/AccountCRUD/CreateAccount";
import AccountUpdate from "@/view/Page/AccountManagement/AccountCRUD/UpdateAccount";
import ProgressionDetail from "@/view/Page/ProgressionPage/ProgressionCRUD/DetailProgression";
import RoleManagementPage from "@/view/Page/RoleManagement";
import RoleCreate from "@/view/Page/RoleManagement/RoleCRUD/CreateRole";
import RoleUpdate from "@/view/Page/RoleManagement/RoleCRUD/UpdateRole";
import { DefaultLayout } from "@/layouts";

const privateRoute: PrivateRouteType[] = [
  {
    path: routesConfig.personalInformation,
    component: <PersonalInformation></PersonalInformation>,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.dashboard,
    component: <DashBoard></DashBoard>,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.equipment,
    component: <Equipment></Equipment>,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.equipmentCreate,
    component: <Equipment></Equipment>,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.equipmentDetail,
    component: <Equipment></Equipment>,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.equipmentUpdate,
    component: <Equipment></Equipment>,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.service,
    component: <ServicePage></ServicePage>,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.serviceCreate,
    component: <ServiceCreate></ServiceCreate>,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.serviceDetail,
    component: <ServiceDetail></ServiceDetail>,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.serviceUpdate,
    component: <ServiceUpdate></ServiceUpdate>,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.progression,
    component: <ProgressionPage></ProgressionPage>,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.progressionDetail,
    component: <ProgressionDetail></ProgressionDetail>,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.report,
    component: <ReportPage></ReportPage>,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.roleManagement,
    component: <RoleManagementPage></RoleManagementPage>,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.roleUpdate,
    component: <RoleUpdate></RoleUpdate>,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.roleCreate,
    component: <RoleCreate></RoleCreate>,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.accountManagement,
    component: <AccountManagementPage></AccountManagementPage>,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.accountCreate,
    component: <AccountCreate></AccountCreate>,
    layout: DefaultLayout,
  },

  {
    path: routesConfig.accountUpdate,
    component: <AccountUpdate></AccountUpdate>,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.userLogs,
    component: <AccountManagementPage></AccountManagementPage>,
    layout: DefaultLayout,
  },
];

export default privateRoute;
