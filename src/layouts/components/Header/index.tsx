import { Col, Row } from "antd";
import { useLocation } from "react-router-dom";
import routesConfig from "@/config/routes";
import InformationComponent from "./Information";

function Header() {
  const location = useLocation();
  return (
    <Row
      style={{
        height: "3.5rem",
        display: "flex",
        alignItems: "center",
        width: "100%",
        paddingLeft: "32px",
        paddingRight: "3rem",
      }}
    >
      <Col span={12}>
        {/* <Breadcrumb
          separator=">"
          items={[
            {
              title: "Home",
            },
          ]}
        /> */}
        <></>
      </Col>
      {location.pathname === routesConfig.dashboard ? (
        <></>
      ) : (
        <InformationComponent />
      )}
    </Row>
  );
}

export default Header;
