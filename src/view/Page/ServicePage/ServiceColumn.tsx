import routesConfig from "@/config/routes";
import { Link } from "react-router-dom";

export const columnsOffService = [
  { title: "Mã dịch vụ", dataIndex: "maDichVu", key: "maDichVu" },
  { title: "Tên dịch vụ", dataIndex: "tenDichVu", key: "tenDichVu" },
  {
    title: "Mô tả",
    dataIndex: "moTa",
    key: "moTa",
  },
  {
    title: "Trạng thái hoạt động",
    dataIndex: "trangThaiHoatDong",
    key: "trangThaiHoatDong",
  },
  {
    title: "Chi Tiết",
    dataIndex: "chiTiet",
    key: "chiTiet",
    render: (text: string) => {
      const route = routesConfig.serviceDetail.replace("/:id", "");
      return (
        <Link to={`${route}/${text}`} className="custom-link-table">
          Chi tiết
        </Link>
      );
    },
  },
  {
    title: "Cập nhật",
    dataIndex: "capNhat",
    key: "capNhat",
    render: (text: string) => {
      const route = routesConfig.serviceDetail.replace("/:id", "");
      return (
        <Link to={`${route}/${text}`} className="custom-link-table">
          Cập nhật
        </Link>
      );
    },
  },
];

export const dataListService = [
  {
    key: 0,
    maDichVu: "KIO_01",
    tenDichVu: "Kiosk",
    moTa: "Mô tả dịch vụ 1",
    trangThaiHoatDong: "Hoạt động",
    chiTiet: "001",
    capNhat: "001",
  },
];
