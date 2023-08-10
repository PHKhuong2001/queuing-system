import { columnsOffEquipment } from "@/view/Page/Equipment/EquipmentColumn";
import { Table, Pagination } from "antd";
import { useEffect, useState } from "react";

const pageSizeOptions = ["5", "6", "7", "8", "10", "20"]; // Các tùy chọn số lượng hàng trên mỗi trang
interface TableProps {
  data: any[];
}

const TableComponent = ({ data }: TableProps) => {
  const [pageSize, setPageSize] = useState<any>(
    parseInt(pageSizeOptions[1], 10)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState<any[]>([]);
  const [totalData, setTotalData] = useState<number>(0);

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

  const rowClassName = (record: any, index: any) => {
    return index % 2 === 0 ? "even-row" : "odd-row";
  };

  return (
    <>
      <Table
        dataSource={currentData}
        columns={columnsOffEquipment}
        pagination={false}
        bordered
        rowClassName={rowClassName}
        style={{ height: "400px", maxHeight: "400px" }}
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