import { Header } from "@/layouts";
import { Checkbox, Col, Form, Input, Row, Typography } from "antd";

export const status = [
  { value: "Tất cả", label: "Tất cả" },
  { value: "Hoạt động", label: "Hoạt động" },
  { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
];

function ServiceDetail() {
  const { Title, Text } = Typography;

  const handlerSubmitCreate = () => {};
  return (
    <Form onFinish={handlerSubmitCreate}>
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
        <Row
          className="equipment-wrapper"
          style={{
            backgroundColor: "transparent",
            padding: 0,
          }}
        >
          <Col span={24}>
            <Row
              style={{
                marginTop: 5,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Col span={9} className="equipment-create-group">
                <Row
                  style={{
                    height: "500px",
                    maxHeight: "500px",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#ffffff",
                    padding: "16px 10px 24px 24px",
                    borderRadius: "12px",
                  }}
                >
                  <Row>
                    <Title className="equipment-wrapper-title">
                      Thông tin dịch vụ
                    </Title>
                  </Row>
                  <Row style={{ height: "20px", marginBottom: "10px" }}>
                    <Col span={7} style={{ height: "100%" }}>
                      <Text
                        style={{ marginBottom: "5px" }}
                        className="equipment-input-label"
                      >
                        Mã dịch vụ:
                      </Text>
                    </Col>
                    <Col span={12} style={{ height: "100%" }}>
                      <Text style={{ marginBottom: "5px" }}>Mã dịch vụ</Text>
                    </Col>
                  </Row>
                  <Row style={{ height: "20px", marginBottom: "10px" }}>
                    <Col span={7} style={{ height: "100%" }}>
                      <Text
                        style={{ marginBottom: "5px" }}
                        className="equipment-input-label"
                      >
                        Tên dịch vụ:
                      </Text>
                    </Col>
                    <Col span={12} style={{ height: "100%" }}>
                      <Text style={{ marginBottom: "5px" }}>Mã dịch vụ</Text>
                    </Col>
                  </Row>
                  <Row style={{ height: "20px", marginBottom: "10px" }}>
                    <Col span={7} style={{ height: "100%" }}>
                      <Text
                        style={{ marginBottom: "5px" }}
                        className="equipment-input-label"
                      >
                        Mô tả:
                      </Text>
                    </Col>
                    <Col span={12} style={{ height: "100%" }}>
                      <Text style={{ marginBottom: "5px" }}>
                        Chuyên các bệnh lý về tim
                      </Text>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 20 }}>
                    <Title className="equipment-wrapper-title">
                      Quy tắc cấp số
                    </Title>
                  </Row>
                  <Row style={{ marginTop: 5 }}>
                    <Col
                      span={7}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Text>Tăng tự động:</Text>
                    </Col>
                    <Col
                      span={12}
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      <Input style={{ width: "32%" }} />
                      <Text>đến</Text>
                      <Input style={{ width: "32%" }} />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 10 }}>
                    <Col
                      span={7}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Text>Prefix:</Text>
                    </Col>
                    <Col
                      span={12}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Input style={{ width: "32%" }} />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 10 }}>
                    <Col style={{ display: "flex", alignItems: "center" }}>
                      <Text>Reset mỗi ngày</Text>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 10 }}>
                    <Col style={{ display: "flex", alignItems: "center" }}>
                      <Text>Ví dụ: 201-2001</Text>
                    </Col>
                  </Row>
                </Row>
              </Col>
              <Col span={12} className="equipment-create-group">
                <Text className="equipment-input-label">Loại thiết bị</Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Form>
  );
}

export default ServiceDetail;
