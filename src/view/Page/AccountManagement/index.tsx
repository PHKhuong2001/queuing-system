import { AddButtonCustom, TableComponent } from "@/Shared/components";
import { DropdownIcon } from "@/Shared/components/icon";
import { useAppDispatch } from "@/app/hooks";
import { RootState } from "@/app/store";
import routesConfig from "@/config/routes";
import { getAllAccount } from "@/features/auth/authSlice";
import { Header } from "@/layouts";
import { Col, Input, Row, Select, Typography } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function AccountManagementPage() {
  const listAccount = useSelector(
    (state: RootState) => state.auth.dataListAccount
  );
  const dispatch = useAppDispatch();
  const { Text, Title } = Typography;

  useEffect(() => {
    dispatch(getAllAccount());
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
          <Title className="title">Danh sách tài khoản</Title>
        </Col>
      </Row>
      <Row
        className="d-flex justify-content-between"
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
          <Text>Trạng thái hoạt động</Text>
          <Select
            defaultValue="Tất cả"
            style={{ width: "90%" }}
            className="equipment-select"
            suffixIcon={<DropdownIcon />}
            // onChange={handlerSelectActive}
            options={[
              { value: "Tất cả", label: "Tất cả" },
              { value: "Hoạt động", label: "Hoạt động" },
              { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
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
          nameAdd="Thêm tài khoản"
          href={routesConfig.accountCreate}
        />
        <Col span={24}>
          <TableComponent data={listAccount} />
        </Col>
      </Row>
    </Col>
  );
}

export default AccountManagementPage;
