import React from 'react'
import { Carousel, Card, Row, Col, Typography } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography

const Home = () => {
  // 模拟数据
  const carouselItems = [
    {
      id: 1,
      title: '超聚变机架式服务器',
      image: 'https://placeholder.com/800x400',
      description: '专为大模型AI计算打造的高性能服务器',
    },
    {
      id: 2,
      title: 'A100 80G GPU服务器',
      image: 'https://placeholder.com/800x400',
      description: '强大的GPU算力支持',
    },
  ]

  const productCategories = [
    {
      id: 1,
      title: 'AI服务器',
      products: [
        { id: 1, name: '超聚变2288HV5', price: 11299 },
        { id: 2, name: '超聚变2288HV7', price: 37699 },
      ],
    },
    {
      id: 2,
      title: 'GPU设备',
      products: [
        { id: 3, name: 'A100 80G', price: 27300 },
        { id: 4, name: '4090整机', price: 7500 },
      ],
    },
  ]

  return (
    <div className="home-container">
      <Carousel autoplay>
        {carouselItems.map(item => (
          <div key={item.id}>
            <div
              style={{ height: '400px', background: '#364d79', color: '#fff', textAlign: 'center' }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Carousel>

      <div style={{ padding: '24px 0' }}>
        {productCategories.map(category => (
          <div key={category.id} style={{ marginBottom: '24px' }}>
            <Title level={3}>{category.title}</Title>
            <Row gutter={[16, 16]}>
              {category.products.map(product => (
                <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                  <Link to={`/products/${product.id}`}>
                    <Card hoverable>
                      <Card.Meta title={product.name} description={`¥${product.price}`} />
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
