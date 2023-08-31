import { IRole } from "@/Shared/interfaces/RoleInterface";
import { useAppDispatch } from "@/app/hooks";
import routesConfig from "@/config/routes";
import { addNewRole } from "@/features/role/roleSlice";

import { Header } from "@/layouts";
import { Button, Checkbox, Col, Form, Input, Row, Typography } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const status = [
  { value: "Tất cả", label: "Tất cả" },
  { value: "Hoạt động", label: "Hoạt động" },
  { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
];

function RoleCreate() {
  const [formValue, setFormCreateValue] = useState<IRole>({
    describe: "",
    nameRole: "",
  });
  const { Title, Text } = Typography;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handlerSubmitFormCreate = () => {
    if (formValue.describe && formValue.nameRole) {
      dispatch(addNewRole(formValue));
      navigate(routesConfig.roleManagement);
    }
    return false;
  };
  return (
    <Col span={24} style={{ height: "100%" }}>
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Form onFinish={handlerSubmitFormCreate}>
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
                    value={formValue.nameRole}
                    onChange={(e) =>
                      setFormCreateValue((prev) => ({
                        ...prev,
                        nameRole: e.target.value,
                      }))
                    }
                  />
                </Row>
                <Row>
                  <Text className="equipment-input-label">Mô tả:</Text>
                  <Input.TextArea
                    style={{ width: "95%", height: 160 }}
                    placeholder="Nhập mô tả"
                    value={formValue.describe}
                    onChange={(e) =>
                      setFormCreateValue((prev) => ({
                        ...prev,
                        describe: e.target.value,
                      }))
                    }
                  />
                </Row>
              </Col>
              <Col span={12} className="equipment-create-group">
                <Text className="equipment-input-label">
                  Phân quyền chức năng *
                </Text>
                <div
                  style={{
                    width: "470px",
                    height: "340px",
                    backgroundColor: "#FFF2E7",
                    borderRadius: "#FFF2E7",
                    padding: "15px 0 10px 20px",
                  }}
                >
                  <Row
                    className="d-flex flex-direction-column"
                    style={{ marginBottom: 18 }}
                  >
                    <Title
                      style={{
                        margin: 0,
                        fontSize: "1.1rem",
                        color: "#FF7506",
                        marginBottom: 10,
                      }}
                    >
                      Nhóm chức năng A
                    </Title>
                    <Col
                      span={24}
                      className="d-flex flex-direction-column"
                      style={{ gap: 6 }}
                    >
                      <Checkbox>Tất cả</Checkbox>
                      <Checkbox>Chức năng x</Checkbox>
                      <Checkbox>Chức năng y</Checkbox>
                      <Checkbox>Chức năng z</Checkbox>
                    </Col>
                  </Row>
                  <Row className="d-flex flex-direction-column">
                    <Title
                      style={{
                        margin: 0,
                        fontSize: "1.1rem",
                        color: "#FF7506",
                        marginBottom: 10,
                      }}
                    >
                      Nhóm chức năng B
                    </Title>
                    <Col
                      span={24}
                      className="d-flex flex-direction-column"
                      style={{ gap: 6 }}
                    >
                      <Checkbox>Tất cả</Checkbox>
                      <Checkbox>Chức năng x</Checkbox>
                      <Checkbox>Chức năng y</Checkbox>
                      <Checkbox>Chức năng z</Checkbox>
                    </Col>
                  </Row>
                </div>
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
            marginTop: 20,
            width: 1000,
          }}
        >
          <Col
            span={24}
            style={{ display: "flex", justifyContent: "center", gap: 20 }}
          >
            <Button
              type="link"
              href={routesConfig.roleManagement}
              className="button-cancel"
            >
              Huỷ bỏ
            </Button>
            <Button className="button-continue" htmlType="submit">
              Thêm
            </Button>
          </Col>
        </Row>
      </Form>
    </Col>
  );
}

export default RoleCreate;
