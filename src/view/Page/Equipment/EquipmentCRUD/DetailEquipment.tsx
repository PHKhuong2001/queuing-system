import { useAppDispatch } from "@/app/hooks";
import { RootState } from "@/app/store";
import routesConfig from "@/config/routes";
import { findEquipment } from "@/features/equipment/equipmentSlice";
import { Header } from "@/layouts";
import { Button, Col, Input, Row, Select, Typography } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const status = [
  { value: "Tất cả", label: "Tất cả" },
  { value: "Hoạt động", label: "Hoạt động" },
  { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
];

function EquipmentDetail() {
  const equipment = useSelector(
    (state: RootState) => state.equipment.equipmentDetail
  );
  const { Title, Text } = Typography;
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(findEquipment(id || ""));
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
          <Title className="title">Quản lý thiết bị</Title>
        </Col>
      </Row>
      <Row className="equipment-wrapper" style={{ height: 500 }}>
        <Col span={24}>
          <Row>
            <Title className="equipment-wrapper-title">
              Thông tin thiết bị
            </Title>
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
                  Mã thiết bị:{" "}
                </Text>
              </Col>
              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem", fontWeight: "400" }}
                >
                  {equipment.maThietBi}
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
                  Loại thiết bị:{" "}
                </Text>
              </Col>

              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem", fontWeight: "400" }}
                >
                  {equipment.loaiThietBi}
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
                  Tên thiết bị:{" "}
                </Text>
              </Col>
              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem", fontWeight: "400" }}
                >
                  {equipment.tenThietBi}
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
                  Tên đăng nhập:{" "}
                </Text>
              </Col>
              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem", fontWeight: "400" }}
                >
                  {equipment.dangNhap}
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
                  Dịa chỉ IP:{" "}
                </Text>
              </Col>
              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem", fontWeight: "400" }}
                >
                  {equipment.ip}
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
                  Mật khẩu:{" "}
                </Text>
              </Col>
              <Col span={6}>
                <Text
                  className="equipment-input-label"
                  style={{ fontSize: "0.9rem", fontWeight: "400" }}
                >
                  {equipment.password}
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
            <Col span={24} className="equipment-create-group">
              <Text
                className="equipment-input-label"
                style={{ fontSize: "0.9rem" }}
              >
                Dịch vụ sử dụng:
              </Text>
              <Text
                className="equipment-input-label"
                style={{ fontSize: "0.9rem", fontWeight: "400" }}
              >
                {equipment.dichVuSuDung}
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default EquipmentDetail;
