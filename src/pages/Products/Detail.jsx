import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, Button, Typography, Space, Descriptions, message } from 'antd'

const { Title } = Typography

const ProductDetail = () => {
  const { id } = useParams()

  // 模拟产品详细数据
  const product = {
    id: parseInt(id),
    name: '超聚变2288HV5',
    price: 11299,
    description: '专为大模型AI计算打造的高性能服务器',
    specs: {
      processor: '2颗英特尔至强可扩展处理器',
      memory: '24个DDR4内存插槽',
      storage: '10个PCIe扩展槽',
      powerSupply: '高效能源管理系统',
    },
  }

  const handleAddToCart = () => {
    message.success('已添加到购物车')
  }

  const handleBuyNow = () => {
    message.info('正在跳转到结算页面...')
  }

  return (
    <div className="product-detail" style={{ padding: '24px' }}>
      <Card>
        <Title level={2}>{product.name}</Title>

        <Descriptions bordered column={1}>
          <Descriptions.Item label="价格">
            <span style={{ color: '#f5222d', fontSize: '24px' }}>¥{product.price}</span>
          </Descriptions.Item>
          <Descriptions.Item label="产品描述">{product.description}</Descriptions.Item>
          <Descriptions.Item label="处理器">{product.specs.processor}</Descriptions.Item>
          <Descriptions.Item label="内存">{product.specs.memory}</Descriptions.Item>
          <Descriptions.Item label="存储">{product.specs.storage}</Descriptions.Item>
          <Descriptions.Item label="电源">{product.specs.powerSupply}</Descriptions.Item>
        </Descriptions>

        <div style={{ marginTop: '24px' }}>
          <Space size="large">
            <Button type="primary" size="large" onClick={handleAddToCart}>
              加入购物车
            </Button>
            <Button type="primary" danger size="large" onClick={handleBuyNow}>
              立即购买
            </Button>
          </Space>
        </div>
      </Card>
    </div>
  )
}

export default ProductDetail
