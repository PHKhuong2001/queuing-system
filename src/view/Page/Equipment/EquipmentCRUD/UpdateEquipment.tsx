import { DeleteIcon } from "@/Shared/components/icon";
import { IEquipment } from "@/Shared/interfaces/EquipmentInterface";
import { useAppDispatch } from "@/app/hooks";
import { RootState } from "@/app/store";
import routesConfig from "@/config/routes";
import {
  findEquipmentUpdate,
  updateEquipment,
} from "@/features/equipment/equipmentSlice";
import { Button, Col, Form, Input, Row, Select, Typography } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export const status = [
  { value: "Tất cả", label: "Tất cả" },
  { value: "Hoạt động", label: "Hoạt động" },
  { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
];
const formUpdate: IEquipment = {
  maThietBi: "",
  loaiThietBi: "",
  tenThietBi: "",
  dangNhap: "",
  ip: "",
  password: "",
  dichVuSuDung: "",
};

function EquipmentUpdate() {
  const equipment = useSelector(
    (state: RootState) => state.equipment.equipmentUpdate
  );
  const dispatch = useAppDispatch();
  const [formValue, setFormUpdateValue] = useState(formUpdate);
  const { Title, Text } = Typography;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Sử dụng useEffect để cập nhật giá trị formValue khi equipment thay đổi
    if (equipment) {
      setFormUpdateValue(equipment);
    }
  }, [equipment]);

  useEffect(() => {
    dispatch(findEquipmentUpdate(id || ""));
  }, [dispatch, id]);

  const handlerSubmitFormUpdate = () => {
    dispatch(updateEquipment({ equiment: formValue, equipmentId: id || "" }));
    setFormUpdateValue(formUpdate);
    navigate(routesConfig.equipment);
    return false;
  };
  const parseServiceStringToArray = (serviceString: string) => {
    return serviceString.split(",").map((item) => item.trim());
  };

  const handleRemoveService = (index: any) => {
    const updatedServices = [
      ...parseServiceStringToArray(formValue.dichVuSuDung || ""),
    ];
    updatedServices.splice(index, 1);
    setFormUpdateValue((prev) => ({
      ...prev,
      dichVuSuDung: updatedServices.join(", "),
    }));
  };

  console.log(formValue.dichVuSuDung);

  return (
    <Form onFinish={handlerSubmitFormUpdate}>
      <Row className="equipment-wrapper">
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
            <Col span={12} className="equipment-create-group">
              <Text className="equipment-input-label">Mã thiết bị *</Text>
              <Input
                style={{ width: "95%", height: 38 }}
                placeholder="Nhập mã thiết bị"
                value={formValue.maThietBi}
                onChange={(e) =>
                  setFormUpdateValue((prev) => ({
                    ...prev,
                    maThietBi: e.target.value,
                  }))
                }
              />
            </Col>
            <Col span={12} className="equipment-create-group">
              <Text className="equipment-input-label">Loại thiết bị *</Text>
              <Select
                style={{ width: "95%", height: 38 }}
                placeholder="Chọn loại thiết bị"
                className="equipment-select-create"
                options={[
                  { value: "Kiosk", label: "Kiosk" },
                  { value: "Display counter", label: "Display counter" },
                ]}
                value={formValue.loaiThietBi}
                onChange={(e) =>
                  setFormUpdateValue((prev) => ({
                    ...prev,
                    loaiThietBi: e,
                  }))
                }
              />
            </Col>
          </Row>
          <Row
            style={{
              marginTop: 15,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Col span={12} className="equipment-create-group">
              <Text className="equipment-input-label">Tên thiết bị: *</Text>
              <Input
                style={{ width: "95%", height: 38 }}
                placeholder="Nhập tên thiết bị"
                value={formValue.tenThietBi}
                onChange={(e) =>
                  setFormUpdateValue((prev) => ({
                    ...prev,
                    tenThietBi: e.target.value,
                  }))
                }
              />
            </Col>
            <Col span={12} className="equipment-create-group">
              <Text className="equipment-input-label">Tên đăng nhập: *</Text>
              <Input
                style={{ width: "95%", height: 38 }}
                placeholder="Nhập tên đăng nhập"
                value={formValue.dangNhap}
                onChange={(e) =>
                  setFormUpdateValue((prev) => ({
                    ...prev,
                    dangNhap: e.target.value,
                  }))
                }
              />
            </Col>
          </Row>
          <Row
            style={{
              marginTop: 15,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Col span={12} className="equipment-create-group">
              <Text className="equipment-input-label">Địa chỉ IP: *</Text>
              <Input
                style={{ width: "95%", height: 38 }}
                placeholder="Nhập địa chỉ IP"
                value={formValue.ip}
                onChange={(e) =>
                  setFormUpdateValue((prev) => ({
                    ...prev,
                    ip: e.target.value,
                  }))
                }
              />
            </Col>
            <Col span={12} className="equipment-create-group">
              <Text className="equipment-input-label">Mật khẩu: *</Text>
              <Input
                style={{ width: "95%", height: 38 }}
                placeholder="Nhập mật khẩu"
                value={formValue.password}
                onChange={(e) =>
                  setFormUpdateValue((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
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
              <Text className="equipment-input-label">Dịch vụ sử dụng: *</Text>
              <ul className="list-service d-flex ">
                {formValue.dichVuSuDung?.split(",").map((item, index) => {
                  return (
                    <li className="list-service-item d-flex align-items-center justify-content-between">
                      <Text style={{ fontSize: "0.8rem", color: "#ffffff" }}>
                        {item}
                      </Text>
                      <span
                        className="d-flex align-items-center justify-content-center"
                        onClick={() => handleRemoveService(index)}
                      >
                        <DeleteIcon />
                      </span>
                    </li>
                  );
                })}
              </ul>
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
            href={routesConfig.equipment}
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
  );
}

export default EquipmentUpdate;
