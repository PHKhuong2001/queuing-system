import { AddButtonCustom, TableComponent } from "@/Shared/components";
import { ArrowIcon } from "@/Shared/components/icon";
import { useAppDispatch } from "@/app/hooks";
import { RootState } from "@/app/store";
import routesConfig from "@/config/routes";
import { gettAllReport } from "@/features/progression/progressionSlice";
import { Header } from "@/layouts";
import { Col, DatePicker, Row, Typography } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function ReportPage() {
  const dataReport = useSelector(
    (state: RootState) => state.progression.dataListReport
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(gettAllReport());
  }, [dispatch]);
  const { Text } = Typography;
  return (
    <Col span={24} style={{ height: "100%" }}>
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      {/* <Row style={{ paddingLeft: "2rem" }}>
        <Col>
          <Title className="title">Danh sách thiết bị</Title>
        </Col>
      </Row> */}
      <Row
        style={{ paddingLeft: "2rem", paddingRight: "5rem", marginTop: "15px" }}
      >
        <Col
          span={7}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Row>
            <Text>Chọn thời gian</Text>
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Col span={10}>
              <DatePicker
                style={{ width: "100%", height: 38 }}
                // onChange={handleChangeSelectStatus}
              />
            </Col>
            <ArrowIcon />
            <Col span={10}>
              <DatePicker
                style={{ width: "100%", height: 38 }}
                // onChange={handleChangeSelectStatus}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          paddingLeft: "2rem",
          paddingRight: "5rem",
          marginTop: "0.8rem",
          position: "relative",
        }}
      >
        <AddButtonCustom nameAdd="Tải về" href={routesConfig.equipment} />
        <Col span={24}>
          <TableComponent data={dataReport} />
        </Col>
      </Row>
    </Col>
  );
}

export default ReportPage;
