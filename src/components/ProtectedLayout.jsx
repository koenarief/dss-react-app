import { useAuth } from "../hooks/useAuth"
import { Link, Navigate, Outlet } from "react-router-dom"
import { UserOutlined, HomeOutlined, ShopOutlined, EditOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Layout, Menu } from 'antd'

const { Content, Footer, Sider } = Layout

export const ProtectedLayout = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  const [current, setCurrent] = useState('l')

  const onClick = (e) => {
    setCurrent(e.key)
  }

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Menu theme="dark" mode="inline" onClick={onClick} selectedKeys={[current]}>
          <Menu.Item key="h" icon={<HomeOutlined />}>
            <Link style={{ textDecoration: 'none' }} to="/product">Home</Link>
          </Menu.Item>
          <Menu.Item key="l" icon={<ShopOutlined />}>
            <Link style={{ textDecoration: 'none' }} to="/product/list">List Product</Link>
          </Menu.Item>
          <Menu.Item key="r" icon={<EditOutlined />}>
            <Link style={{ textDecoration: 'none' }} to="/product/create">Create Product</Link>
          </Menu.Item>
          <Menu.Item key="o" icon={<UserOutlined />}>
            <div onClick={handleLogout}>Logout</div>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <Outlet context={[setCurrent]}/>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design © {new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  )
}
