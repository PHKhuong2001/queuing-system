import { IProgression } from "@/Shared/interfaces/ProgressionInterface";
import routesConfig from "@/config/routes";
import { Link } from "react-router-dom";

export const collectionProgression = "progression";
export const columnsOffProgression = [
  { title: "STT", dataIndex: "stt", key: "stt" },
  { title: "Tên Khách Hàng", dataIndex: "nameCustomer", key: "nameCustomer" },
  { title: "Tên dịch vụ", dataIndex: "nameService", key: "nameService" },
  {
    title: "Thời gian cấp",
    dataIndex: "grantTime",
    key: "grantTime",
  },
  {
    title: "Hạn sử dụng",
    dataIndex: "expiry",
    key: "expiry",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Chi Tiết",
    dataIndex: "detail",
    key: "detail",
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

export const dataListProgression: IProgression[] = [
  // {
  //   key: 0,
  //   stt: 1,
  //   nameCustomer: "Lê Huỳnh Ái Vân",
  //   nameService: "Khám tim mạch",
  //   grantTime: "14:35 - 07/11/2021",
  //   expiry: "14:35 - 12/11/2021",
  //   status: "Đang chờ",
  //   detail: "001",
  // },
];

export const dataDetailProgression: IProgression = {};
