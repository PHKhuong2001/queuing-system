import { IEquipment } from "@/Shared/interfaces/EquipmentInterface";
import { useAppDispatch } from "@/app/hooks";
import routesConfig from "@/config/routes";
import { addNewEquipment } from "@/features/equipment/equipmentSlice";
import { Header } from "@/layouts";
import { Button, Col, Form, Input, Row, Select, Typography } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

function EquipmentCreate() {
  const { Title, Text } = Typography;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formValue, setFormCreateValue] = useState<IEquipment>(formCreate);
  const handlerSubmitCreate = () => {
    if (
      formValue.maThietBi &&
      formValue.loaiThietBi &&
      formValue.tenThietBi &&
      formValue.dangNhap &&
      formValue.ip &&
      formValue.password &&
      formValue.dichVuSuDung
    ) {
      dispatch(addNewEquipment(formValue));
      setFormCreateValue(formCreate);
      navigate(routesConfig.equipment);
    }
    return false;
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
            <Title className="title">Quản lý thiết bị</Title>
          </Col>
        </Row>
        <Row className="equipment-wrapper">
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
                  value={formValue.maThietBi}
                  onChange={(e) =>
                    setFormCreateValue((prev) => ({
                      ...prev,
                      maThietBi: e.target.value,
                    }))
                  }
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
                  value={formValue.loaiThietBi}
                  onChange={(e) =>
                    setFormCreateValue((prev) => ({
                      ...prev,
                      loaiThietBi: e,
                    }))
                  }
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
                <Text className="equipment-input-label">Tên thiết bị: *</Text>
                <Input
                  style={{ width: "95%", height: 38 }}
                  placeholder="Nhập tên thiết bị"
                  value={formValue.tenThietBi}
                  onChange={(e) =>
                    setFormCreateValue((prev) => ({
                      ...prev,
                      tenThietBi: e.target.value,
                    }))
                  }
                />
              </Col>
              <Col span={12} className="equipment-create-group">
                <Text className="equipment-input-label">Tên đăng nhập: *</Text>
                <Input
                  style={{ width: "95%", height: 38 }}
                  placeholder="Nhập tên đăng nhập"
                  onChange={(e) =>
                    setFormCreateValue((prev) => ({
                      ...prev,
                      dangNhap: e.target.value,
                    }))
                  }
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
                <Text className="equipment-input-label">Địa chỉ IP: *</Text>
                <Input
                  style={{ width: "95%", height: 38 }}
                  placeholder="Nhập địa chỉ IP"
                  value={formValue.ip}
                  onChange={(e) =>
                    setFormCreateValue((prev) => ({
                      ...prev,
                      ip: e.target.value,
                    }))
                  }
                />
              </Col>
              <Col span={12} className="equipment-create-group">
                <Text className="equipment-input-label">Mật khẩu: *</Text>
                <Input
                  style={{ width: "95%", height: 38 }}
                  placeholder="Nhập mật khẩu"
                  value={formValue.password}
                  onChange={(e) =>
                    setFormCreateValue((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
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
                <Text className="equipment-input-label">
                  Dịch vụ sử dụng: *
                </Text>
                <Input
                  style={{ width: "97.6%", height: 38 }}
                  placeholder="Nhập mã thiết bị"
                  value={formValue.dichVuSuDung}
                  onChange={(e) =>
                    setFormCreateValue((prev) => ({
                      ...prev,
                      dichVuSuDung: e.target.value,
                    }))
                  }
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
            <Button className="button-continue" htmlType="submit">
              Thêm thiết bị
            </Button>
          </Col>
        </Row>
      </Col>
    </Form>
  );
}

export default EquipmentCreate;
