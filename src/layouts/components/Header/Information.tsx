import { NotifyIcon } from "@/Shared/components/icon";
import routesConfig from "@/config/routes";
import { Avatar, Button, Col, Divider, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { IAccount } from "@/Shared/interfaces/AccountInterface";

function InformationComponent() {
  const { Text, Title } = Typography;
  const [show, setShow] = useState(false);
  const notifyRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    if (uploading.account) {
      setTokens(uploading);
    }
  }, [uploading]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notifyRef.current &&
        event.target instanceof HTMLElement &&
        !notifyRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <Col
      span={12}
      className="d-flex justify-content-end align-items-center position-relative"
      style={{
        height: "100%",
        lineHeight: 0,
        gap: 25,
      }}
    >
      {show && (
        <Col
          className="position-absolute notify boxShadow-dashboard"
          style={{
            width: "300px",
            height: "400px",
            background: "#ffffff",
            zIndex: 10,
          }}
        >
          <Row style={{ padding: "10px 15px", background: "#FF9138" }}>
            <Text className="notify-title">Thông báo</Text>
          </Row>
          <div className="notify-content">
            <Row className="d-flex flex-derection-column notify-content-wrapper">
              <Text className="notify-content-wrapper-text">
                Người dùng: Nguyễn Thị Thùy Dung
              </Text>
              <Text className="notify-content-wrapper-time">
                Thời gian nhận số: 12h20 ngày 30/11/2021
              </Text>
            </Row>
            <Divider style={{ margin: 0 }} />
            <Row className="d-flex flex-derection-column notify-content-wrapper">
              <Text className="notify-content-wrapper-text">
                Người dùng: Nguyễn Thị Thùy Dung
              </Text>
              <Text className="notify-content-wrapper-time">
                Thời gian nhận số: 12h20 ngày 30/11/2021
              </Text>
            </Row>
            <Divider style={{ margin: 0 }} />
            <Row className="d-flex flex-derection-column notify-content-wrapper">
              <Text className="notify-content-wrapper-text">
                Người dùng: Nguyễn Thị Thùy Dung
              </Text>
              <Text className="notify-content-wrapper-time">
                Thời gian nhận số: 12h20 ngày 30/11/2021
              </Text>
            </Row>
            <Divider style={{ margin: 0 }} />
            <Row className="d-flex flex-derection-column notify-content-wrapper">
              <Text className="notify-content-wrapper-text">
                Người dùng: Nguyễn Thị Thùy Dung
              </Text>
              <Text className="notify-content-wrapper-time">
                Thời gian nhận số: 12h20 ngày 30/11/2021
              </Text>
            </Row>
            <Divider style={{ margin: 0 }} />
            <Row className="d-flex flex-derection-column notify-content-wrapper">
              <Text className="notify-content-wrapper-text">
                Người dùng: Nguyễn Thị Thùy Dung
              </Text>
              <Text className="notify-content-wrapper-time">
                Thời gian nhận số: 12h20 ngày 30/11/2021
              </Text>
            </Row>
            <Divider style={{ margin: 0 }} />
            <Row className="d-flex flex-derection-column notify-content-wrapper">
              <Text className="notify-content-wrapper-text">
                Người dùng: Nguyễn Thị Thùy Dung
              </Text>
              <Text className="notify-content-wrapper-time">
                Thời gian nhận số: 12h20 ngày 30/11/2021
              </Text>
            </Row>
            <Divider style={{ margin: 0 }} />
            <Row className="d-flex flex-derection-column notify-content-wrapper">
              <Text className="notify-content-wrapper-text">
                Người dùng: Nguyễn Thị Thùy Dung
              </Text>
              <Text className="notify-content-wrapper-time">
                Thời gian nhận số: 12h20 ngày 30/11/2021
              </Text>
            </Row>
            <Divider style={{ margin: 0 }} />
          </div>
        </Col>
      )}
      <Button
        icon={<NotifyIcon />}
        shape="circle"
        className="button-notify"
        onClick={() => setShow(!show)}
      ></Button>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Link to={routesConfig.personalInformation}>
          <Avatar src={tokens?.image} size={40} />
        </Link>
        <div
          className="d-flex justify-content-center flex-direction-column"
          style={{
            height: "100%",
            width: "127px",
          }}
        >
          <Text style={{ fontSize: "0.7rem" }}>Xin chào</Text>
          <Link to={routesConfig.personalInformation}>
            <Title style={{ margin: 0, fontSize: "0.7rem" }}>
              {tokens?.name}
            </Title>
          </Link>
        </div>
      </div>
    </Col>
  );
}

export default InformationComponent;
