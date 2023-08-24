import {
  Avatar,
  Button,
  Col,
  Input,
  Row,
  Typography,
  Upload,
  UploadProps,
  message,
} from "antd";
import { Header } from "@/layouts";
import { IAccount } from "@/Shared/interfaces/AccountInterface";
import { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@/app/hooks";
import { updateAccountImage } from "@/features/auth/authSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

function PersonalInformation() {
  const uploading = useSelector((state: RootState) => state.auth.loadingAvatar);
  const [tokens, setTokens] = useState<IAccount | undefined>(() => {
    const storedUser = localStorage.getItem("token");
    if (storedUser) {
      const user: IAccount = JSON.parse(storedUser || "");
      return user;
    } else {
      return undefined;
    }
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (uploading.account) {
      setTokens(uploading);
    }
  }, [uploading]);

  const handleImageUpload = (imageFile: any) => {
    if (!imageFile) {
      message.error("No image selected.");
      return;
    }

    try {
      dispatch(
        updateAccountImage({
          accountId: tokens?.account || "",
          imageData: imageFile.fileList[0],
        })
      );
    } catch (error) {
      console.error("Error uploading image and updating Firestore:", error);
    }
  };

  const props: UploadProps = {
    beforeUpload: (file: any) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error(`${file.name} is not an image file`);
      }
      return false;
    },
  };

  return (
    <Col span={24} style={{ height: "100%" }}>
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row className="information-wrapper">
        <Col
          className="d-flex align-items-center flex-direction-column position-relative"
          span={5}
        >
          <Avatar src={tokens?.image} size={200} />
          <Typography.Title
            style={{ fontSize: "1.2rem", margin: "10px 0 0 0" }}
          >
            {tokens?.name}
          </Typography.Title>
          <Upload
            className="position-absolute absolute-upload"
            showUploadList={false}
            {...props}
            onChange={handleImageUpload}
            action="http://localhost:3000/information"
          >
            <Button icon={<UploadOutlined />}></Button>
          </Upload>
          {/* <input type="file" onChange={handleImageUpload} /> */}
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
                value={tokens?.name}
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
                value={tokens?.phoneNumber}
                className="input-information"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24} className="rese-col-information">
              <Typography.Text className="label-input">Email: </Typography.Text>
              <Input
                disabled
                value={tokens?.email}
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
                Tên đăng nhập
              </Typography.Text>
              <Input
                disabled
                value={tokens?.account}
                className="input-information"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24} className="rese-col-information">
              <Typography.Text className="label-input">
                Mật khẩu
              </Typography.Text>
              <Input
                disabled
                value={tokens?.password}
                className="input-information"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24} className="rese-col-information">
              <Typography.Text className="label-input">
                Vai trò:
              </Typography.Text>
              <Input
                disabled
                value={tokens?.role}
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
