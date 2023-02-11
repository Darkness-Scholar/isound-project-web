import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import User from './pages/User/User'
import Home from './pages/Home/Home'
import publicRoutes from './router';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
    {publicRoutes.map((route, index) => {
      const Page = route.component
      const Layout = DefaultLayout
      return (
        <Route
        key={index}
        path={route.path}
        element={
          <Layout>
            <Page/>
          </Layout>
        }/>
      )
    })}
    </Routes>
  </BrowserRouter>
)
