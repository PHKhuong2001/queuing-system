import { ComponentState } from "react";
import routesConfig from "../config/routes";
import LayoutLogin from "@/layouts/LayoutLogin";
import Login from "@/view/Auth/Login";
import ForgotPassword from "@/view/Auth/ForgotPassword";
import ProgressionCreate from "@/view/Page/ProgressionPage/ProgressionCRUD/CreateProgression";
import { DefaultLayout } from "@/layouts";

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
    path: routesConfig.progressionCreate,
    component: <ProgressionCreate></ProgressionCreate>,
    layout: DefaultLayout,
  },
];

export default publicRoute;
