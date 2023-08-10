import BackgroundLogin from "@/view/Auth/Login/BackgroundImage";
import { Layout } from "antd";

function LayoutLogin({ children }: any) {
  const { Sider, Content } = Layout;
  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#F6F6F6",
  };
  return (
    <Layout className="layout-auth">
      <Sider style={siderStyle} className="layout-auth-login">
        {children}
      </Sider>
      <Content style={{ backgroundColor: "white" }}>
        <BackgroundLogin></BackgroundLogin>
      </Content>
    </Layout>
  );
}

export default LayoutLogin;
