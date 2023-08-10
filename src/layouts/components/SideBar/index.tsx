import { Col, Row, Image, Typography, Button } from "antd";
import images from "@/Shared/assets/images";
import MenuItem from "./MenuItem";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { SignOutIcon } from "@/Shared/components/icon";
function SideBar() {
  const { Paragraph } = Typography;
  const location = useLocation();
  const [iconHover, setIconHover] = useState(false);
  const [iconName, setIconNameHover] = useState("");

  return (
    <Col span={24}>
      <Row>
        <Col
          span={24}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 120,
          }}
        >
          <Image src={images.logo} width={80} height={64} />
        </Col>
      </Row>
      {MenuItem.map((menu, index) => {
        return (
          <Row key={index}>
            <Col span={24}>
              <Link
                to={menu.path}
                onMouseEnter={() => {
                  setIconHover(true);
                  setIconNameHover(menu.path);
                }}
                onMouseLeave={() => {
                  setIconHover(false);
                  setIconNameHover("");
                }}
                className={`menu-link ${
                  location.pathname === menu.path ? "active" : ""
                }`}
              >
                {location.pathname === menu.path
                  ? menu.iconActive
                  : iconHover && iconName === menu.path
                  ? menu.iconHover
                  : menu.icon}
                <Paragraph
                  className="menu-link-text"
                  style={{ marginBottom: 0 }}
                >
                  {menu.name}
                </Paragraph>
              </Link>
            </Col>
          </Row>
        );
      })}
      <Row style={{ margin: "175px 0 0 0 ", padding: "0 10px 0 10px" }}>
        <Button
          icon={<SignOutIcon></SignOutIcon>}
          style={{
            width: "100%",
            height: 48,
            display: "flex",
            alignItems: "center",
            gap: 15,
            color: "#ff7506",
            fontWeight: 600,
            fontSize: "1rem",
            border: "none",
            backgroundColor: "#FFF2E7",
          }}
        >
          Đăng xuất
        </Button>
      </Row>
    </Col>
  );
}

export default SideBar;