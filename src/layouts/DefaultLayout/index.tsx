import { Layout } from "antd";
import { SideBar } from "..";

interface DefaultLayoutProps {
  children: any;
}
function DefaultLayout({ children }: DefaultLayoutProps) {
  const { Sider, Content } = Layout;

  return (
    <Layout className="layout-default">
      <Sider className="layout-default-sider">
        <SideBar></SideBar>
      </Sider>
      <Content className="layout-default-content">{children}</Content>
    </Layout>
  );
}

export default DefaultLayout;
