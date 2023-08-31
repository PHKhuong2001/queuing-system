import { AddButtonCustom, TableComponent } from "@/Shared/components";
import routesConfig from "@/config/routes";
import { Header } from "@/layouts";
import { Col, DatePicker, Input, Row, Select, Typography } from "antd";
import { useAppDispatch } from "@/app/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useEffect, useState } from "react";
import { getAllProgression } from "@/features/progression/progressionSlice";
import { ArrowIcon, DropdownIcon } from "@/Shared/components/icon";
import { getAllService } from "@/features/serviceSlice/serviceSlice";
import { getAllEquipment } from "@/features/equipment/equipmentSlice";
import { IProgression } from "@/Shared/interfaces/ProgressionInterface";
function ProgressionPage() {
  const datalistProgression = useSelector(
    (state: RootState) => state.progression.dataListProgression
  );
  const dataService = useSelector(
    (state: RootState) => state.service.dataListService
  );
  const dataEquipment = useSelector((state: RootState) => state.equipment.data);
  const dispatch = useAppDispatch();
  const { Title, Text } = Typography;
  const [progresionFilter, setProgressionFilter] = useState<IProgression>({
    nameService: "",
    status: "",
    powerSupply: "",
  });
  const [fromTo, setFromTo] = useState({ from: "", to: "" });
  useEffect(() => {
    dispatch(getAllProgression({ progresion: progresionFilter, ...fromTo }));
    dispatch(getAllService({}));
    dispatch(getAllEquipment({ active: "", connect: "" }));
    console.log(progresionFilter, "re-render");
  }, [dispatch, progresionFilter, fromTo]);
  const listDropdownService = dataService.map((item) => {
    return { value: item.name, label: item.name };
  });
  // Sử dụng Set để loại bỏ các giá trị trùng lặp
  const uniqueEquipmentNames = new Set(dataEquipment.map((item) => item.name));

  // Chuyển Set thành mảng và tạo danh sách cho dropdown
  const listDropdownEquipment = Array.from(uniqueEquipmentNames).map(
    (item) => ({
      value: item,
      label: item,
    })
  );

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
            onChange={(e) =>
              setProgressionFilter((prev) => ({ ...prev, nameService: e }))
            }
            options={[
              { value: "Tất cả", label: "Tất cả" },
              ...listDropdownService,
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
            onChange={(e) =>
              setProgressionFilter((prev) => ({ ...prev, status: e }))
            }
            options={[
              { value: "all", label: "Tất cả" },
              { value: "Đang chờ", label: "Đang chờ" },
              { value: "Đã sử dụng", label: "Đã sử dụng" },
              { value: "Đã bỏ qua", label: "Đã bỏ qua" },
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
            onChange={(e) =>
              setProgressionFilter((prev) => ({ ...prev, powerSupply: e }))
            }
            options={[
              { value: "all", label: "Tất cả" },
              ...listDropdownEquipment,
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
