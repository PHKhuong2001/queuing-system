import { AddButtonCustom, TableComponent } from "@/Shared/components";
import routesConfig from "@/config/routes";
import { Header } from "@/layouts";
import { Col, Input, Row, Select, Typography } from "antd";
import { useAppDispatch } from "@/app/hooks";
import { useEffect, useState } from "react";
import { getAllEquipment } from "@/features/equipment/equipmentSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { DropdownIcon } from "@/Shared/components/icon";
import { useLocation } from "react-router-dom";
import { handlerSplitRoute } from "@/Shared/helpers";
import EquipmentCreate from "./EquipmentCRUD/CreateEquipment";
import EquipmentDetail from "./EquipmentCRUD/DetailEquipment";
import EquipmentUpdate from "./EquipmentCRUD/UpdateEquipment";

function Equipment() {
  const { Title, Text } = Typography;
  const equipmentList = useSelector((state: RootState) => state.equipment.data);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [activeStatus, setActiveStatus] = useState<string>("");
  const [connectStatus, setConnectStatus] = useState<string>("");
  useEffect(() => {
    dispatch(getAllEquipment({ active: activeStatus, connect: connectStatus }));
  }, [dispatch, activeStatus, connectStatus]);

  const handlerSelectActive = (e: string) => {
    if (e === "Tất cả") {
      setActiveStatus("");
    } else {
      setActiveStatus(e);
    }
  };

  console.log(handlerSplitRoute(location.pathname));

  const handlerSelectConnect = (e: string) => {
    if (e === "Tất cả") {
      setConnectStatus("");
    } else {
      setConnectStatus(e);
    }
  };

  const handlerRenderEquipment = () => {
    if (handlerSplitRoute(location.pathname) === routesConfig.equipmentCreate) {
      return <EquipmentCreate />;
    } else if (
      handlerSplitRoute(location.pathname) ===
      handlerSplitRoute(routesConfig.equipmentDetail)
    ) {
      return <EquipmentDetail />;
    } else if (
      handlerSplitRoute(location.pathname) ===
      handlerSplitRoute(routesConfig.equipmentUpdate)
    ) {
      return <EquipmentUpdate />;
    }
    return (
      <>
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
            <Text>Trạng thái kết nối</Text>
            <Select
              defaultValue="Tất cả"
              style={{ width: "70%" }}
              onChange={handlerSelectConnect}
              suffixIcon={<DropdownIcon />}
              className="equipment-select"
              options={[
                { value: "Tất cả", label: "Tất cả" },
                { value: "Kết nối", label: "Kết nối" },
                { value: "Mất kết nối", label: "Mất kết nối" },
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
            <Text>Từ khoá</Text>
            <Input.Search
              className="search-antd"
              style={{ width: "100%" }}
              // onChange={handleChangeSelectStatus}
            />
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
            nameAdd="Thêm thiết bị"
            href={routesConfig.equipmentCreate}
          />
          <Col span={24}>
            <TableComponent data={equipmentList} />
          </Col>
        </Row>
      </>
    );
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
          <Title className="title">Danh sách thiết bị</Title>
        </Col>
      </Row>
      {handlerRenderEquipment()}
    </Col>
  );
}

export default Equipment;
