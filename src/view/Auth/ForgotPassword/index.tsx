import images from "@/Shared/assets/images";
import { useAppDispatch } from "@/app/hooks";
import { RootState } from "@/app/store";
import routesConfig from "@/config/routes";
import { forGotPassword } from "@/features/auth/authSlice";
import { Col, Form, Image, Typography, Row, Input, Button } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const loadingResetPassword = useSelector(
    (state: RootState) => state.auth.loadingResetPassword
  );
  const { Text, Title } = Typography;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (loadingResetPassword) {
      navigate(routesConfig.login);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingResetPassword]);
  const handlerSubmitForgotPassword = () => {
    dispatch(forGotPassword(email));
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
            onFinish={handlerSubmitForgotPassword}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "40px",
            }}
          >
            <Title style={{ margin: "0 0 10px 0", fontSize: "1.5rem" }}>
              Đặt lại mật khẩu
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
                Vui lòng nhập email để đặt lại mật khẩu của bạn *
              </Text>
              <Input
                placeholder="Nhập email"
                type="text"
                style={{ width: "100%", height: "2.2rem" }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={{ display: "flex", marginTop: "25px", gap: "20px" }}>
              <Button
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#FF9138",
                  color: "#FF9138",
                  height: "2.4rem",
                  width: "8.2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                type="link"
                href={routesConfig.login}
              >
                Huỷ
              </Button>
              <Button
                style={{
                  backgroundColor: "#FF9138",
                  color: "white",
                  height: "2.4rem",
                  width: "8.2rem",
                }}
                type="link"
                href={routesConfig.changePassword}
              >
                Tiếp tục
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Col>
  );
}

export default ForgotPassword;
