import { useState, useEffect, createElement } from "react"
import { Button, List, Space, Modal } from "antd"
import { ShopOutlined, LikeOutlined, DeleteOutlined } from '@ant-design/icons'

export const ProductList = () => {
  const [products, setProducts] = useState([])
  const [refreshKey, setRefreshKey] = useState(0)
  const [id, setId] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOk = () => {
    deleteProduct()
    setIsModalOpen(false)
  };

  const handleCancel = () => {
    setIsModalOpen(false)
  };

  const getProducts = async () => {
    const response = await window.api.productList()
    setProducts(JSON.parse(response))
  }

  const confirmDelete = (id) => {
    setId(id)
    setIsModalOpen(true)
  }

  const deleteProduct = async () => {
    await window.api.productDelete({ id })
    setRefreshKey(oldKey => oldKey + 1)
  }

  useEffect(() => {
    getProducts()
  }, [refreshKey])

  const IconText = ({ icon, text }) => (
    <Space>
      {createElement(icon)}
      {text}
    </Space>
  );

  return (
    <>
      <Modal title="Warning" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Delete data product {id}?</p>
      </Modal>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 3,
        }}
        dataSource={products}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={LikeOutlined} text={item.rating} key="list-vertical-rating-o" />,
              <IconText icon={ShopOutlined} text={item.stock} key="list-vertical-stock-o" />,
              <Button type="link" onClick={() => confirmDelete(item._id)}>
                <IconText icon={DeleteOutlined} text="Delete" key="list-vertical-delete" />
              </Button>,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src={item.image}
              />
            }
          >
            <List.Item.Meta
              description={item.title}
            />
            {item.description}
          </List.Item>

        )}
      />
    </>
  )
}

