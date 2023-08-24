import { TableComponent } from "@/Shared/components";
import { useAppDispatch } from "@/app/hooks";
import { RootState } from "@/app/store";
import { getAllProgressionOfService } from "@/features/progression/progressionSlice";
import { findService } from "@/features/serviceSlice/serviceSlice";
import { Header } from "@/layouts";
import { Col, DatePicker, Input, Row, Select, Typography } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const status = [
  { value: "Tất cả", label: "Tất cả" },
  { value: "Hoạt động", label: "Hoạt động" },
  { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
];

function ServiceDetail() {
  const dataServiceDetail = useSelector(
    (state: RootState) => state.service.dataServiceDetail
  );
  const dataServiceProgression = useSelector(
    (state: RootState) => state.progression.dataListProgressionOfService
  );
  const { Title, Text } = Typography;
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllProgressionOfService(dataServiceDetail.name || ""));
  }, [dataServiceDetail, dispatch]);
  useEffect(() => {
    dispatch(findService(id || ""));
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
          <Title className="title">Quản lý dịch vụ</Title>
        </Col>
      </Row>
      <Row
        className="equipment-wrapper"
        style={{
          backgroundColor: "transparent",
          padding: 0,
        }}
      >
        <Col span={24}>
          <Row
            style={{
              marginTop: 5,
              display: "flex",
              // justifyContent: "space-between",
              gap: 10,
            }}
          >
            <Col span={7} className="equipment-create-group">
              <Row
                style={{
                  height: "500px",
                  maxHeight: "500px",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#ffffff",
                  padding: "16px 10px 24px 24px",
                  borderRadius: "12px",
                }}
              >
                <Row>
                  <Title className="equipment-wrapper-title">
                    Thông tin dịch vụ
                  </Title>
                </Row>
                <Row style={{ height: "20px", marginBottom: "10px" }}>
                  <Col span={8} style={{ height: "100%" }}>
                    <Text
                      style={{ marginBottom: "5px" }}
                      className="equipment-input-label"
                    >
                      Mã dịch vụ:
                    </Text>
                  </Col>
                  <Col span={14} style={{ height: "100%" }}>
                    <Text style={{ marginBottom: "5px" }}>
                      {dataServiceDetail.id}
                    </Text>
                  </Col>
                </Row>
                <Row style={{ height: "20px", marginBottom: "10px" }}>
                  <Col span={8} style={{ height: "100%" }}>
                    <Text
                      style={{ marginBottom: "5px" }}
                      className="equipment-input-label"
                    >
                      Tên dịch vụ:
                    </Text>
                  </Col>
                  <Col span={14} style={{ height: "100%" }}>
                    <Text style={{ marginBottom: "5px" }}>
                      {dataServiceDetail.name}
                    </Text>
                  </Col>
                </Row>
                <Row style={{ height: "20px", marginBottom: "10px" }}>
                  <Col span={8} style={{ height: "100%" }}>
                    <Text
                      style={{ marginBottom: "5px" }}
                      className="equipment-input-label"
                    >
                      Mô tả:
                    </Text>
                  </Col>
                  <Col span={14} style={{ height: "100%" }}>
                    <Text style={{ marginBottom: "5px" }}>
                      {dataServiceDetail.describe}
                    </Text>
                  </Col>
                </Row>
                <Row style={{ marginTop: 20 }}>
                  <Title className="equipment-wrapper-title">
                    Quy tắc cấp số
                  </Title>
                </Row>
                <Row style={{ marginTop: 5 }}>
                  <Col
                    span={8}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Text>Tăng tự động:</Text>
                  </Col>
                  <Col
                    span={15}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <Input
                      style={{ width: "33%" }}
                      value={dataServiceDetail.from}
                    />
                    <Text>đến</Text>
                    <Input
                      style={{ width: "33%" }}
                      value={dataServiceDetail.to}
                    />
                  </Col>
                </Row>
                <Row style={{ marginTop: 10 }}>
                  <Col
                    span={8}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Text>Prefix:</Text>
                  </Col>
                  <Col
                    span={15}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Input style={{ width: "33%" }} />
                  </Col>
                </Row>
                <Row style={{ marginTop: 10 }}>
                  <Col style={{ display: "flex", alignItems: "center" }}>
                    <Text>Reset mỗi ngày</Text>
                  </Col>
                </Row>
                <Row style={{ marginTop: 10 }}>
                  <Col style={{ display: "flex", alignItems: "center" }}>
                    <Text>Ví dụ: 201-2001</Text>
                  </Col>
                </Row>
              </Row>
            </Col>
            <Col
              span={16}
              className="equipment-create-group"
              style={{
                backgroundColor: "#ffffff",
                padding: "16px 10px 24px 24px",
                borderRadius: "12px",
                maxHeight: "500px",
                height: "500px",
              }}
            >
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <Col span={5}>
                  <Text>Trạng thái</Text>
                  <Select
                    style={{ width: "100%" }}
                    defaultValue={"Tất cả"}
                    options={[
                      {
                        label: "Tất cả",
                        value: "Tất cả",
                      },
                      {
                        label: "Đã hoàn thành",
                        value: "Đã hoàn thành",
                      },
                      {
                        label: "Đã thực hiện",
                        value: "Đã thực hiện",
                      },
                      {
                        label: "Vắng",
                        value: "Vắng",
                      },
                    ]}
                  ></Select>
                </Col>
                <Col span={10}>
                  <Row>
                    <Text>Chọn thời gian</Text>
                  </Row>
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <DatePicker style={{ width: "44%" }}></DatePicker>
                    <DatePicker style={{ width: "44%" }}></DatePicker>
                  </Row>
                </Col>
                <Col span={8}>
                  <Text>Từ khoá</Text>
                  <Input.Search></Input.Search>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <TableComponent
                    data={dataServiceProgression}
                    height="350px"
                    width="100%"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default ServiceDetail;
