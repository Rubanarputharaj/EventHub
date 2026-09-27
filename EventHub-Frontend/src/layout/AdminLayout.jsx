import React from 'react'
import Sidebar from '../components/common/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'

import '../components/common/common.css'

function AdminLayout() {

        
  return (
    <div className='width-sidebar'>
      <Sidebar/>
       <div className="main-container">
        <Header />

        <main className='main-content'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
