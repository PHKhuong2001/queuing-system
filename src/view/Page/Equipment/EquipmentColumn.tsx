import { IEquipment } from "@/Shared/interfaces/EquipmentInterface";
import routesConfig from "@/config/routes";
import { Link } from "react-router-dom";

export const collectionEquipment = "equipment";
export const dataListEquipment: IEquipment[] = [];
export const dataEquipmentDetail: IEquipment = {
  key: 0,
  maThietBi: "",
  tenThietBi: "",
  diaChiIP: "",
  trangThaiHoatDong: "",
  trangThaiKetNoi: "",
  dichVuSuDung: "",
  chiTiet: "",
  capNhat: "",
};

export const dataEquipmentUpdate: IEquipment = {
  key: 0,
  maThietBi: "",
  tenThietBi: "",
  diaChiIP: "",
  trangThaiHoatDong: "",
  trangThaiKetNoi: "",
  dichVuSuDung: "",
  chiTiet: "",
  capNhat: "",
};

export const columnsOffEquipment = [
  { title: "Mã thiết bị", dataIndex: "maThietBi", key: "maThietBi" },
  { title: "Tên thiết bị", dataIndex: "tenThietBi", key: "tenThietBi" },
  { title: "Địa chỉ IP", dataIndex: "diaChiIP", key: "diaChiIP" },
  {
    title: "Trạng thái hoạt động",
    dataIndex: "trangThaiHoatDong",
    key: "trangThaiHoatDong",
  },
  {
    title: "Trạng thái kết nối",
    dataIndex: "trangThaiKetNoi",
    key: "trangThaiKetNoi",
  },
  { title: "Dịch vụ sử dụng", dataIndex: "dichVuSuDung", key: "dichVuSuDung" },
  {
    title: "Chi tiết",
    dataIndex: "chiTiet",
    key: "chiTiet",
    render: (text: string) => {
      const route = routesConfig.equipmentDetail.replace("/:id", "");
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
      const route = routesConfig.equipmentUpdate.replace("/:id", "");
      return (
        <Link to={`${route}/${text}`} className="custom-link-table">
          Cập nhật
        </Link>
      );
    },
  },
];
