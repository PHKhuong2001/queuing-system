import routesConfig from "@/config/routes";
import { Link } from "react-router-dom";

export const columnsOffProgression = [
  { title: "STT", dataIndex: "stt", key: "stt" },
  { title: "Tên Khách Hàng", dataIndex: "tenKhachHang", key: "tenKhachHang" },
  { title: "Tên dịch vụ", dataIndex: "tenDichVu", key: "tenDichVu" },
  {
    title: "Thời gian cấp",
    dataIndex: "thoiGianCap",
    key: "thoiGianCap",
  },
  {
    title: "Hạn sử dụng",
    dataIndex: "hanSuDung",
    key: "hanSuDung",
  },
  {
    title: "Trạng thái",
    dataIndex: "trangThai",
    key: "trangThai",
  },
  {
    title: "Chi Tiết",
    dataIndex: "chiTiet",
    key: "chiTiet",
    render: (text: string) => {
      const route = routesConfig.progressionDetail.replace("/:id", "");
      return (
        <Link to={`${route}/${text}`} className="custom-link-table">
          Chi tiết
        </Link>
      );
    },
  },
];

export const dataListService = [
  {
    key: 0,
    stt: 1,
    tenKhachHang: "Lê Huỳnh Ái Vân",
    tenDichVu: "Khám tim mạch",
    thoiGianCap: "14:35 - 07/11/2021",
    hanSuDung: "14:35 - 12/11/2021",
    trangThai: "Đang chờ",
    chiTiet: "001",
  },
];
