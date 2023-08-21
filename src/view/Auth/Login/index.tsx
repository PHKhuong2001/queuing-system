import images from "@/Shared/assets/images";
import { IAccount } from "@/Shared/interfaces/AccountInterface";
import { useAppDispatch } from "@/app/hooks";
import { RootState } from "@/app/store";
import routesConfig from "@/config/routes";
import { loginAuth } from "@/features/auth/authSlice";
import { Col, Form, Image, Typography, Row, Input, Button, Spin } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

const formLogin: IAccount = {
  password: "",
  account: "",
};

function Login() {
  const { Text } = Typography;
  const loginValid = useSelector((state: RootState) => state.auth.loginValid);
  const loading = useSelector((state: RootState) => state.auth.loading);
  const success = useSelector((state: RootState) => state.auth.success);
  const navigate = useNavigate();
  const [formLoginValue, setFormLoginValue] = useState(formLogin);
  const dispatch = useAppDispatch();
  const handlerSubmitLogin = () => {
    if (formLoginValue.account && formLoginValue.password) {
      dispatch(loginAuth(formLoginValue));
    }
    return false;
  };
  useEffect(() => {
    if (success) {
      navigate(routesConfig.dashboard);
    }
  }, [success, navigate]);
  return (
    <Col
      span={24}
      className="position-relative"
      style={{
        height: "100%",
        paddingTop: "45px",
      }}
    >
      <Row>
        <Col span={24}>
          <Image src={images.logo} width={170} height={136} />
        </Col>
      </Row>
      <Row style={{ marginTop: "45px" }}>
        <Col span={24}>
          <Form
            onFinish={handlerSubmitLogin}
            className="d-flex justify-content-center align-items-center"
            style={{
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
                value={formLoginValue.account}
                status={loginValid.account ? undefined : "error"}
                onChange={(e) =>
                  setFormLoginValue((prev) => ({
                    ...prev,
                    account: e.target.value,
                  }))
                }
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
                status={loginValid.password ? undefined : "error"}
                value={formLoginValue.password}
                onChange={(e) =>
                  setFormLoginValue((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
              {loginValid.account && loginValid.password ? (
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
              ) : (
                <Text
                  style={{
                    marginTop: "3px",
                    color: "#E73F3F",
                    fontSize: "0.8rem",
                  }}
                >
                  Sai tên tài khoản hoặc mật khẩu
                </Text>
              )}
              {}
            </div>
            <Button
              style={{
                backgroundColor: "#FF9138",
                color: "white",
                height: "2.4rem",
                width: "8.2rem",
                marginTop: "5px",
              }}
              htmlType="submit"
            >
              Đăng nhập
            </Button>
            {loginValid.account && loginValid.password ? (
              <></>
            ) : (
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
            )}
          </Form>
        </Col>
      </Row>
      {loading ? (
        <Col
          span={24}
          style={{
            zIndex: 9,
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
          }}
          className="position-absolute d-flex"
        >
          <Spin
            indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />}
            style={{ zIndex: 10, margin: "auto" }}
          />
        </Col>
      ) : (
        <></>
      )}
    </Col>
  );
}

export default Login;
