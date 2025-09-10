import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../components/Layout/MainLayout'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import ProductDetail from '../pages/Products/Detail'
import ProductList from '../pages/Products/index'
import Register from '../pages/Register'
import Login from '../pages/Login'

// 页面组件（后续实现）
// const Home = () => <div>首页内容</div>
// const ProductList = () => <div>产品列表</div>
// const ProductDetail = () => <div>产品详情</div>
// const Cart = () => <div>购物车</div>

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </MainLayout>
  )
}

export default AppRoutes
