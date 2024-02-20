import { useAuth } from "../hooks/useAuth"
import { Input, Button, Form, Card, Space } from "antd"

export const LoginPage = () => {

  const { login } = useAuth()

  const handleLogin = async (values) => {
    const loginInfo = await window.api.getLoginInfo(values)
    if (loginInfo.success) {
      await login(values)
    } else {
      alert("Invalid username or password")
    }
  }

  return (
    <Space direction="vertical" size={24}>
      <Card
        title="Login App"
        style={{
          width: 400,
        }}
      >
        <Form onFinish={handleLogin} colon={false}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 20 }}
          initialValues={{
            username: 'jtreleven5',
            password: 'zY1nE46Zm',
          }}
        >
          <Form.Item label="Username" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item label=" " >
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Space>
  )
}

