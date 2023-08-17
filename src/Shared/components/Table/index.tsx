import routesConfig from "@/config/routes";
import { columnsOffEquipment } from "@/view/Page/Equipment/EquipmentColumn";
import { columnsOffProgression } from "@/view/Page/ProgressionPage/ProgressionColumn";
import { columnsOffReport } from "@/view/Page/ReportPage/ReportColumn";
import { columnsOffRole } from "@/view/Page/RoleManagement/RoleColumn";
import { columnsOffService } from "@/view/Page/ServicePage/ServiceColumn";
import { Table, Pagination } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const pageSizeOptions = ["5", "6", "7", "8", "10", "20"]; // Các tùy chọn số lượng hàng trên mỗi trang
interface TableProps {
  data: any[];
  height?: string;
  width?: string;
}

const TableComponent = ({ data, height = "400px", width }: TableProps) => {
  const [pageSize, setPageSize] = useState<any>(
    parseInt(pageSizeOptions[1], 10)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState<any[]>([]);
  const [totalData, setTotalData] = useState<number>(0);
  const location = useLocation();

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setCurrentData(data.slice(startIndex, endIndex));
    setTotalData(data.length);
  }, [currentPage, pageSize, data]);

  const handlePaginationChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const handlerColumn = () => {
    switch (location.pathname) {
      case routesConfig.equipment:
        return columnsOffEquipment;
      case routesConfig.service:
        return columnsOffService;
      case routesConfig.progression:
        return columnsOffProgression;
      case routesConfig.report:
        return columnsOffReport;
      case routesConfig.roleManagement:
        return columnsOffRole;
      default:
        return;
    }
  };

  const rowClassName = (record: any, index: any) => {
    return index % 2 === 0 ? "even-row" : "odd-row";
  };

  return (
    <>
      <Table
        dataSource={currentData}
        columns={handlerColumn()}
        pagination={false}
        bordered
        rowClassName={rowClassName}
        style={{ height: height, maxHeight: height, width: width }}
        className="table"
      />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={totalData}
        pageSizeOptions={pageSizeOptions}
        onChange={handlePaginationChange}
        style={{ margin: "16px auto 0 auto", textAlign: "right" }}
      />
    </>
  );
};

export default TableComponent;
