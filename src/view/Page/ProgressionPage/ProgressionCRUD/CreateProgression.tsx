import ModalAddProgression from "@/Shared/components/Modal/ModalProgression";
import { DropdownIcon } from "@/Shared/components/icon";
import {
  convertToTimestamp,
  getCurrentDate,
  getCurrentTime,
  getLocalStorageUser,
} from "@/Shared/helpers";
import { useAppDispatch } from "@/app/hooks";
import { RootState } from "@/app/store";
import routesConfig from "@/config/routes";
import { addNewActivity } from "@/features/activity/activitySlice";
import { addNewProgression } from "@/features/progression/progressionSlice";
import { getAllService } from "@/features/serviceSlice/serviceSlice";
import { Header } from "@/layouts";
import { Button, Col, Form, Row, Select, Typography } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const status = [
  { value: "Tất cả", label: "Tất cả" },
  { value: "Hoạt động", label: "Hoạt động" },
  { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
];

function ProgressionCreate() {
  const dataService = useSelector(
    (state: RootState) => state.service.dataListService
  );
  const dispatch = useAppDispatch();
  const user = getLocalStorageUser();
  const { Title, Text } = Typography;
  useEffect(() => {
    dispatch(getAllService({}));
  }, [dispatch]);
  const listDropdownService = dataService.map((item) => {
    return { value: item.name, label: item.name };
  });
  const [selectService, setSelectService] = useState("");
  const handlerSubmitCreate = () => {
    const dataIdService = dataService.find(
      (item) => item.name === selectService
    );
    const id = { ...dataIdService };
    if (id.id && selectService) {
      dispatch(
        addNewProgression({
          service: selectService,
          serviceId: id.id || "",
          currentTime: `${getCurrentDate()} ${getCurrentTime()}`,
        })
      );
      dispatch(
        addNewActivity({
          account: user.account,
          executionTime: convertToTimestamp(
            `${getCurrentDate()} ${getCurrentTime()}`
          ),
          operations: `Cấp số mới với dịch vụ ${selectService}`,
        })
      );
    } else {
      console.log(id);
    }
    return false;
  };

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
      <Form onFinish={handlerSubmitCreate}>
        <Row
          className="equipment-wrapper"
          style={{ height: "500px", width: "1070px" }}
        >
          <Col span={24}>
            <Row style={{ margin: "10px 0 18px 0" }}>
              <Col span={24} style={{ textAlign: "center" }}>
                <Title
                  style={{
                    fontSize: "1.8rem",
                    margin: 0,
                    color: "#ff7506",
                    fontWeight: 600,
                  }}
                >
                  CẤP SỐ MỚI
                </Title>
              </Col>
            </Row>
            <Row
              style={{
                marginTop: 5,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Col
                span={24}
                className="equipment-create-group"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ marginBottom: "5px", fontSize: "1.2rem" }}
                  className="equipment-input-label"
                >
                  Dịch vụ khách hàng lựa chọn
                </Text>
                <Select
                  style={{ width: "38%" }}
                  placeholder="chọn dịch vụ"
                  suffixIcon={<DropdownIcon></DropdownIcon>}
                  className="equipment-select"
                  options={listDropdownService}
                  onChange={(e) => setSelectService(e)}
                />
              </Col>
            </Row>

            <Row
              style={{
                paddingLeft: "2rem",
                marginTop: 65,
                width: "100%",
              }}
            >
              <Col
                span={24}
                style={{ display: "flex", justifyContent: "center", gap: 20 }}
              >
                <Button
                  type="link"
                  href={routesConfig.progression}
                  className="button-cancel"
                >
                  Huỷ bỏ
                </Button>
                <ModalAddProgression></ModalAddProgression>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Col>
  );
}

export default ProgressionCreate;
