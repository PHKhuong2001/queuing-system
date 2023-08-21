import { NotifyIcon } from "@/Shared/components/icon";
import routesConfig from "@/config/routes";
import { Avatar, Button, Col, Typography } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

function InformationComponent() {
  const { Text, Title } = Typography;
  return (
    <Col
      span={12}
      style={{
        height: "100%",
        lineHeight: 0,
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        gap: 25,
      }}
    >
      <Button
        icon={<NotifyIcon />}
        shape="circle"
        className="button-notify"
      ></Button>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Link to={routesConfig.personalInformation}>
          <Avatar icon={<UserOutlined />} size={40} />
        </Link>
        <div
          style={{
            height: "100%",
            width: "127px",
            maxWidth: "127px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: "0.7rem" }}>Xin chào</Text>
          <Link to={routesConfig.personalInformation}>
            <Title style={{ margin: 0, fontSize: "1rem" }}>
              Lê Quỳnh Ái Vân
            </Title>
          </Link>
        </div>
      </div>
    </Col>
  );
}

export default InformationComponent;
