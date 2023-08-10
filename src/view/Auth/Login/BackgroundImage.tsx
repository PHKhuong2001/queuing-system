import images from "@/Shared/assets/images";
import routesConfig from "@/config/routes";
import { Col, Image } from "antd";
import { useLocation } from "react-router-dom";

function BackgroundLogin() {
  const location = useLocation();
  return (
    <Col
      span={24}
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src={
          location.pathname === routesConfig.changePassword ||
          location.pathname === routesConfig.forgotPassword
            ? images.backgroundChangePassword
            : images.backgroundLogin
        }
        width={550}
        height={550}
        preview={false}
      />
    </Col>
  );
}

export default BackgroundLogin;
