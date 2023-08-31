import React, { useState } from "react";
import { Button, Col, Modal, Row, Typography } from "antd";

const ModalAddProgression: React.FC = () => {
  const { Title, Text } = Typography;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button className="button-continue" htmlType="submit" onClick={showModal}>
        In số
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal-progression"
        footer={
          <Col
            span={24}
            style={{
              background: "#FF9138",
              color: "#fffffff",
              height: 70,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <Row style={{ display: "flex", gap: 10 }}>
              <Text className="text-modal">Thời gian cấp:</Text>
              <Text className="text-modal">09:30 11/10/2021</Text>
            </Row>
            <Row style={{ display: "flex", gap: 10 }}>
              <Text className="text-modal">Hạn sử dụng:</Text>
              <Text className="text-modal">09:30 11/10/2021</Text>
            </Row>
          </Col>
        }
      >
        <Title style={{ fontSize: "1.5rem", marginBottom: 5 }}>
          Số thứ tự được cấp
        </Title>
        <Text
          style={{ fontSize: "2.8rem", fontWeight: "700", color: "#FF7506" }}
        >
          2001201
        </Text>
        <Text>DV: Khám răng hàm mặt (tại quầy số 1)</Text>
      </Modal>
    </>
  );
};

export default ModalAddProgression;
