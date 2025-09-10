import React, { useState } from 'react'
import { Form, Input, Button, Tabs, message, Card, Typography, Divider } from 'antd'
import { useNavigate } from 'react-router-dom'
import { WechatOutlined } from '@ant-design/icons'
import styles from './Login.module.css'

const { Title } = Typography
const { TabPane } = Tabs

const Login = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [countdown, setCountdown] = useState(0)

  // 发送验证码
  const handleSendCode = async () => {
    try {
      const phone = form.getFieldValue('phone')
      if (!phone || !/^1[3-9]\d{9}$/.test(phone)) {
        message.error('请输入正确的手机号')
        return
      }

      setLoading(true)
      // TODO: 调用发送验证码API
      message.success('验证码已发送')

      // 开始倒计时
      setCountdown(60)
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } catch (error) {
      message.error('发送验证码失败')
    } finally {
      setLoading(false)
    }
  }

  // 处理密码登录
  const handlePasswordLogin = async values => {
    try {
      setLoading(true)
      // TODO: 调用密码登录API
      console.log('密码登录:', values)
      message.success('登录成功')
      navigate('/')
    } catch (error) {
      message.error('登录失败')
    } finally {
      setLoading(false)
    }
  }

  // 处理验证码登录
  const handleCodeLogin = async values => {
    try {
      setLoading(true)
      // TODO: 调用验证码登录API
      console.log('验证码登录:', values)
      message.success('登录成功')
      navigate('/')
    } catch (error) {
      message.error('登录失败')
    } finally {
      setLoading(false)
    }
  }

  // 处理微信登录
  const handleWechatLogin = () => {
    // TODO: 实现微信登录
    message.info('微信登录功能开发中...')
  }

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Title level={2} className={styles.title}>
          登录
        </Title>
        <Tabs defaultActiveKey="password" centered>
          <TabPane tab="密码登录" key="password">
            <Form
              form={form}
              name="passwordLogin"
              onFinish={handlePasswordLogin}
              layout="vertical"
              requiredMark={false}
            >
              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: '请输入手机号' },
                  { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' },
                ]}
              >
                <Input placeholder="请输入手机号" maxLength={11} />
              </Form.Item>

              <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
                <Input.Password placeholder="请输入密码" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                  className={styles.submitButton}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </TabPane>

          <TabPane tab="验证码登录" key="code">
            <Form
              form={form}
              name="codeLogin"
              onFinish={handleCodeLogin}
              layout="vertical"
              requiredMark={false}
            >
              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: '请输入手机号' },
                  { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' },
                ]}
              >
                <Input placeholder="请输入手机号" maxLength={11} />
              </Form.Item>

              <Form.Item name="code" rules={[{ required: true, message: '请输入验证码' }]}>
                <div className={styles.codeInput}>
                  <Input placeholder="请输入验证码" maxLength={6} />
                  <Button
                    type="primary"
                    onClick={handleSendCode}
                    disabled={countdown > 0}
                    loading={loading}
                  >
                    {countdown > 0 ? `${countdown}秒后重试` : '获取验证码'}
                  </Button>
                </div>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                  className={styles.submitButton}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>

        <Divider>其他登录方式</Divider>

        <div className={styles.otherLogin}>
          <Button
            icon={<WechatOutlined />}
            onClick={handleWechatLogin}
            className={styles.wechatButton}
          >
            微信登录
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default Login
