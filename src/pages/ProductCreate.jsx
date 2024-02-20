import { useNavigate } from "react-router-dom"
import { useOutletContext } from "react-router-dom"
import { Input, InputNumber, Button, Form, Card, Space } from "antd"

export const ProductCreate = () => {
  const [setCurrent] = useOutletContext()
  const { TextArea } = Input
  const navigate = useNavigate()

  const handlePost = async (values) => {
    const postResult = await window.api.productCreate(values)
    if (postResult.success) {
      navigate("/product/list")
      setCurrent("l")
    } else {
      alert("Invalid data")
    }
  }

  return (
    <Space direction="vertical" size={12}>
      <Card
        title="Create Product"
        style={{
          width: 680,
        }}
      >
        <Form onFinish={handlePost}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 20 }}
          layout="horizontal"
          colon={false}
          initialValues={{
            ["image"]: "https://picsum.photos/seed/changeme/400/300",
            ["description"]: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            ["price"]: 500,
            ["stock"]: 1,
            ["rating"]: 10,
          }}>
          <Form.Item label="Title" name="title">
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Image" name="image">
            <Input />
          </Form.Item>
          <Form.Item label="Price" name="price">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Stock" name="stock">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Rating" name="rating">
            <InputNumber />
          </Form.Item>
          <Form.Item label=" ">
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Space>
  )
}

