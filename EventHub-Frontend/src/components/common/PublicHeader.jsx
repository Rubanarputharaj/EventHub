import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import "./common.css";
import { useNavigate } from "react-router-dom"
function PublicHeader() {

    const navigate=useNavigate();

 const handleSignUp=()=>{
  navigate('/signup')
}
 const handleLogin=()=>{
  navigate('/login')
}

    return (
        <header className="public-header">

            {/* Logo + Navbar */}
            <div className="main-logo-container">

                {/* Logo */}
                <div className="logo-container">
                    <h3 id="logo">EH</h3>
                    <h2 className="logo-title-1"  style={{ color: "var(--text)" }} >EventHub</h2>
                </div>

                {/* Navbar */}
                <nav className="public-navbar">
               
                        <NavLink to='/'  className={({isActive})=>isActive? "navActive" : ""} end >Home</NavLink>
                        <NavLink to='/events'  className={({isActive})=> isActive ? "navActive" : ""} >Browser Events</NavLink>     
                </nav>

            </div>

            {/* Buttons */}
            <div className="public-actions">
                <button className="public-login-btn" onClick={handleLogin}>Log In</button>
                <button className="public-signup-btn" onClick={handleSignUp}>Sign Up</button>
            </div>

        </header>
    );
}

export default PublicHeader;