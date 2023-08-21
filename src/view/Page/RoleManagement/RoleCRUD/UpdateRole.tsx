import { IEquipment } from "@/Shared/interfaces/EquipmentInterface";
import routesConfig from "@/config/routes";

import { Header } from "@/layouts";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

export const status = [
  { value: "Tất cả", label: "Tất cả" },
  { value: "Hoạt động", label: "Hoạt động" },
  { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
];
const formUpdate: IEquipment = {
  maThietBi: "",
  loaiThietBi: "",
  tenThietBi: "",
  dangNhap: "",
  ip: "",
  password: "",
  dichVuSuDung: "",
};

function RoleUpdate() {
  // const equipment = useSelector(
  //   (state: RootState) => state.equipment.equipmentUpdate
  // );
  const [formValue, setFormUpdateValue] = useState(formUpdate);
  const { Title, Text } = Typography;
  // const { id } = useParams();

  // useEffect(() => {
  //   // Sử dụng useEffect để cập nhật giá trị formValue khi equipment thay đổi
  //   if (equipment) {
  //     setFormUpdateValue(equipment);
  //   }
  // }, [equipment]);

  // useEffect(() => {
  //   dispatch(findEquipmentUpdate(id || ""));
  // }, [dispatch, id]);

  const handlerSubmitFormUpdate = () => {
    // setFormUpdateValue(formUpdate);
    // navigate(routesConfig.equipment);
    // return false;
  };
  return (
    <Col span={24} style={{ height: "100%" }}>
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Form onFinish={handlerSubmitFormUpdate}>
        <Row style={{ paddingLeft: "2rem" }}>
          <Col>
            <Title className="title">Danh sách vai trò</Title>
          </Col>
        </Row>
        <Row className="equipment-wrapper">
          <Col span={24}>
            <Row>
              <Title className="equipment-wrapper-title">
                Thông tin vai trò
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
                <Row style={{ marginBottom: 10 }}>
                  <Text className="equipment-input-label">Tên vai trò *</Text>
                  <Input
                    style={{ width: "95%", height: 38 }}
                    placeholder="Nhập tên vai trò"
                    value={formValue.maThietBi}
                    onChange={(e) =>
                      setFormUpdateValue((prev) => ({
                        ...prev,
                        maThietBi: e.target.value,
                      }))
                    }
                  />
                </Row>
                <Row>
                  <Text className="equipment-input-label">Mô tả:</Text>
                  <Input.TextArea
                    style={{ width: "95%", height: 160 }}
                    placeholder="Nhập mã thiết bị"
                    value={formValue.maThietBi}
                    onChange={(e) =>
                      setFormUpdateValue((prev) => ({
                        ...prev,
                        maThietBi: e.target.value,
                      }))
                    }
                  />
                </Row>
              </Col>
              <Col span={12} className="equipment-create-group">
                <Text className="equipment-input-label">Loại thiết bị *</Text>
                <Row>
                  <Col span={24}></Col>
                </Row>
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
              Cập nhật
            </Button>
          </Col>
        </Row>
      </Form>
    </Col>
  );
}

export default RoleUpdate;
