import {React,useState} from 'react'
import Sidebar from '../components/common/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'

import '../components/common/common.css'
import ProtectedFooter from '../components/common/ProtectedFooter'
function AttendeeLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className='width-sidebar'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {sidebarOpen && (
            <div
              className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
              onClick={() => setSidebarOpen(false)}
            ></div>
      )}
      
       <div className="main-container">
        <Header sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen} />

        <main className='main-content'>
          <Outlet />
          <ProtectedFooter/>
        </main>
      </div>
    </div>
  )
}

export default AttendeeLayout
