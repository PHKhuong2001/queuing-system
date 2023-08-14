import { AddButtonCustom, TableComponent } from "@/Shared/components";
import routesConfig from "@/config/routes";
import { Header } from "@/layouts";
import { Col, Row, Select, Typography } from "antd";
function RoleManagementPage() {
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
          <Title className="title">Quản lý vai trò</Title>
        </Col>
      </Row>
      <Row
        style={{ paddingLeft: "2rem", paddingRight: "5rem", marginTop: "15px" }}
      >
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
            options={[
              { value: "all", label: "Tất cả" },
              { value: "active", label: "Hoạt động" },
              { value: "shutDown", label: "Ngưng hoạt động" },
            ]}
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
          href={routesConfig.equipment}
        />
        <Col span={24}>
          <TableComponent data={[]} />
        </Col>
      </Row>
    </Col>
  );
}

export default RoleManagementPage;
