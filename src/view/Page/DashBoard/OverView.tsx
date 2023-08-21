import InformationComponent from "@/layouts/components/Header/Information";
import { Calendar, Col, Row, Typography } from "antd";
import type { Dayjs } from "dayjs";
import type { CalendarProps } from "antd";

function OverViewDashBoard() {
  const { Title } = Typography;
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return (
    <>
      <Row
        className="d-flex justify-content-end"
        style={{ height: "56px", paddingRight: "48px" }}
      >
        <InformationComponent />
      </Row>
      <Row className="padding-overview" style={{ marginBottom: 5 }}>
        <Title className="title">Tổng quan</Title>
      </Row>
      <Row className="padding-overview">
        <Col className="boxShadow-dashboard overview-card" span={24}></Col>
      </Row>
      <Row className="padding-overview">
        <Col className="boxShadow-dashboard overview-card" span={24}></Col>
      </Row>
      <Row className="padding-overview">
        <Col className="boxShadow-dashboard overview-card" span={24}></Col>
      </Row>
      <Row className="padding-overview">
        <Calendar
          style={{ height: "50px" }}
          fullscreen={false}
          className="boxShadow-dashboard"
          onPanelChange={onPanelChange}
        />
      </Row>
    </>
  );
}

export default OverViewDashBoard;
