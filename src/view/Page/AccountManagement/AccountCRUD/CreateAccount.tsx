import { DropdownIcon } from "@/Shared/components/icon";
import { IAccount } from "@/Shared/interfaces/AccountInterface";
import { useAppDispatch } from "@/app/hooks";
import routesConfig from "@/config/routes";
import { addNewAccount } from "@/features/auth/authSlice";
import { Header } from "@/layouts";
import { Button, Col, Form, Input, Row, Select, Typography } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const status = [
  { value: "Tất cả", label: "Tất cả" },
  { value: "Hoạt động", label: "Hoạt động" },
  { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
];

const formAccount: IAccount = {
  name: "",
  phoneNumber: "",
  email: "",
  role: "",
  status: "",
  account: "",
  password: "",
};

function AccountCreate() {
  const { Title, Text } = Typography;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formValue, setFormCreateValue] = useState<IAccount>(formAccount);
  const [validConfirmPassword, setValidConfirmPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const handlerSubmitCreate = () => {
    if (
      formValue.name &&
      formValue.phoneNumber &&
      formValue.email &&
      formValue.role &&
      formValue.status &&
      formValue.password &&
      formValue.account
    ) {
      if (formValue.password === confirmPassword) {
        dispatch(addNewAccount(formValue));
        setFormCreateValue(formAccount);
        navigate(routesConfig.accountManagement);
      } else {
        setValidConfirmPassword(false);
      }
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
      <Row style={{ paddingLeft: "2rem" }}>
        <Col>
          <Title className="title">Quản lý tài khoản</Title>
        </Col>
      </Row>
      <Form onFinish={handlerSubmitCreate}>
        <Row className="equipment-wrapper">
          <Col span={24}>
            <Row>
              <Title className="equipment-wrapper-title">
                Thông tin tài khoản
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
                <Text className="equipment-input-label">Họ tên *</Text>
                <Input
                  style={{ width: "95%", height: 38 }}
                  placeholder="Nhập họ tên"
                  onChange={(e) =>
                    setFormCreateValue((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              </Col>
              <Col span={12} className="equipment-create-group">
                <Text className="equipment-input-label">Tên đăng nhập *</Text>
                <Input
                  style={{ width: "95%", height: 38 }}
                  placeholder="Nhập tên đăng nhập"
                  onChange={(e) =>
                    setFormCreateValue((prev) => ({
                      ...prev,
                      account: e.target.value,
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
                <Text className="equipment-input-label">Số điện thoại *</Text>
                <Input
                  style={{ width: "95%", height: 38 }}
                  placeholder="Nhập số diện thoại"
                  onChange={(e) =>
                    setFormCreateValue((prev) => ({
                      ...prev,
                      phoneNumber: e.target.value,
                    }))
                  }
                />
              </Col>
              <Col span={12} className="equipment-create-group">
                <Text className="equipment-input-label">Mật khẩu *</Text>
                <Input.Password
                  style={{ width: "95%", height: 38 }}
                  placeholder="Nhập mật khẩu"
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
              <Col span={12} className="equipment-create-group">
                <Text className="equipment-input-label">Email *</Text>
                <Input
                  style={{ width: "95%", height: 38 }}
                  placeholder="Nhập email"
                  onChange={(e) =>
                    setFormCreateValue((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </Col>
              <Col span={12} className="equipment-create-group">
                <Text className="equipment-input-label">
                  Nhập lại mật khẩu: *
                </Text>
                <Input.Password
                  style={{ width: "95%", height: 38 }}
                  placeholder="Nhập lại mật khẩu"
                  onChange={(e) => setConfirmPassword((prev) => e.target.value)}
                  status={validConfirmPassword ? undefined : "error"}
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
                <Text className="equipment-input-label">Vai trò *</Text>
                <Select
                  style={{ width: "95%", height: 38 }}
                  placeholder="Chọn vai trò"
                  className="equipment-select-create"
                  suffixIcon={<DropdownIcon></DropdownIcon>}
                  onChange={(e) =>
                    setFormCreateValue((prev) => ({
                      ...prev,
                      role: e,
                    }))
                  }
                  options={[
                    { value: "Kế toán", label: "Kế toán" },
                    { value: "Quản lý", label: "Quản lý" },
                    { value: "Admin", label: "Admin" },
                  ]}
                />
              </Col>
              <Col span={12} className="equipment-create-group">
                <Text className="equipment-input-label">Tình trạng *</Text>
                <Select
                  style={{ width: "95%", height: 38 }}
                  placeholder="Chọn tình trạng"
                  className="equipment-select-create"
                  onChange={(e) =>
                    setFormCreateValue((prev) => ({
                      ...prev,
                      status: e,
                    }))
                  }
                  suffixIcon={<DropdownIcon></DropdownIcon>}
                  options={[
                    { value: "Tất cả", label: "Tất cả" },
                    { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
                    { value: "Hoạt động", label: "Hoạt động" },
                  ]}
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
              href={routesConfig.accountManagement}
              onClick={() => setFormCreateValue(formAccount)}
              className="button-cancel"
            >
              Huỷ bỏ
            </Button>
            <Button className="button-continue" htmlType="submit">
              Thêm tài khoản
            </Button>
          </Col>
        </Row>
      </Form>
    </Col>
  );
}

export default AccountCreate;
