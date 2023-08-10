import { Avatar, Col, Input, Row, Typography } from "antd";
import { Header } from "@/layouts";
import { UserOutlined } from "@ant-design/icons";

function PersonalInformation() {
  return (
    <Col span={24} style={{ height: "100%" }}>
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row className="information-wrapper">
        <Col
          span={5}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar icon={<UserOutlined />} size={200} />
          <Typography.Title
            style={{ fontSize: "1.2rem", margin: "10px 0 0 0" }}
          >
            Lê Quỳnh Ái Vân
          </Typography.Title>
        </Col>
        <Col
          span={9}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingLeft: 10,
            gap: 10,
          }}
        >
          <Row>
            <Col span={24} className="rese-col-information">
              <Typography.Text className="label-input">
                Tên người dùng
              </Typography.Text>
              <Input
                disabled
                value="Lê Quỳnh Ái Vân"
                className="input-information"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24} className="rese-col-information">
              <Typography.Text className="label-input">
                Số điện thoại
              </Typography.Text>
              <Input
                disabled
                value="Lê Quỳnh Ái Vân"
                className="input-information"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24} className="rese-col-information">
              <Typography.Text className="label-input">Email: </Typography.Text>
              <Input
                disabled
                value="Lê Quỳnh Ái Vân"
                className="input-information"
              />
            </Col>
          </Row>
        </Col>
        <Col
          span={9}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: "auto",
            gap: 10,
          }}
        >
          <Row>
            <Col span={24} className="rese-col-information">
              <Typography.Text className="label-input">
                Tên người dùng
              </Typography.Text>
              <Input
                disabled
                value="Lê Quỳnh Ái Vân"
                className="input-information"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24} className="rese-col-information">
              <Typography.Text className="label-input">
                Số điện thoại
              </Typography.Text>
              <Input
                disabled
                value="Lê Quỳnh Ái Vân"
                className="input-information"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24} className="rese-col-information">
              <Typography.Text className="label-input">Email: </Typography.Text>
              <Input
                disabled
                value="Lê Quỳnh Ái Vân"
                className="input-information"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default PersonalInformation;
