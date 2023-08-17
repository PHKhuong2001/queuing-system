import { IRole } from "@/Shared/interfaces/RoleInterface";
import routesConfig from "@/config/routes";
import { Link } from "react-router-dom";

export const collectionRole = "role";
export const columnsOffRole = [
  { title: "Tên vai trò", dataIndex: "nameRole", key: "nameRole" },
  { title: "Số người dùng", dataIndex: "userNumber", key: "userNumber" },
  {
    title: "Mô tả",
    dataIndex: "describe",
    key: "describe",
  },
  {
    title: "Cập nhật",
    dataIndex: "update",
    key: "update",
    render: (text: string) => {
      const route = routesConfig.roleUpdate.replace("/:id", "");
      return (
        <Link to={`${route}/${text}`} className="custom-link-table">
          Cập nhật
        </Link>
      );
    },
  },
];

export const dataListRole: IRole[] = [];

export const dataDetailRole: IRole = {};
