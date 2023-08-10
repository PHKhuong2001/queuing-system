import routesConfig from "@/config/routes";
import { Header } from "@/layouts";
import { Button, Col, Input, Row, Select, Typography } from "antd";

export const status = [
  { value: "Tất cả", label: "Tất cả" },
  { value: "Hoạt động", label: "Hoạt động" },
  { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
];

function EquipmentUpdate() {
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
          <Title className="title">Quản lý thiết bị</Title>
        </Col>
      </Row>
      <Row
        className="equipment-wrapper"
        // style={{ padding: "8px 8px 0 8px" }}
      >
        <Col span={24}>
          <Row>
            <Title className="equipment-wrapper-title">
              Thông tin thiết bị
            </Title>
          </Row>
          <Row
            style={{
              marginTop: 5,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Col span={12} className="equipment-create-group">
              <Text className="equipment-input-label">Mã thiết bị *</Text>
              <Input
                style={{ width: "95%", height: 38 }}
                placeholder="Nhập mã thiết bị"
              />
            </Col>
            <Col span={12} className="equipment-create-group">
              <Text className="equipment-input-label">Loại thiết bị *</Text>
              <Select
                style={{ width: "95%", height: 38 }}
                placeholder="Chọn loại thiết bị"
                className="equipment-select-create"
                options={[
                  { value: "Kiosk", label: "Kiosk" },
                  { value: "Display counter", label: "Display counter" },
                ]}
              />
            </Col>
          </Row>
          <Row
            style={{
              marginTop: 15,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Col span={12} className="equipment-create-group">
              <Text className="equipment-input-label">Mã thiết bị *</Text>
              <Input
                style={{ width: "95%", height: 38 }}
                placeholder="Nhập mã thiết bị"
              />
            </Col>
            <Col span={12} className="equipment-create-group">
              <Text className="equipment-input-label">Mã thiết bị *</Text>
              <Input
                style={{ width: "95%", height: 38 }}
                placeholder="Nhập mã thiết bị"
              />
            </Col>
          </Row>
          <Row
            style={{
              marginTop: 15,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Col span={12} className="equipment-create-group">
              <Text className="equipment-input-label">Mã thiết bị *</Text>
              <Input
                style={{ width: "95%", height: 38 }}
                placeholder="Nhập mã thiết bị"
              />
            </Col>
            <Col span={12} className="equipment-create-group">
              <Text className="equipment-input-label">Mã thiết bị *</Text>
              <Input
                style={{ width: "95%", height: 38 }}
                placeholder="Nhập mã thiết bị"
              />
            </Col>
          </Row>
          <Row
            style={{
              marginTop: 15,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Col span={24} className="equipment-create-group">
              <Text className="equipment-input-label">Mã thiết bị *</Text>
              <Input
                style={{ width: "97.6%", height: 38 }}
                placeholder="Nhập mã thiết bị"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          paddingLeft: "2rem",
          marginTop: 30,
          width: 1000,
        }}
      >
        <Col
          span={24}
          style={{ display: "flex", justifyContent: "center", gap: 20 }}
        >
          <Button
            type="link"
            href={routesConfig.equipment}
            className="button-cancel"
          >
            Huỷ bỏ
          </Button>
          <Button className="button-continue">Thêm thiết bị</Button>
        </Col>
      </Row>
    </Col>
  );
}

export default EquipmentUpdate;
