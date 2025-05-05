import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import './styles/global.css'
import 'antd/dist/reset.css'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
