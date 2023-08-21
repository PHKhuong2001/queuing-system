import images from "@/Shared/assets/images";
import { Col, Form, Image, Typography, Row, Input, Button } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const { Text, Title } = Typography;
  const handlerSubmitResetPassword = () => {
    return false;
  };
  const navigate = useNavigate();
  useEffect(() => {});
  return (
    <Col
      span={24}
      style={{
        height: "100%",
      }}
    >
      <Row style={{ marginTop: "45px" }}>
        <Col span={24}>
          <Image src={images.logo} width={170} height={136} />
        </Col>
      </Row>
      <Row style={{ marginTop: "45px" }}>
        <Col span={24}>
          <Form
            onFinish={handlerSubmitResetPassword}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "40px",
            }}
          >
            <Title style={{ margin: "0 0 10px 0", fontSize: "1.5rem" }}>
              Đặt lại mật khẩu mới
            </Title>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "355px",
                textAlign: "left",
                marginBottom: "13px",
              }}
            >
              <Text style={{ marginBottom: "4px", fontSize: "1rem" }}>
                Mật khẩu *
              </Text>
              <Input.Password
                placeholder="Nhập mật khẩu mới"
                type="text"
                style={{ width: "100%", height: "2.2rem" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "355px",
                textAlign: "left",
                marginBottom: "13px",
              }}
            >
              <Text style={{ marginBottom: "4px", fontSize: "1rem" }}>
                Nhập lại mật khẩu *
              </Text>
              <Input.Password
                placeholder="Nhập lại mật khẩu"
                type="text"
                style={{ width: "100%", height: "2.2rem" }}
              />
            </div>

            <Button
              style={{
                backgroundColor: "#FF9138",
                color: "white",
                height: "2.4rem",
                width: "8.2rem",
              }}
            >
              Xác nhận
            </Button>
          </Form>
        </Col>
      </Row>
    </Col>
  );
}

export default ResetPassword;
