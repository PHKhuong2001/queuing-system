import React, { useRef } from "react";
import { Select } from "antd";

const { Option } = Select;

type DataType = {
  stt: string;
  nameService: string;
  grantTime: string;
  status: string;
  powerSupply: string;
};

type CustomColumnType = {
  title: string;
  dataIndex: keyof DataType;
  key: keyof DataType;
  filterDropdown: (props: any) => React.ReactNode;
  onFilterDropdownOpenChange?: (visible: boolean) => void;
};

export const columnsOffReport: CustomColumnType[] = [
  {
    title: "Số thứ tự",
    dataIndex: "stt",
    key: "stt",
    filterDropdown: ({ setSelectedKeys, selectedKeys }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const inputRef = useRef(null);
      return (
        <div style={{ padding: 8 }}>
          <Select
            mode="multiple"
            style={{ width: "100%", marginBottom: 8, display: "block" }}
            value={selectedKeys as string[]}
            onChange={(value) => setSelectedKeys(value)}
            ref={inputRef}
            getPopupContainer={(triggerNode) => triggerNode.parentNode}
          >
            <Option value="2010001">2010001</Option>
            <Option value="2010002">2010002</Option>
            <Option value="2030003">2030003</Option>
          </Select>
        </div>
      );
    },
  },
  {
    title: "Tên dịch vụ",
    dataIndex: "nameService",
    key: "nameService",
    filterDropdown: ({ setSelectedKeys, selectedKeys }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const inputRef = useRef(null);
      return (
        <div style={{ padding: 8 }}>
          <Select
            mode="multiple"
            style={{ width: "100%", marginBottom: 8, display: "block" }}
            value={selectedKeys as string[]}
            onChange={(value) => setSelectedKeys(value)}
            ref={inputRef}
            getPopupContainer={(triggerNode) => triggerNode.parentNode}
          >
            <Option value="khám tim mạch">khám tim mạch</Option>
            <Option value="khám mắt">khám mắt</Option>
            <Option value="khám tổng quát">khám tổng quát</Option>
          </Select>
        </div>
      );
    },
  },
  {
    title: "Thời gian cấp",
    dataIndex: "grantTime",
    key: "grantTime",
    filterDropdown: ({ setSelectedKeys, selectedKeys }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const inputRef = useRef(null);
      return (
        <div style={{ padding: 8 }}>
          <Select
            mode="multiple"
            style={{ width: "100%", marginBottom: 8, display: "block" }}
            value={selectedKeys as string[]}
            onChange={(value) => setSelectedKeys(value)}
            ref={inputRef}
            getPopupContainer={(triggerNode) => triggerNode.parentNode}
          >
            <Option value="07:10">07:10</Option>
            <Option value="07:15">07:15</Option>
            <Option value="07:28">07:28</Option>
          </Select>
        </div>
      );
    },
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    filterDropdown: ({ setSelectedKeys, selectedKeys }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const inputRef = useRef(null);
      return (
        <div style={{ padding: 8 }}>
          <Select
            mode="multiple"
            style={{ width: "100%", marginBottom: 8, display: "block" }}
            value={selectedKeys as string[]}
            onChange={(value) => setSelectedKeys(value)}
            ref={inputRef}
            getPopupContainer={(triggerNode) => triggerNode.parentNode}
          >
            <Option value="Đang chờ">Đang chờ</Option>
            <Option value="Bỏ qua">Bỏ qua</Option>
            <Option value="Đã sử dụng">Đã sử dụng</Option>
          </Select>
        </div>
      );
    },
  },
  {
    title: "Nguồn cấp",
    dataIndex: "powerSupply",
    key: "powerSupply",
    filterDropdown: ({ setSelectedKeys, selectedKeys }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const inputRef = useRef(null);
      return (
        <div style={{ padding: 8 }}>
          <Select
            mode="multiple"
            style={{ width: "100%", marginBottom: 8, display: "block" }}
            value={selectedKeys as string[]}
            onChange={(value) => setSelectedKeys(value)}
            ref={inputRef}
            getPopupContainer={(triggerNode) => triggerNode.parentNode}
          >
            <Option value="Kiosk">Kiosk</Option>
            <Option value="Hệ thống">Hệ thống</Option>
          </Select>
        </div>
      );
    },
  },
  // Add more columns as needed
];
