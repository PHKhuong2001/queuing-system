import React, { useState } from "react";
import { IEquipment } from "@/Shared/interfaces/EquipmentInterface";
import routesConfig from "@/config/routes";
import { Link } from "react-router-dom";

export const collectionEquipment = "equipment";
export const dataListEquipment: IEquipment[] = [];
export const dataEquipmentDetail: IEquipment = {
  key: 0,
  ID: "",
  name: "",
  IP: "",
  activeStatus: "",
  connectStatus: "",
  service: "",
  detail: "",
  update: "",
};

export const dataEquipmentUpdate: IEquipment = {
  key: 0,
  ID: "",
  name: "",
  IP: "",
  activeStatus: "",
  connectStatus: "",
  service: "",
  detail: "",
  update: "",
};

export const columnsOffEquipment = [
  { title: "Mã thiết bị", dataIndex: "ID", key: "ID" },
  { title: "Tên thiết bị", dataIndex: "name", key: "name" },
  { title: "Địa chỉ IP", dataIndex: "IP", key: "IP" },
  {
    title: "Trạng thái hoạt động",
    dataIndex: "activeStatus",
    key: "activeStatus",
  },
  {
    title: "Trạng thái kết nối",
    dataIndex: "connectStatus",
    key: "connectStatus",
  },
  {
    title: "Dịch vụ sử dụng",
    dataIndex: "service",
    key: "service",
    render: (text: string) => <ExpandableText text={text} />,
  },
  {
    title: "  ",
    dataIndex: "detail",
    key: "detail",
    render: (text: string) => <EquipmentLink text={text} linkType="detail" />,
  },
  {
    title: "  ",
    dataIndex: "update",
    key: "update",
    render: (text: string) => <EquipmentLink text={text} linkType="update" />,
  },
];

interface ExpandableTextProps {
  text: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text }) => {
  const {
    text: truncatedText,
    isExpanded,
    toggleExpansion,
  } = useExpandText(text, 25);

  return (
    <>
      <span className={`text-container ${isExpanded ? "expand" : ""}`}>
        {truncatedText}
      </span>
      {text.length > 25 && (
        <span className="show-more" onClick={toggleExpansion}>
          {isExpanded ? "Rút gọn" : "Xem thêm"}
        </span>
      )}
    </>
  );
};

interface EquipmentLinkProps {
  text: string;
  linkType: "detail" | "update";
}

const EquipmentLink: React.FC<EquipmentLinkProps> = ({ text, linkType }) => {
  const route =
    linkType === "detail"
      ? routesConfig.equipmentDetail.replace("/:id", "")
      : routesConfig.equipmentUpdate.replace("/:id", "");

  return (
    <Link to={`${route}/${text}`} className="custom-link-table">
      {linkType === "detail" ? "Chi tiết" : "Cập nhật"}
    </Link>
  );
};

export function useExpandText(initialText: string, threshold: number) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [text, setText] = useState(initialText);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedText = isExpanded ? text : text.slice(0, threshold);

  return {
    text: truncatedText,
    isExpanded,
    toggleExpansion,
  };
}
