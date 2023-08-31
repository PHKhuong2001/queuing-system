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
      return (
        <div
          style={{
            padding: 8,
            width: "180px",
            height: "150px",
          }}
        >
          <ul className="dropdown-list">
            <li className="dropdown-list-item">2010001</li>
            <li className="dropdown-list-item">2010002</li>
            <li className="dropdown-list-item">2030003</li>
            <li className="dropdown-list-item">2010001</li>
            <li className="dropdown-list-item">2010002</li>
            <li className="dropdown-list-item">2030003</li>
            <li className="dropdown-list-item">2010001</li>
            <li className="dropdown-list-item">2010002</li>
            <li className="dropdown-list-item">2030003</li>
          </ul>
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
      return (
        <div
          style={{
            padding: 8,
            width: "180px",
            height: "150px",
          }}
        >
          <ul className="dropdown-list">
            <li className="dropdown-list-item">2010001</li>
            <li className="dropdown-list-item">2010002</li>
            <li className="dropdown-list-item">2030003</li>
            <li className="dropdown-list-item">2010001</li>
            <li className="dropdown-list-item">2010002</li>
            <li className="dropdown-list-item">2030003</li>
            <li className="dropdown-list-item">2010001</li>
            <li className="dropdown-list-item">2010002</li>
            <li className="dropdown-list-item">2030003</li>
          </ul>
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
      return (
        <div
          style={{
            padding: 8,
            width: "180px",
            height: "150px",
          }}
        >
          <ul className="dropdown-list">
            <li className="dropdown-list-item">2010001</li>
            <li className="dropdown-list-item">2010002</li>
            <li className="dropdown-list-item">2030003</li>
            <li className="dropdown-list-item">2010001</li>
            <li className="dropdown-list-item">2010002</li>
            <li className="dropdown-list-item">2030003</li>
            <li className="dropdown-list-item">2010001</li>
            <li className="dropdown-list-item">2010002</li>
            <li className="dropdown-list-item">2030003</li>
          </ul>
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
      return (
        <div
          style={{
            padding: 8,
            width: "180px",
            height: "150px",
          }}
        >
          <ul className="dropdown-list">
            <li className="dropdown-list-item">2010001</li>
            <li className="dropdown-list-item">2010002</li>
            <li className="dropdown-list-item">2030003</li>
            <li className="dropdown-list-item">2010001</li>
            <li className="dropdown-list-item">2010002</li>
            <li className="dropdown-list-item">2030003</li>
            <li className="dropdown-list-item">2010001</li>
            <li className="dropdown-list-item">2010002</li>
            <li className="dropdown-list-item">2030003</li>
          </ul>
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
      return (
        <div
          style={{
            padding: 8,
            width: "180px",
            height: "150px",
          }}
        >
          <ul className="dropdown-list">
            <li className="dropdown-list-item">2010001</li>
            <li className="dropdown-list-item">2010002</li>
            <li className="dropdown-list-item">2030003</li>
            <li className="dropdown-list-item">2010001</li>
            <li className="dropdown-list-item">2010002</li>
            <li className="dropdown-list-item">2030003</li>
            <li className="dropdown-list-item">2010001</li>
            <li className="dropdown-list-item">2010002</li>
            <li className="dropdown-list-item">2030003</li>
          </ul>
        </div>
      );
    },
  },
  // Add more columns as needed
];
