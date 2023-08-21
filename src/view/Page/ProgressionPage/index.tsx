import { AddButtonCustom, TableComponent } from "@/Shared/components";
import routesConfig from "@/config/routes";
import { Header } from "@/layouts";
import { Col, DatePicker, Input, Row, Select, Typography } from "antd";
import { useAppDispatch } from "@/app/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useEffect } from "react";
import { gettAllProgression } from "@/features/progression/progressionSlice";
import { ArrowIcon, DropdownIcon } from "@/Shared/components/icon";
function ProgressionPage() {
  const datalistProgression = useSelector(
    (state: RootState) => state.progression.dataListProgression
  );
  const dispatch = useAppDispatch();
  const { Title, Text } = Typography;
  console.log(datalistProgression);

  useEffect(() => {
    dispatch(gettAllProgression());
  }, [dispatch]);
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
        style={{
          paddingLeft: "2rem",
          paddingRight: "5rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Col
          span={3}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text>Tên dịch vụ</Text>
          <Select
            defaultValue="Tất cả"
            style={{ width: "100%" }}
            suffixIcon={<DropdownIcon />}
            options={[
              { value: "all", label: "Tất cả" },
              { value: "active", label: "Hoạt động" },
              { value: "shutDown", label: "Ngưng hoạt động" },
            ]}
          />
        </Col>
        <Col
          span={3}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text>Tình trạng</Text>
          <Select
            defaultValue="Tất cả"
            style={{ width: "100%" }}
            suffixIcon={<DropdownIcon />}
            options={[
              { value: "all", label: "Tất cả" },
              { value: "active", label: "Hoạt động" },
              { value: "shutDown", label: "Ngưng hoạt động" },
            ]}
          />
        </Col>
        <Col
          span={3}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text>Nguồn cấp</Text>
          <Select
            defaultValue="Tất cả"
            style={{ width: "100%" }}
            suffixIcon={<DropdownIcon />}
            options={[
              { value: "all", label: "Tất cả" },
              { value: "active", label: "Hoạt động" },
              { value: "shutDown", label: "Ngưng hoạt động" },
            ]}
          />
        </Col>
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
        <Col
          span={6}
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
          nameAdd="Cấp số mới"
          href={routesConfig.progressionCreate}
        />
        <Col span={24}>
          <TableComponent data={datalistProgression} />
        </Col>
      </Row>
    </Col>
  );
}

export default ProgressionPage;
