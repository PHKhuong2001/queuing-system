import { IAccount } from "@/Shared/interfaces/AccountInterface";
import routesConfig from "@/config/routes";
import { Link } from "react-router-dom";

export const collectionAuth = "auth";
export const dataListAccount: IAccount[] = [];
export const dataAccountDetail: IAccount = {};

export const dataAccountUpdate: IAccount = {};

export const columnsOffAccount = [
  { title: "Tên đăng nhập", dataIndex: "account", key: "account" },
  { title: "Họ Tên", dataIndex: "name", key: "name" },
  { title: "Số điện thoại", dataIndex: "phoneNumber", key: "phoneNumber" },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Vai trò",
    dataIndex: "role",
    key: "role",
  },
  { title: "Trạng thái hoạt động", dataIndex: "status", key: "status" },
  {
    title: "Cập nhật",
    dataIndex: "capNhat",
    key: "capNhat",
    render: (text: string) => {
      const route = routesConfig.accountUpdate.replace("/:id", "");
      return (
        <Link to={`${route}/${text}`} className="custom-link-table">
          Cập nhật
        </Link>
      );
    },
  },
];
