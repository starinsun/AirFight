import React, { useState, useEffect } from "react";
import { Layout, Menu, Icon } from "antd";
import { Route, useHistory } from "react-router-dom";
import { stats } from "../Canvas";
import { Nash, Network, Manage, Other, Console } from "../../adminOption";

const { Content, Footer, Sider } = Layout;

const System = () => {
  const [collapsed, setCollapsed] = useState(false);
  const nav = useHistory();
  useEffect(() => {
    stats.domElement.style.cssText = "display: none";
  }, []);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={collapsed => {
          setCollapsed(collapsed);
        }}
      >
        <div className='logo' />
        <Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline'>
          <Menu.Item
            key='1'
            onClick={() => {
              nav.push("/admin/console");
            }}
          >
            <Icon type='pie-chart' />
            <span>工作台</span>
          </Menu.Item>
          <Menu.Item
            key='2'
            onClick={() => {
              nav.push("/admin/network");
            }}
          >
            <Icon type='book' />
            <span>神经网络训练</span>
          </Menu.Item>
          <Menu.Item
            key='3'
            onClick={() => {
              nav.push("/admin/manage");
            }}
          >
            <Icon type='instagram' />
            <span>战机信息管理</span>
          </Menu.Item>
          <Menu.Item
            key='6'
            onClick={() => {
              nav.push("/admin/nash");
            }}
          >
            <Icon type='camera' />
            <span>纳什均衡求解</span>
          </Menu.Item>
          <Menu.Item
            key='7'
            onClick={() => {
              nav.push("/admin/other");
            }}
          >
            <Icon type='team' />
            <span>更多</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: "16px" }}>
          <Route path='/admin/manage' component={Manage}></Route>
          <Route path='/admin/nash' component={Nash}></Route>
          <Route path='/admin/network' component={Network}></Route>
          <Route path='/admin/console' component={Console}></Route>
          <Route path='/admin/other' component={Other}></Route>
        </Content>
        <Footer style={{ textAlign: "center" }}>www.asenwang.top</Footer>
      </Layout>
    </Layout>
  );
};
export default System;
