import { IEquipment } from "@/Shared/interfaces/EquipmentInterface";
import routesConfig from "@/config/routes";
import { Header } from "@/layouts";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useState } from "react";

export const status = [
  { value: "Tất cả", label: "Tất cả" },
  { value: "Hoạt động", label: "Hoạt động" },
  { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
];

const formCreate: IEquipment = {
  maThietBi: "",
  loaiThietBi: "",
  tenThietBi: "",
  dangNhap: "",
  ip: "",
  password: "",
  dichVuSuDung: "",
};

function RoleCreate() {
  const { Title, Text } = Typography;
  const [formValue, setFormCreateValue] = useState<IEquipment>(formCreate);
  const handlerSubmitCreate = () => {
    // if (
    //   formValue.maThietBi &&
    //   formValue.loaiThietBi &&
    //   formValue.tenThietBi &&
    //   formValue.dangNhap &&
    //   formValue.ip &&
    //   formValue.password &&
    //   formValue.dichVuSuDung
    // ) {
    //   dispatch(addNewEquipment(formValue));
    //   setFormCreateValue(formCreate);
    //   navigate(routesConfig.equipment);
    // }
    // return false;
  };
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
        <Row className="equipment-wrapper">
          <Col span={24}>
            <Row>
              <Title className="equipment-wrapper-title">
                Thông tin dịch vụ
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
                <Row
                  style={{
                    height: "100%",
                  }}
                >
                  <Col
                    span={24}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <Text
                      style={{ marginBottom: "5px" }}
                      className="equipment-input-label"
                    >
                      Mã dịch vụ *
                    </Text>
                    <Input
                      style={{ width: "95%", height: 38 }}
                      placeholder="Nhập mã dịch vụ"
                      // value={formValue.maThietBi}
                      onChange={(e) =>
                        setFormCreateValue((prev) => ({
                          ...prev,
                          maThietBi: e.target.value,
                        }))
                      }
                    />
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "auto",
                    }}
                    span={24}
                  >
                    <Text
                      style={{ marginBottom: "5px" }}
                      className="equipment-input-label"
                    >
                      Mã thiết bị *
                    </Text>
                    <Input
                      style={{ width: "95%", height: 38 }}
                      placeholder="Nhập mã thiết bị"
                      value={formValue.maThietBi}
                      onChange={(e) =>
                        setFormCreateValue((prev) => ({
                          ...prev,
                          maThietBi: e.target.value,
                        }))
                      }
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12} className="equipment-create-group">
                <Text className="equipment-input-label">Loại thiết bị *</Text>
                <Input.TextArea
                  style={{ width: "100%", height: 132 }}
                  placeholder="Nhập mô tả"
                  value={formValue.maThietBi}
                  onChange={(e) =>
                    setFormCreateValue((prev) => ({
                      ...prev,
                      maThietBi: e.target.value,
                    }))
                  }
                />
              </Col>
            </Row>

            <Row style={{ marginTop: 15 }}>
              <Title className="equipment-wrapper-title">Quy tắc cấp số</Title>
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
              href={routesConfig.service}
              className="button-cancel"
            >
              Huỷ bỏ
            </Button>
            <Button className="button-continue" htmlType="submit">
              Thêm dịch vụ
            </Button>
          </Col>
        </Row>
      </Col>
    </Form>
  );
}

export default RoleCreate;