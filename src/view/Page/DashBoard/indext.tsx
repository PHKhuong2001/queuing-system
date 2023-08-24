import LineChartComponent from "@/Shared/components/Chart";
import {
  ArrowUpIcon,
  DropdownIcon,
  HavePassProgressionIcon,
  HaveProgressionIcon,
  HaveUseProgressionIcon,
  WatingProgressionIcon,
} from "@/Shared/components/icon";
import { Header } from "@/layouts";
import { Col, Row, Select, Typography } from "antd";
import OverViewDashBoard from "./OverView";
import { useAppDispatch } from "@/app/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useEffect, useState } from "react";
import {
  getDataByMonth,
  getAllProgression,
  getWeeklyData,
} from "@/features/progression/progressionSlice";
function Dashboard() {
  const progression = useSelector(
    (state: RootState) => state.progression.dataListProgression
  );
  const dataChart = useSelector(
    (state: RootState) => state.progression.dataChart
  );
  const dispatch = useAppDispatch();
  const [selectTime, setSelectTime] = useState("Ngày");
  const { Text, Title } = Typography;
  useEffect(() => {
    dispatch(getAllProgression({}));
    if (selectTime === "Ngày") {
      dispatch(getWeeklyData({ dateString: "11/08/2023" }));
    } else if (selectTime === "Tháng") {
      dispatch(getDataByMonth({ dateString: "11/08/2023" }));
    }
  }, [dispatch, selectTime]);
  const waitingProgression = progression.filter(
    (item) => item.status === "Đang chờ"
  );
  const haveUseProgression = progression.filter(
    (item) => item.status === "Đã sử dụng"
  );
  const passProgression = progression.filter(
    (item) => item.status === "Đã bỏ qua"
  );
  const handlerSelectMonthDayYear = (e: string) => {
    setSelectTime(e);
  };
  return (
    <Col span={24} style={{ height: "100%" }}>
      <Row style={{ display: "flex", height: "100%" }}>
        <Col span={17}>
          <Row>
            <Col span={24}>
              <Header />
            </Col>
          </Row>
          <Row style={{ paddingLeft: "1rem" }}>
            <Col>
              <Title className="title" style={{ fontSize: "1.2rem" }}>
                Biểu đồ cấp số
              </Title>
            </Col>
          </Row>
          <Row
            className="d-flex justify-content-between"
            style={{
              paddingLeft: "1rem",
              paddingRight: "1rem",
              marginTop: "5px",
            }}
          >
            <Col className="col-progression-dashboard boxShadow-dashboard">
              <Row
                className="d-flex align-items-center"
                style={{
                  gap: 15,
                }}
              >
                <div className="icon-wrapper">
                  <div className="icon-container-blue"></div>
                  <HaveProgressionIcon></HaveProgressionIcon>
                </div>
                <Text className="title-col-progression">Số thứ tự đã cấp</Text>
              </Row>
              <Row className="d-flex align-items-end justify-content-between">
                <Text
                  style={{
                    lineHeight: "1.7rem",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "#535261",
                  }}
                >
                  {progression.length}
                </Text>
                <Text className="percent-wrapper">
                  <ArrowUpIcon></ArrowUpIcon>
                  <Text style={{ fontSize: "0.7rem", color: "#FF9138" }}>
                    32,41%
                  </Text>
                </Text>
              </Row>
            </Col>
            <Col className="col-progression-dashboard boxShadow-dashboard">
              <Row
                className="d-flex align-items-center"
                style={{
                  gap: 15,
                }}
              >
                <div className="icon-wrapper">
                  <div className="icon-container-green"></div>
                  <HaveUseProgressionIcon></HaveUseProgressionIcon>
                </div>
                <Text className="title-col-progression">
                  Số thứ tự đã sử dụng
                </Text>
              </Row>
              <Row className="d-flex align-items-end justify-content-between">
                <Text
                  style={{
                    lineHeight: "1.7rem",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "#535261",
                  }}
                >
                  {haveUseProgression.length}
                </Text>
                <Text className="percent-wrapper">
                  <ArrowUpIcon></ArrowUpIcon>
                  <Text style={{ fontSize: "0.7rem", color: "#FF9138" }}>
                    32,41%
                  </Text>
                </Text>
              </Row>
            </Col>
            <Col className="col-progression-dashboard boxShadow-dashboard">
              <Row
                className="d-flex align-items-center"
                style={{
                  gap: 15,
                }}
              >
                <div className="icon-wrapper">
                  <div className="icon-container-orange"></div>
                  <WatingProgressionIcon></WatingProgressionIcon>
                </div>
                <Text className="title-col-progression">
                  Số thứ tự đang chờ
                </Text>
              </Row>
              <Row className="d-flex align-items-end justify-content-between">
                <Text
                  style={{
                    lineHeight: "1.7rem",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "#535261",
                  }}
                >
                  {waitingProgression.length}
                </Text>
                <Text className="percent-wrapper">
                  <ArrowUpIcon></ArrowUpIcon>
                  <Text style={{ fontSize: "0.7rem", color: "#FF9138" }}>
                    32,41%
                  </Text>
                </Text>
              </Row>
            </Col>
            <Col className="col-progression-dashboard boxShadow-dashboard">
              <Row
                className="d-flex align-items-center"
                style={{
                  gap: 15,
                }}
              >
                <div className="icon-wrapper">
                  <div className="icon-container-red"></div>
                  <HavePassProgressionIcon></HavePassProgressionIcon>
                </div>
                <Text className="title-col-progression">
                  Số thứ tự đã bỏ qua
                </Text>
              </Row>
              <Row className="d-flex align-items-end justify-content-between">
                <Text
                  style={{
                    lineHeight: "1.7rem",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "#535261",
                  }}
                >
                  {passProgression.length}
                </Text>
                <Text className="percent-wrapper">
                  <ArrowUpIcon></ArrowUpIcon>
                  <Text style={{ fontSize: "0.7rem", color: "#FF9138" }}>
                    32,41%
                  </Text>
                </Text>
              </Row>
            </Col>
          </Row>
          <Row
            style={{
              paddingLeft: "1rem",
              paddingRight: "1rem",
              marginTop: "0.8rem",
            }}
          >
            <Col
              span={24}
              className="boxShadow-dashboard"
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "20px 10px 20px 22px",
              }}
            >
              <Row style={{ marginBottom: "20px" }}>
                <Col span={12}>
                  <Title
                    style={{
                      margin: 0,
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      marginBottom: 10,
                    }}
                  >
                    Bảng thống kê theo ngày
                  </Title>
                  <Text style={{ color: "#A9A9B0" }}>Tháng 11/2021</Text>
                </Col>
                <Col
                  className="d-flex justify-content-end align-items-center"
                  style={{ gap: 10, paddingRight: 20 }}
                  span={12}
                >
                  <Title
                    style={{
                      margin: 0,
                      marginBottom: 0,
                      fontSize: "0.9rem",
                      fontWeight: "600",
                    }}
                  >
                    Xem theo
                  </Title>
                  <Select
                    suffixIcon={<DropdownIcon></DropdownIcon>}
                    defaultValue="Ngày"
                    style={{ width: "6rem" }}
                    onChange={handlerSelectMonthDayYear}
                    options={[
                      { label: "Ngày", value: "Ngày" },
                      { label: "Tháng", value: "Tháng" },
                      { label: "Năm", value: "Năm" },
                    ]}
                  />
                </Col>
              </Row>
              <Row style={{ marginBottom: "12px" }}>
                <LineChartComponent dataChart={dataChart} />
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          className="boxShadow-dashboard"
          span={7}
          style={{
            height: "100%",
            background: "#ffffff",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
        >
          <OverViewDashBoard />
        </Col>
      </Row>
    </Col>
  );
}

export default Dashboard;
