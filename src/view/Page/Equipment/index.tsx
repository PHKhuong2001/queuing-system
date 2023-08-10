import { AddButtonCustom, TableComponent } from "@/Shared/components";
import routesConfig from "@/config/routes";
import { Header } from "@/layouts";
import { Col, Row, Select, Typography } from "antd";
import { useAppDispatch } from "@/app/hooks";
import { useEffect } from "react";
import { getAllEquipment } from "@/features/equipment/equipmentSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
export const status = [
  { value: "Tất cả", label: "Tất cả" },
  { value: "Hoạt động", label: "Hoạt động" },
  { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
];

function Equipment() {
  const { Title, Text } = Typography;
  const equipmentList = useSelector((state: RootState) => state.equipment.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllEquipment());
  }, [dispatch]);
  return (
    <Col span={24} style={{ height: "100%" }}>
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row style={{ paddingLeft: "2rem" }}>
        <Col>
          <Title className="title">Danh sách thiết bị</Title>
        </Col>
      </Row>
      <Row style={{ paddingLeft: "2rem", paddingRight: "5rem" }}>
        <Col
          span={7}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text>Trạng thái hoạt động</Text>
          <Select
            defaultValue="Tất cả"
            style={{ width: "90%" }}
            // onChange={handleChangeSelectStatus}
            options={[
              { value: "all", label: "Tất cả" },
              { value: "active", label: "Hoạt động" },
              { value: "shutDown", label: "Ngưng hoạt động" },
            ]}
          />
        </Col>
        <Col
          span={10}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text>Trạng thái kết nối</Text>
          <Select
            defaultValue="Tất cả"
            style={{ width: "70%" }}
            // onChange={handleChangeSelectStatus}
            options={status}
          />
        </Col>
        <Col
          span={7}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text>Từ khoá</Text>
          <Select
            defaultValue="Tất cả"
            style={{ width: "100%" }}
            // onChange={handleChangeSelectStatus}
            options={[
              { value: "all", label: "Tất cả" },
              { value: "active", label: "Hoạt động" },
              { value: "shutDown", label: "Ngưng hoạt động" },
            ]}
          />
        </Col>
      </Row>
      <Row
        style={{
          paddingLeft: "2rem",
          paddingRight: "5rem",
          marginTop: "0.8rem",
          position: "relative",
        }}
      >
        <AddButtonCustom
          nameAdd="Thêm thiết bị"
          href={routesConfig.equipmentCreate}
        />
        <Col span={24}>
          <TableComponent data={equipmentList} />
        </Col>
      </Row>
    </Col>
  );
}

export default Equipment;
