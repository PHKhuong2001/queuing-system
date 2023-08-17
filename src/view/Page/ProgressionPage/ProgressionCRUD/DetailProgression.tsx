import { AddButtonCustom } from "@/Shared/components";
import { BackIcon } from "@/Shared/components/icon";
import { useAppDispatch } from "@/app/hooks";
import { RootState } from "@/app/store";
import routesConfig from "@/config/routes";
import { findProgression } from "@/features/progression/progressionSlice";
import { Header } from "@/layouts";
import { Col, Row, Typography } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const status = [
  { value: "Tất cả", label: "Tất cả" },
  { value: "Hoạt động", label: "Hoạt động" },
  { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
];

function ProgressionDetail() {
  const detailProgression = useSelector(
    (state: RootState) => state.progression.dataDetailProgression
  );
  const { Title, Text } = Typography;
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(findProgression(id || ""));
  }, [dispatch, id]);

  return (
    <Col span={24} style={{ height: "100%" }}>
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row style={{ paddingLeft: "2rem" }}>
        <Col>
          <Title className="title">Quản lý cấp số</Title>
        </Col>
      </Row>
      <Row
        className="equipment-wrapper"
        style={{ height: 500, position: "relative" }}
      >
        <Col span={24}>
          <Row>
            <Title className="equipment-wrapper-title">Thông tin cấp số</Title>
          </Row>
          <Row
            style={{
              marginTop: 5,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Col
              span={12}
              className="equipment-create-group"
              style={{ flexDirection: "row", gap: 30 }}
            >
              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem" }}
                >
                  Họ tên:{" "}
                </Text>
              </Col>
              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem", fontWeight: "400" }}
                >
                  {detailProgression.nameCustomer}
                </Text>
              </Col>
            </Col>
            <Col
              span={12}
              className="equipment-create-group"
              style={{ flexDirection: "row", gap: 30 }}
            >
              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem" }}
                >
                  Nguồn cấp:{" "}
                </Text>
              </Col>

              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem", fontWeight: "400" }}
                >
                  {detailProgression.powerSupply}
                </Text>
              </Col>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: 15,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Col
              span={12}
              className="equipment-create-group"
              style={{ flexDirection: "row", gap: 30 }}
            >
              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem" }}
                >
                  Tên dịch vụ:{" "}
                </Text>
              </Col>
              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem", fontWeight: "400" }}
                >
                  {detailProgression.nameService}
                </Text>
              </Col>
            </Col>
            <Col
              span={12}
              className="equipment-create-group"
              style={{ flexDirection: "row", gap: 30 }}
            >
              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem" }}
                >
                  Trạng thái:{" "}
                </Text>
              </Col>
              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem", fontWeight: "400" }}
                >
                  {detailProgression.status}
                </Text>
              </Col>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: 15,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Col
              span={12}
              className="equipment-create-group"
              style={{ flexDirection: "row", gap: 30 }}
            >
              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem" }}
                >
                  Số thứ tự:{" "}
                </Text>
              </Col>
              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem", fontWeight: "400" }}
                >
                  {detailProgression.id}
                </Text>
              </Col>
            </Col>
            <Col
              span={12}
              className="equipment-create-group"
              style={{ flexDirection: "row", gap: 30 }}
            >
              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem" }}
                >
                  Số điện thoại:{" "}
                </Text>
              </Col>
              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem", fontWeight: "400" }}
                >
                  {detailProgression.phoneCustomer}
                </Text>
              </Col>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: 15,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Col
              span={12}
              className="equipment-create-group"
              style={{ flexDirection: "row", gap: 30 }}
            >
              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem" }}
                >
                  Thời gian cấp:{" "}
                </Text>
              </Col>
              <Col span={12}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem", fontWeight: "400" }}
                >
                  {detailProgression.grantTime}
                </Text>
              </Col>
            </Col>
            <Col
              span={12}
              className="equipment-create-group"
              style={{ flexDirection: "row", gap: 30 }}
            >
              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem" }}
                >
                  Địa chỉ Email:{" "}
                </Text>
              </Col>
              <Col span={12}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem", fontWeight: "400" }}
                >
                  {detailProgression.emailCustomer}
                </Text>
              </Col>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: 15,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Col
              span={12}
              className="equipment-create-group"
              style={{ flexDirection: "row", gap: 30 }}
            >
              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem" }}
                >
                  Hạn sử dụng:{" "}
                </Text>
              </Col>
              <Col span={12}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem", fontWeight: "400" }}
                >
                  {detailProgression.expiry}
                </Text>
              </Col>
            </Col>
          </Row>
        </Col>
        <AddButtonCustom
          nameAdd="Quay lại"
          icon={<BackIcon />}
          style={{ right: "-86px" }}
          href={routesConfig.progression}
        />
      </Row>
    </Col>
  );
}

export default ProgressionDetail;
