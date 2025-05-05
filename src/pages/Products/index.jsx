import React, { useState } from 'react'
import { Card, Row, Col, Input, Select, Typography, Space } from 'antd'
import { Link } from 'react-router-dom'

const { Search } = Input
const { Title } = Typography

const ProductList = () => {
  // 模拟产品数据
  const products = [
    {
      id: 1,
      name: '超聚变2288HV5',
      category: 'server',
      price: 11299,
      description: '专为大模型AI计算打造的高性能服务器',
    },
    {
      id: 2,
      name: '超聚变2288HV7',
      category: 'server',
      price: 37699,
      description: '2U机架式高性能主机',
    },
    {
      id: 3,
      name: 'A100 80G',
      category: 'gpu',
      price: 27300,
      description: '高性能GPU计算卡',
    },
    {
      id: 4,
      name: '4090整机',
      category: 'gpu',
      price: 7500,
      description: '专业显卡工作站',
    },
  ]

  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProducts = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchText.toLowerCase()) ||
      product.description.toLowerCase().includes(searchText.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="products-container" style={{ padding: '24px' }}>
      <Title level={2}>产品列表</Title>

      <Space style={{ marginBottom: '24px' }}>
        <Search
          placeholder="搜索产品"
          allowClear
          onChange={e => setSearchText(e.target.value)}
          style={{ width: 200 }}
        />
        <Select
          defaultValue="all"
          style={{ width: 120 }}
          onChange={value => setSelectedCategory(value)}
        >
          <Select.Option value="all">全部分类</Select.Option>
          <Select.Option value="server">服务器</Select.Option>
          <Select.Option value="gpu">GPU设备</Select.Option>
        </Select>
      </Space>

      <Row gutter={[16, 16]}>
        {filteredProducts.map(product => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <Link to={`/products/${product.id}`}>
              <Card hoverable>
                <Card.Meta
                  title={product.name}
                  description={
                    <>
                      <p>{product.description}</p>
                      <p style={{ color: '#f5222d', fontWeight: 'bold' }}>¥{product.price}</p>
                    </>
                  }
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ProductList
