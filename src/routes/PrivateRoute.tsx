import { ComponentState } from "react";

interface PrivateRouteType {
  path: string;
  component: ComponentState;
  layout?: string;
}
const privateRoute: PrivateRouteType[] = [
  { path: "", component: <></> },
  { path: "", component: <></> },
];

export default privateRoute;
