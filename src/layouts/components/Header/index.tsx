import { NotifyIcon } from "@/Shared/components/icon";
import { Avatar, Breadcrumb, Button, Col, Row, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import routesConfig from "@/config/routes";

function Header() {
  const { Text, Title } = Typography;
  return (
    <Row
      style={{
        height: "3.5rem",
        display: "flex",
        alignItems: "center",
        // borderBottom: "1px solid black",
        width: "100%",
        paddingLeft: "32px",
        paddingRight: "3rem",
      }}
    >
      <Col span={12}>
        <Breadcrumb
          separator=">"
          items={[
            {
              title: "Home",
            },
            {
              title: "Application Center",
              href: "",
            },
            {
              title: "Application List",
              href: "",
            },
            {
              title: "An Application",
            },
          ]}
        />
      </Col>
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
    </Row>
  );
}

export default Header;
