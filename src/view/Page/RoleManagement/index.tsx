import { AddButtonCustom, TableComponent } from "@/Shared/components";
import { useAppDispatch } from "@/app/hooks";
import { RootState } from "@/app/store";
import routesConfig from "@/config/routes";
import { gettAllRole } from "@/features/role/roleSlice";
import { Header } from "@/layouts";
import { Col, Input, Row, Typography } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function RoleManagementPage() {
  const listRole = useSelector((state: RootState) => state.role.dataListRole);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(gettAllRole());
  }, [dispatch]);
  const { Text, Title } = Typography;
  return (
    <Col span={24} style={{ height: "100%" }}>
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row style={{ paddingLeft: "2rem" }}>
        <Col>
          <Title className="title">Danh sách vai trò</Title>
        </Col>
      </Row>
      <Row
        style={{
          paddingLeft: "2rem",
          paddingRight: "5rem",
          marginTop: "15px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Col
          span={7}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text>Từ khoá</Text>
          <Input.Search
            className="search-antd"
            style={{ width: "100%" }}
            placeholder="Nhập từ khoá"
            // onChange={handleChangeSelectStatus}
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
          nameAdd="Thêm vai trò"
          href={routesConfig.roleCreate}
        />
        <Col span={24}>
          <TableComponent data={listRole} />
        </Col>
      </Row>
    </Col>
  );
}

export default RoleManagementPage;
