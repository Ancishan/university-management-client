import { Layout, Menu, MenuProps } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const MainLayout = () => {

    const items : MenuProps['items'] = [
      {
        key: '1',
        label: 'DashBoard',
        children:[
          {
            key:'11',
            label:'Admin'
          }
        ]
      },
      {
        key: '2',
        label: 'Profile'
      }
    ]

  return (
    <Layout style={{height: '100vh'}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{color: 'white', textAlign: 'center', height:'4rem', display: 'flex', justifyContent:'center'}}>University Management</div>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0}} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
           
            }}
          >
          <h1>The main content</h1>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;