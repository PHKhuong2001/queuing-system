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
  equipmentDetail: "/equipment/:id",

  // Route Dịch vụ
  service: "/service",

  // Route Cấp số
  progression: "/progression",

  // Route báo cáo
  report: "/report",

  // Route cài đặt
  systemInstallation: "/system-installation",
};

export default routesConfig;
