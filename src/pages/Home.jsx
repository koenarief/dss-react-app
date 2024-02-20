import { Link } from "react-router-dom"
import { Carousel, Image } from 'antd'
import { useState, useEffect } from "react"

const contentStyle = () => ({
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
})

export const HomePage = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await window.api.productList()
    setProducts(JSON.parse(response))
  }

  useEffect(() => {
    getProducts()
  }, [])

  const lis = products.map((row) => (
    <div>
      <h3 style={contentStyle()}>
        {row.description}
      </h3>
    </div>
  ))

  return (
    <div>
      <Carousel autoplay>
        {lis}
      </Carousel>
      <div><Link to="/product/list">Product List</Link></div>
    </div>
  )
}

