import { AddButtonCustom, TableComponent } from "@/Shared/components";
import { DropdownIcon } from "@/Shared/components/icon";
import { useAppDispatch } from "@/app/hooks";
import { RootState } from "@/app/store";
import routesConfig from "@/config/routes";
import { gettAllService } from "@/features/serviceSlice/serviceSlice";
import { Header } from "@/layouts";
import { Col, DatePicker, Input, Row, Select, Typography } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function ServicePage() {
  const dataListService = useSelector(
    (state: RootState) => state.service.dataListService
  );
  const [activeStatus, setActiveStatus] = useState<string>("");
  const dispatch = useAppDispatch();
  const { Title, Text } = Typography;
  useEffect(() => {
    dispatch(gettAllService(activeStatus));
  }, [dispatch, activeStatus]);

  const handlerSelectActive = (e: string) => {
    if (e === "Tất cả") {
      setActiveStatus("");
    } else {
      setActiveStatus(e);
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
      <Row style={{ paddingLeft: "2rem", paddingRight: "5rem" }}>
        <Col
          span={7}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text>Trạng thái hoạt động</Text>
          <Select
            defaultValue="Tất cả"
            style={{ width: "90%" }}
            className="equipment-select"
            suffixIcon={<DropdownIcon />}
            onChange={handlerSelectActive}
            options={[
              { value: "Tất cả", label: "Tất cả" },
              { value: "Hoạt động", label: "Hoạt động" },
              { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
            ]}
          />
        </Col>
        <Col
          span={10}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Row>
            <Text>Chọn thời gian</Text>
          </Row>
          <Row style={{ display: "flex" }}>
            <Col span={10}>
              <DatePicker
                style={{ width: "90%", height: 38 }}
                // onChange={handleChangeSelectStatus}
              />
            </Col>
            <Col span={10}>
              <DatePicker
                style={{ width: "90%", height: 38 }}
                // onChange={handleChangeSelectStatus}
              />
            </Col>
          </Row>
        </Col>
        <Col
          span={7}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text>Từ khoá</Text>
          <Input.Search style={{ width: "100%" }} className="search-antd" />
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
        <AddButtonCustom
          nameAdd="Thêm Dịch vụ"
          href={routesConfig.serviceCreate}
        />
        <Col span={24}>
          <TableComponent data={dataListService} />
        </Col>
      </Row>
    </Col>
  );
}

export default ServicePage;
