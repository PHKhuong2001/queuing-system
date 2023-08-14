import { AddButtonCustom, TableComponent } from "@/Shared/components";
import routesConfig from "@/config/routes";
import { Header } from "@/layouts";
import { Col, DatePicker, Row, Select, Typography } from "antd";
import { dataListService } from "./ServiceColumn";
function ServicePage() {
  const { Title, Text } = Typography;
  return (
    <Col span={24} style={{ height: "100%" }}>
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row style={{ paddingLeft: "2rem" }}>
        <Col>
          <Title className="title">Quản lý dịch vụ</Title>
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
            className="equipment-select"
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
          <Row>
            <Text>Chọn thời gian</Text>
          </Row>
          <Row style={{ display: "flex" }}>
            <Col span={10}>
              <DatePicker
                style={{ width: "90%", height: 38 }}
                // onChange={handleChangeSelectStatus}
              />
            </Col>
            <Col span={10}>
              <DatePicker
                style={{ width: "90%", height: 38 }}
                // onChange={handleChangeSelectStatus}
              />
            </Col>
          </Row>
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
          nameAdd="Thêm Dịch vụ"
          href={routesConfig.serviceCreate}
        />
        <Col span={24}>
          <TableComponent data={dataListService} />
        </Col>
      </Row>
    </Col>
  );
}

export default ServicePage;
