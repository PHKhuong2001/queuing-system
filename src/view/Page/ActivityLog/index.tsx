import { TableComponent } from "@/Shared/components";
import { ArrowIcon } from "@/Shared/components/icon";
import { useAppDispatch } from "@/app/hooks";
import { RootState } from "@/app/store";
import { getAllActivity } from "@/features/activity/activitySlice";
import { Header } from "@/layouts";
import { Col, DatePicker, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function ActivityLog() {
  const dataListActivity = useSelector(
    (state: RootState) => state.activity.dataListActivity
  );
  const dispatch = useAppDispatch();
  const [fromTo, setFromTo] = useState({ from: "", to: "" });

  useEffect(() => {
    dispatch(getAllActivity({ ...fromTo }));
  }, [dispatch, fromTo]);
  const { Text } = Typography;
  return (
    <Col span={24} style={{ height: "100%" }}>
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
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
                onChange={(date: any, dateString: string) =>
                  setFromTo((prev) => ({ ...prev, from: dateString }))
                }
                format="DD/MM/YYYY"
              />
            </Col>
            <ArrowIcon />
            <Col span={10}>
              <DatePicker
                style={{ width: "100%", height: 38 }}
                onChange={(date: any, dateString: string) =>
                  setFromTo((prev) => ({ ...prev, to: dateString }))
                }
                format="DD/MM/YYYY"
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
        <Col span={24}>
          <TableComponent data={dataListActivity} />
        </Col>
      </Row>
    </Col>
  );
}

export default ActivityLog;
