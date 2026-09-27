import React, { useState } from "react"
import './common.css'
import { useNavigate } from "react-router-dom"
import { Popover,Button } from "antd";
import {LogoutOutlined ,SettingOutlined,
   MenuOutlined,UserOutlined,BellOutlined } from '@ant-design/icons'
function Header({ sidebarOpen, setSidebarOpen }) {
const navigate=useNavigate();
const handleLogout=()=>{
    console.log("Logout clicked");
  navigate('/')
}
const handleProfile=()=>{
  navigate('/attendee/profile')
}
  return (
    <header className="header-container">
     <div className="header-left">
       <MenuOutlined
  className="sidebar-toggle"
  onClick={() => setSidebarOpen(!sidebarOpen)}
/>
      <h2>Home</h2>
     </div>

      <div className="header-right">
          
  
<BellOutlined />
<Popover
  content={
    <div className="profile-box">
      <p onClick={handleProfile}><span style={{ fontSize: "20px" }}><UserOutlined className="profile-icon" /></span>My Profile</p>
      <p> <span><SettingOutlined className="profile-icon"/></span>Settings</p>
      <p onClick={handleLogout} id="logout"><span><LogoutOutlined  className="profile-icon"/></span>Logout</p>
    </div>
  }
  trigger="click"
  placement="bottomRight"
  arrow={false}
  
>
  <Button>Profile</Button>
</Popover>

  {/* {profile && (
    <div className="profile-box">
      <p onClick={() => navigate("/profile")}>Profile</p>
      <p onClick={handleLogout}>Logout</p>
    </div>
  )} */}
</div>
    
    </header>
  )
}

export default Header