import InformationComponent from "@/layouts/components/Header/Information";
import { Calendar, Col, Progress, Row, Typography } from "antd";
import type { Dayjs } from "dayjs";
import type { CalendarProps } from "antd";
import {
  EquipmentIcon,
  ProgressionIcon,
  ServiceIcon,
} from "@/Shared/components/icon";

function OverViewDashBoard() {
  const { Title, Text } = Typography;
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
      <div className="padding-overview">
        <Row className="overview-card boxShadow-dashboard">
          <Col
            className="d-flex align-items-center"
            style={{ paddingLeft: "10px", gap: 20 }}
            span={12}
          >
            <div
              className="position-relative"
              style={{ height: "60.8px", width: "50px" }}
            >
              <Progress
                type="circle"
                percent={50}
                size={55}
                className="position-absolute progress-translate"
                strokeColor="#FF7506  "
              />
              <Progress
                type="circle"
                percent={10}
                size={43}
                className="position-absolute progress-translate display-none-progress-text"
                strokeColor="#7E7D88"
              />
            </div>
            <div
              style={{ height: "100%", gap: 2 }}
              className="d-flex flex-direction-column justify-content-center"
            >
              <Title
                style={{
                  margin: 0,
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#535261",
                }}
              >
                4.221
              </Title>
              <Text className="d-flex align-items-center" style={{ gap: 5 }}>
                <EquipmentIcon width={15} height={15} fillColor="#FF7506" />
                <span style={{ fontSize: "0.9rem", color: "#FF7506" }}>
                  Thiết bị
                </span>
              </Text>
            </div>
          </Col>
          <Col className="" span={12}>
            <div
              style={{ height: "100%", gap: 2, paddingLeft: 10 }}
              className="d-flex flex-direction-column justify-content-center"
            >
              <Text className="d-flex align-items-center" style={{ gap: 5 }}>
                <span style={{ fontSize: "0.7rem", color: "#7E7D88" }}>
                  Đang hoạt động
                </span>
                <span style={{ fontSize: "0.7rem", color: "#FF7506" }}>
                  3.799
                </span>
              </Text>
              <Text className="d-flex align-items-center" style={{ gap: 5 }}>
                <span style={{ fontSize: "0.7rem", color: "#7E7D88" }}>
                  Ngưng hoạt động
                </span>
                <span style={{ fontSize: "0.7rem", color: "#FF7506" }}>
                  422
                </span>
              </Text>
            </div>
          </Col>
        </Row>
        <Row className="overview-card boxShadow-dashboard">
          <Col
            className="d-flex align-items-center"
            style={{ paddingLeft: "10px", gap: 20 }}
            span={12}
          >
            <div
              className="position-relative"
              style={{ height: "60.8px", width: "50px" }}
            >
              <Progress
                type="circle"
                percent={76}
                size={55}
                className="position-absolute progress-translate"
                strokeColor="#4277FF"
              />
              <Progress
                type="circle"
                percent={24}
                size={43}
                className="position-absolute progress-translate display-none-progress-text"
                strokeColor="#7E7D88"
              />
            </div>
            <div
              style={{ height: "100%", gap: 2 }}
              className="d-flex flex-direction-column justify-content-center"
            >
              <Title
                style={{
                  margin: 0,
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#535261",
                }}
              >
                4.221
              </Title>
              <Text className="d-flex align-items-center" style={{ gap: 5 }}>
                <ServiceIcon width={15} height={15} fillColor="#4277FF" />
                <span style={{ fontSize: "0.9rem", color: "#4277FF" }}>
                  Thiết bị
                </span>
              </Text>
            </div>
          </Col>
          <Col className="" span={12}>
            <div
              style={{ height: "100%", gap: 2, paddingLeft: 10 }}
              className="d-flex flex-direction-column justify-content-center"
            >
              <Text className="d-flex align-items-center" style={{ gap: 5 }}>
                <span style={{ fontSize: "0.7rem", color: "#7E7D88" }}>
                  Đang hoạt động
                </span>
                <span style={{ fontSize: "0.7rem", color: "#4277FF" }}>
                  3.799
                </span>
              </Text>
              <Text className="d-flex align-items-center" style={{ gap: 5 }}>
                <span style={{ fontSize: "0.7rem", color: "#7E7D88" }}>
                  Ngưng hoạt động
                </span>
                <span style={{ fontSize: "0.7rem", color: "#4277FF" }}>
                  422
                </span>
              </Text>
            </div>
          </Col>
        </Row>
        <Row className="overview-card boxShadow-dashboard">
          <Col
            className="d-flex align-items-center"
            style={{ paddingLeft: "10px", gap: 20 }}
            span={12}
          >
            <div
              className="position-relative"
              style={{ height: "60.8px", width: "50px" }}
            >
              <Progress
                type="circle"
                percent={86}
                size={55}
                className="position-absolute progress-translate"
                strokeColor="#35C75A"
              />
              <Progress
                type="circle"
                percent={10}
                size={44}
                className="position-absolute progress-translate display-none-progress-text"
                strokeColor="#7E7D88"
              />
              <Progress
                type="circle"
                percent={4}
                size={33}
                className="position-absolute progress-translate display-none-progress-text"
                strokeColor="#F178B6"
              />
            </div>
            <div
              style={{ height: "100%", gap: 2 }}
              className="d-flex flex-direction-column justify-content-center"
            >
              <Title
                style={{
                  margin: 0,
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#535261",
                }}
              >
                4.221
              </Title>
              <Text className="d-flex align-items-center" style={{ gap: 5 }}>
                <ProgressionIcon width={15} height={15} fillColor="#35C75A" />
                <span style={{ fontSize: "0.9rem", color: "#35C75A" }}>
                  Thiết bị
                </span>
              </Text>
            </div>
          </Col>
          <Col className="" span={12}>
            <div
              style={{ height: "100%", gap: 2, paddingLeft: 10 }}
              className="d-flex flex-direction-column justify-content-center"
            >
              <Text className="d-flex align-items-center" style={{ gap: 5 }}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "#7E7D88",
                  }}
                >
                  Đang chờ
                </span>
                <span style={{ fontSize: "0.7rem", color: "#35C75A" }}>
                  3.799
                </span>
              </Text>
              <Text className="d-flex align-items-center" style={{ gap: 5 }}>
                <span style={{ fontSize: "0.7rem", color: "#7E7D88" }}>
                  Đã sử dụng
                </span>
                <span style={{ fontSize: "0.7rem", color: "#35C75A" }}>
                  422
                </span>
              </Text>
              <Text className="d-flex align-items-center" style={{ gap: 5 }}>
                <span style={{ fontSize: "0.7rem", color: "#7E7D88" }}>
                  Bỏ qua
                </span>
                <span style={{ fontSize: "0.7rem", color: "#35C75A" }}>
                  422
                </span>
              </Text>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="padding-overview overview-card">
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
