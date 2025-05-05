import React, { useState } from 'react'
import { Table, Button, InputNumber, Typography, Space, message } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const { Title } = Typography

const Cart = () => {
  // 模拟购物车数据
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: '超聚变2288HV5',
      price: 11299,
      quantity: 1,
    },
    {
      id: 3,
      name: 'A100 80G',
      price: 27300,
      quantity: 1,
    },
  ])

  const handleQuantityChange = (id, value) => {
    setCartItems(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, quantity: value } : item))
    )
  }

  const handleDelete = id => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    message.success('商品已从购物车移除')
  }

  const handleCheckout = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    message.info(`正在跳转到结算页面，总金额：¥${total}`)
  }

  const columns = [
    {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '单价',
      dataIndex: 'price',
      key: 'price',
      render: price => `¥${price}`,
    },
    {
      title: '数量',
      key: 'quantity',
      render: (_, record) => (
        <InputNumber
          min={1}
          value={record.quantity}
          onChange={value => handleQuantityChange(record.id, value)}
        />
      ),
    },
    {
      title: '小计',
      key: 'subtotal',
      render: (_, record) => `¥${record.price * record.quantity}`,
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Button
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={() => handleDelete(record.id)}
        >
          删除
        </Button>
      ),
    },
  ]

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="cart-container" style={{ padding: '24px' }}>
      <Title level={2}>购物车</Title>

      <Table columns={columns} dataSource={cartItems} rowKey="id" pagination={false} />

      <div style={{ marginTop: '24px', textAlign: 'right' }}>
        <Space>
          <span style={{ fontSize: '16px' }}>
            总计：<span style={{ color: '#f5222d', fontSize: '24px' }}>¥{total}</span>
          </span>
          <Button
            type="primary"
            size="large"
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
          >
            结算
          </Button>
        </Space>
      </div>
    </div>
  )
}

export default Cart
