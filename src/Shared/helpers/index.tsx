import routesConfig from "@/config/routes";
import moment from "moment";

export const handlerSplitRoute = (routeString: string) => {
  let route = "";
  if (routeString.includes("/:id")) {
    route = routeString.replace("/:id", "");
  } else {
    if (routeString === routesConfig.roleManagement) {
      route = routeString;
    } else {
      const matchResult = routeString.match(/(\/[^/]+\/[^/]+)/);
      route = matchResult ? matchResult[0] : "";
    }
  }
  return route;
};

export const changeDate = (time: any) => {
  return moment.unix(time).format("DD/MM/YYYY");
};

export const changeTime = (time: any) => {
  return moment.unix(time).format("hh:mm");
};
