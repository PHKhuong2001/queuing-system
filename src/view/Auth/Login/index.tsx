import images from "@/Shared/assets/images";
import routesConfig from "@/config/routes";
import { Col, Form, Image, Typography, Row, Input, Button } from "antd";
import { Link } from "react-router-dom";

function Login() {
  const { Text } = Typography;
  const handlerSubmitLogin = () => {
    return false;
  };
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
            onFinish={handlerSubmitLogin}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "300px",
                textAlign: "left",
                marginBottom: "13px",
              }}
            >
              <Text style={{ marginBottom: "4px", fontSize: "1rem" }}>
                Tên đăng nhập *
              </Text>
              <Input
                placeholder="Nhập tài khoản"
                type="text"
                style={{ width: "100%", height: "2.2rem" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "300px",
                textAlign: "left",
                marginBottom: "10px",
              }}
            >
              <Text style={{ marginBottom: "4px", fontSize: "1rem" }}>
                Mật khẩu *
              </Text>
              <Input.Password
                placeholder="Nhập mật khẩu"
                type="password"
                style={{ width: "100%", height: "2.2rem" }}
              />
              <Link
                to={routesConfig.forgotPassword}
                style={{
                  marginTop: "3px",
                  color: "#E73F3F",
                  fontSize: "0.8rem",
                }}
              >
                Quên mật khẩu?
              </Link>
            </div>
            <Button
              style={{
                backgroundColor: "#FF9138",
                color: "white",
                height: "2.4rem",
                width: "8.2rem",
                marginTop: "5px",
              }}
            >
              Đăng nhập
            </Button>
          </Form>
        </Col>
      </Row>
    </Col>
  );
}

export default Login;
