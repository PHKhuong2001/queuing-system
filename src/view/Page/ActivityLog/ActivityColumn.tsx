import { IActivity } from "@/Shared/interfaces/ActivityInterface";

export const collectionActivity = "activity";

export const columnsOffActivity = [
  { title: "Tên đăng nhập", dataIndex: "account", key: "account" },
  {
    title: "Thời gian tác động",
    dataIndex: "executionTime",
    key: "executionTime",
  },
  {
    title: "IP thực hiện",
    dataIndex: "IP",
    key: "IP",
  },
  {
    title: "Thao tác thực hiện",
    dataIndex: "operations",
    key: "operations",
  },
];

export const dataListActivity: IActivity[] = [];
