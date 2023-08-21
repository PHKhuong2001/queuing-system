import { IService } from "@/Shared/interfaces/ServiceInterface";
import { useAppDispatch } from "@/app/hooks";
import { RootState } from "@/app/store";
import routesConfig from "@/config/routes";
import {
  findServiceUpdate,
  updateService,
} from "@/features/serviceSlice/serviceSlice";
import { Header } from "@/layouts";
import { Button, Checkbox, Col, Form, Input, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export const status = [
  { value: "Tất cả", label: "Tất cả" },
  { value: "Hoạt động", label: "Hoạt động" },
  { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
];
const formUpdate: IService = {
  id: "",
  name: "",
  describe: "",
  from: "",
  to: "",
};

function ServiceUpdate() {
  const dataServiceUpdate = useSelector(
    (state: RootState) => state.service.dataServiceDetail
  );
  const { Title, Text } = Typography;
  const { id } = useParams();
  const [formNewUpdate, setFormNewUpdate] = useState(formUpdate);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (dataServiceUpdate) {
      setFormNewUpdate(dataServiceUpdate);
    }
  }, [dataServiceUpdate]);

  useEffect(() => {
    dispatch(findServiceUpdate(id || ""));
  }, [dispatch, id]);
  const handlerSubmitUpdate = () => {
    if (
      formNewUpdate.id &&
      formNewUpdate.name &&
      formNewUpdate.describe &&
      formNewUpdate.from &&
      formNewUpdate.to
    ) {
      dispatch(updateService({ service: formNewUpdate, serviceId: id || "" }));
      navigate(routesConfig.service);
    }
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
          <Title className="title">Quản lý dịch vụ</Title>
        </Col>
      </Row>
      <Form onFinish={handlerSubmitUpdate}>
        <Row className="equipment-wrapper">
          <Col span={24}>
            <Row>
              <Title className="equipment-wrapper-title">
                Thông tin dịch vụ
              </Title>
            </Row>
            <Row
              style={{
                marginTop: 5,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Col span={12} className="equipment-create-group">
                <Row
                  style={{
                    height: "100%",
                  }}
                >
                  <Col
                    span={24}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <Text
                      style={{ marginBottom: "5px" }}
                      className="equipment-input-label"
                    >
                      Mã dịch vụ *
                    </Text>
                    <Input
                      style={{ width: "95%", height: 38 }}
                      placeholder="Nhập mã dịch vụ"
                      value={formNewUpdate.id}
                      onChange={(e) =>
                        setFormNewUpdate((prev) => ({
                          ...prev,
                          id: e.target.value,
                        }))
                      }
                    />
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "auto",
                    }}
                    span={24}
                  >
                    <Text
                      style={{ marginBottom: "5px" }}
                      className="equipment-input-label"
                    >
                      Tên dịch vụ *
                    </Text>
                    <Input
                      style={{ width: "95%", height: 38 }}
                      placeholder="Nhập tên dịch vụ"
                      value={formNewUpdate.name}
                      onChange={(e) =>
                        setFormNewUpdate((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12} className="equipment-create-group">
                <Text className="equipment-input-label">Mô tả *</Text>
                <Input.TextArea
                  style={{ width: "100%", height: 132 }}
                  placeholder="Nhập mô tả"
                  value={formNewUpdate.describe}
                  onChange={(e) =>
                    setFormNewUpdate((prev) => ({
                      ...prev,
                      describe: e.target.value,
                    }))
                  }
                />
              </Col>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Title className="equipment-wrapper-title">Quy tắc cấp số</Title>
            </Row>
            <Row style={{ marginTop: 5 }}>
              <Col span={4} style={{ display: "flex", alignItems: "center" }}>
                <Checkbox>Tăng tự động từ:</Checkbox>
              </Col>
              <Col
                span={4}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <Input
                  style={{ width: "35%" }}
                  value={dataServiceUpdate.from}
                />
                <Text>đến</Text>
                <Input style={{ width: "35%" }} value={dataServiceUpdate.to} />
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col span={4} style={{ display: "flex", alignItems: "center" }}>
                <Checkbox>Prefix:</Checkbox>
              </Col>
              <Col span={4} style={{ display: "flex", alignItems: "center" }}>
                <Input style={{ width: "35%" }} />
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col span={4} style={{ display: "flex", alignItems: "center" }}>
                <Checkbox>Surfix:</Checkbox>
              </Col>
              <Col span={4} style={{ display: "flex", alignItems: "center" }}>
                <Input style={{ width: "35%" }} />
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col style={{ display: "flex", alignItems: "center" }}>
                <Checkbox>Reset mỗi ngày</Checkbox>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row
          style={{
            paddingLeft: "2rem",
            marginTop: 30,
            width: 1000,
          }}
        >
          <Col
            span={24}
            style={{ display: "flex", justifyContent: "center", gap: 20 }}
          >
            <Button
              type="link"
              href={routesConfig.service}
              className="button-cancel"
            >
              Huỷ bỏ
            </Button>
            <Button className="button-continue" htmlType="submit">
              Cập nhật
            </Button>
          </Col>
        </Row>
      </Form>
    </Col>
  );
}

export default ServiceUpdate;
