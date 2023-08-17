import { IService } from "@/Shared/interfaces/ServiceInterface";
import routesConfig from "@/config/routes";
import { Link } from "react-router-dom";

export const collectionService = "service";

export const columnsOffService = [
  { title: "Mã dịch vụ", dataIndex: "id", key: "id" },
  { title: "Tên dịch vụ", dataIndex: "name", key: "name" },
  {
    title: "Mô tả",
    dataIndex: "describe",
    key: "describe",
  },
  {
    title: "Trạng thái hoạt động",
    dataIndex: "activeStatus",
    key: "activeStatus",
  },
  {
    title: "Chi Tiết",
    dataIndex: "detail",
    key: "detail",
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
    dataIndex: "update",
    key: "update",
    render: (text: string) => {
      const route = routesConfig.serviceUpdate.replace("/:id", "");
      return (
        <Link to={`${route}/${text}`} className="custom-link-table">
          Cập nhật
        </Link>
      );
    },
  },
];

export const dataListService: IService[] = [
  // {
  //   key: 0,
  //   maDichVu: "KIO_01",
  //   tenDichVu: "Kiosk",
  //   moTa: "Mô tả dịch vụ 1",
  //   trangThaiHoatDong: "Hoạt động",
  //   chiTiet: "001",
  //   capNhat: "001",
  // },
];

export const dataServiceDetail: IService = {};
// {
//   key: 0,
//   maDichVu: "KIO_01",
//   tenDichVu: "Kiosk",
//   moTa: "Mô tả dịch vụ 1",
//   trangThaiHoatDong: "Hoạt động",
//   chiTiet: "001",
//   capNhat: "001",
// },
