const routesConfig = {
  // Route Auth
  login: "/",
  forgotPassword: "/forgot-password",
  changePassword: "/change-password",
  personalInformation: "/information",

  // Route Dashboard
  dashboard: "/dashboard",

  // Route Thiết bị
  equipment: "/equipment",
  equipmentCreate: "/equipment/create",
  equipmentUpdate: "/equipment/update/:id",
  equipmentDetail: "/equipment/detail/:id",

  // Route Dịch vụ
  service: "/service",
  serviceCreate: "/service/create",
  serviceUpdate: "/service/update/:id",
  serviceDetail: "/service/detail/:id",

  // Route Cấp số
  progression: "/progression",
  progressionDetail: "/progression/detail/:id",
  progressionCreate: "/progression/create",

  // Route báo cáo
  report: "/report",

  // Route cài đặt
  roleManagement: "/role",
  roleCreate: "/role/create",
  roleUpdate: "/role/update/:id",

  accountManagement: "/account",
  accountUpdate: "/account/update/:id",
  accountCreate: "/account/create",
  userLogs: "/user-log",
};

export default routesConfig;
