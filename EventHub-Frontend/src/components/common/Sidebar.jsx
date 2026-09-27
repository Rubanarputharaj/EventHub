import React, { useState } from "react";
import { NavLink ,Link} from "react-router-dom";
import {SearchOutlined,FileOutlined,HomeOutlined,ReadOutlined ,
  UsergroupDeleteOutlined,SafetyCertificateOutlined ,
  PlusOutlined
  } from '@ant-design/icons'
import "./common.css";

function Sidebar({ sidebarOpen,setSidebarOpen  }) {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log("Sidebar user:", user);
  // const [activeSidebar,setActiveSidebar]=useState("Dasboard");

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>

      <div className="logo">
        <span className="mini-logo">EH</span>
        <span className="logo-title">EventHub</span>
      </div>

      {user.role === "attendee" && (
        <nav className="sidebar-nav">

          <NavLink className={({isActive})=>isActive?"sidebar-link-active":"sidebar-link"}  end to="/attendee">
           <HomeOutlined className="sidebar-icon" />
            Dashboard
          </NavLink>

          <NavLink className={({isActive})=>isActive?"sidebar-link-active":"sidebar-link"}  to="/attendee/browserEvent">

          <SearchOutlined className="sidebar-icon"/>
            Browser Events
          </NavLink>

          <NavLink className={({isActive})=>isActive?"sidebar-link-active":"sidebar-link"}  to="/attendee/myTicket">
<ReadOutlined className="sidebar-icon"/>
            My Tickets
          </NavLink>

          <NavLink
            className={({isActive})=>isActive?"sidebar-link-active":"sidebar-link"}
            to="/attendee/registeredDocument"
          >
            <FileOutlined className="sidebar-icon" />
            Registered Document
          </NavLink>

        </nav>
      )}

      {user.role === "organizer" && (
        <nav className="sidebar-nav">

          <NavLink  className={({isActive})=>isActive?"sidebar-link-active":"sidebar-link"}  onClick={() => setSidebarOpen(false)} end to="/organizer">
           <HomeOutlined className="sidebar-icon" /> Dashboard
          </NavLink>

          <NavLink  className={({isActive})=>isActive?"sidebar-link-active":"sidebar-link"}  onClick={() => setSidebarOpen(false)} to="/organizer/createEvent">
            <PlusOutlined className="sidebar-icon" />Create / Edit Event
          </NavLink>

          <NavLink  className={({isActive})=>isActive?"sidebar-link-active":"sidebar-link"}  onClick={() => setSidebarOpen(false)} to="/organizer/attendeesCheck">
            <UsergroupDeleteOutlined  className="sidebar-icon"/>Attendees & Check-in
          </NavLink>

          <NavLink  className={({isActive})=>isActive?"sidebar-link-active":"sidebar-link"}  onClick={() => setSidebarOpen(false)} to="/organizer/browserEvent">
           <SearchOutlined className="sidebar-icon" /> Browser Events
          </NavLink>

        </nav>
      )}


      {user.role === "admin" && (
        <nav className="sidebar-nav">

          <NavLink  className={({isActive})=>isActive?"sidebar-link-active":"sidebar-link"}    onClick={() => setSidebarOpen(false)}
 end to="/admin">
           <SafetyCertificateOutlined className="sidebar-icon" />Admin Dashboard
          </NavLink>

          <NavLink  className={({isActive})=>isActive?"sidebar-link-active":"sidebar-link"}    onClick={() => setSidebarOpen(false)}
 to="/admin/browserEvent">
           <SearchOutlined className="sidebar-icon" />Browser Events
          </NavLink>

        </nav>
      )}

    </div>
  );
}

export default Sidebar;