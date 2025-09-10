import React, { useState } from 'react'
import { Form, Input, Button, message, Card, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import styles from './Register.module.css'

const { Title } = Typography
// 测试第一次提交---revert
const Register = () => {
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

  // 提交注册
  const handleSubmit = async values => {
    try {
      setLoading(true)
      // TODO: 调用注册API
      console.log('注册信息:', values)
      message.success('注册成功')
      navigate('/login')
    } catch (error) {
      message.error('注册失败')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Title level={2} className={styles.title}>
          注册账号
        </Title>
        <Form
          form={form}
          name="register"
          onFinish={handleSubmit}
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

          <Form.Item
            name="code"
            rules={[{ required: true, message: '请输入验证码' }]}
          >
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

          <Form.Item
            name="password"
            rules={[
              { required: true, message: '请输入密码' },
              { min: 6, message: '密码长度不能小于6位' },
            ]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: '请确认密码' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('两次输入的密码不一致'))
                },
              }),
            ]}
          >
            <Input.Password placeholder="请确认密码" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              className={styles.submitButton}
            >
              注册
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Register