import moment from "moment";

export const handlerSplitRoute = (routeString: string) => {
  let route = "";
  if (routeString.includes("/detail" || "/update")) {
    const matchResult = routeString.match(/(\/[^/]+\/[^/]+)/);
    route = matchResult ? matchResult[0] : "";
  } else {
    route = routeString;
  }
  return route;
};

export const changeDate = (time: any) => {
  return moment.unix(time).format("DD/MM/YYYY");
};

export const changeTime = (time: any) => {
  return moment.unix(time).format("hh:mm");
};
