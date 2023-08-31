import images from "@/Shared/assets/images";
import { useAppDispatch } from "@/app/hooks";
import { RootState } from "@/app/store";
import routesConfig from "@/config/routes";
import { updateAccountPassword } from "@/features/auth/authSlice";
import { Col, Form, Image, Typography, Row, Input, Button } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const loadingResetPassword = useSelector(
    (state: RootState) => state.auth.loadingResetPassword
  );
  const dataAccountResetPassword = useSelector(
    (state: RootState) => state.auth.dataAccountResetPassword
  );
  const { Text, Title } = Typography;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [passwordConfirm, setPasswordConfirm] = useState({
    password: "",
    confirm: "",
  });
  const [valid, setValid] = useState<boolean>(true);
  useEffect(() => {
    if (!loadingResetPassword) {
      navigate(routesConfig.forgotPassword);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingResetPassword]);
  console.log(dataAccountResetPassword);

  const handlerSubmitResetPassword = () => {
    if (
      dataAccountResetPassword.email &&
      passwordConfirm.confirm === passwordConfirm.password
    ) {
      dispatch(
        updateAccountPassword({
          email: dataAccountResetPassword.email,
          password: passwordConfirm.password,
        })
      );
      setValid(true);
      navigate(routesConfig.login);
    } else {
      setValid(false);
    }
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
                value={passwordConfirm.password}
                onChange={(e) =>
                  setPasswordConfirm((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
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
                status={valid ? undefined : "error"}
                value={passwordConfirm.confirm}
                onChange={(e) =>
                  setPasswordConfirm((prev) => ({
                    ...prev,
                    confirm: e.target.value,
                  }))
                }
              />
            </div>

            <Button
              style={{
                backgroundColor: "#FF9138",
                color: "white",
                height: "2.4rem",
                width: "8.2rem",
              }}
              htmlType="submit"
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
