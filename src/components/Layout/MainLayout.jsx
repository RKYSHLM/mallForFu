import React from 'react'
import { Layout, Menu, Row, Col, Typography, Input } from 'antd'
import styles from './MainLayout.module.css'

const { Title } = Typography
import { Link } from 'react-router-dom'

const { Header, Content, Footer } = Layout

const MainLayout = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <Header>
        <div className={styles.logo}>
          <img src="/icon.jpg" alt="Logo" />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ display: 'flex' }}
        >
          <Menu.Item key="1">
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/products">产品列表</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/cart">购物车</Link>
          </Menu.Item>
          <Menu.Item
            key="4"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              // marginRight: 'auto',
              marginLeft: 'auto',
            }}
          >
            <Input.Search
              placeholder="搜索"
              style={{
                width: 300,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 'auto',
                marginRight: '20px',
              }}
            />
          </Menu.Item>
          {/* 注册靠右并推开后面的登录 */}
          <Menu.Item key="5" style={{ marginLeft: 'auto', marginRight: 10 }}>
            <Link to="/register">注册</Link>
          </Menu.Item>

          {/* 登录紧跟注册，右边保持10px距离 */}
          <Menu.Item key="6" style={{ marginRight: 10 }}>
            <Link to="/login">登录</Link>
          </Menu.Item>
          {/* <Menu.Item key="5" style={{ marginLeft: 'auto', marginRight: '2px' }}>
            <Link to="/register">注册</Link>
          </Menu.Item>
          <Menu.Item
            key="6"
            className={styles.loginItem}
            style={{ marginLeft: 'auto', marginRight: '2px' }}
          >
            <Link to="/login">登录</Link>
          </Menu.Item> */}
        </Menu>
      </Header>
      <Content>
        <div className={styles.siteLayoutContent}>{children}</div>
      </Content>
      <Footer className={styles.footer}>
        {/* 顶部四栏区 */}
        <div className={styles.top}>
          <div className={styles.section}>
            <div className={styles.qrCodeItem}>
              <img src="/icon.jpg" className={styles.qrCodeImage} />
            </div>
          </div>

          <div className={styles.section}>
            <Title level={4}>联系我们</Title>
            <div>商务合作：陈先生 189 0108 5156</div>
            <div>投资合作：陈先生 189 0108 5156</div>
            <div>企业邮箱：chenfeiyue@cplight.com</div>
          </div>

          <div className={styles.section}>
            <div className={styles.qrCodeItem}>
              <img src="/account.jpg" alt="官方公众号" className={styles.qrCodeImage} />
              <div>官方客服</div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.qrCodeItem}>
              <img src="/contact.png" alt="官方微信" className={styles.qrCodeImage} />
              <div>官方微信</div>
            </div>
          </div>
        </div>

        {/* 底部版权区 */}
        <div className={styles.bottom}>数字芯片阿龙 ©{new Date().getFullYear()} Created by al</div>
      </Footer>
    </Layout>
  )
}

export default MainLayout
