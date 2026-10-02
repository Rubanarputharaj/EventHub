
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();
// localStorage.setItem(
//   "admin",
//   JSON.stringify({
//     email: "admin@gmail.com",
//     password: "admin123",
//     role: "admin"
//   })
// );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 

 const handleLogin = (e) => {
  e.preventDefault();
  localStorage.setItem('isLogin', 'true');
  // Admin
  const storedAdmin = JSON.parse(
    localStorage.getItem("admin")
  );

  if (
  storedAdmin &&
  storedAdmin.email === formData.email &&
  storedAdmin.password === formData.password
) {
  localStorage.setItem(
    "user",
    JSON.stringify({
      email: storedAdmin.email,
      role: "admin",
    })
  );

  localStorage.setItem("role", "admin");

  navigate("/admin");
  return;
}

  // Attendee / Organizer
  const storedUser = JSON.parse(
    localStorage.getItem("user")
  );

  if (!storedUser) {
    alert("Account not found. Please sign up first.");
    return;
  }

  if (
    storedUser.email !== formData.email ||
    storedUser.password !== formData.password
  ) {
    alert("Invalid email or password");
    return;
  }

  localStorage.setItem("role", storedUser.role);

  if (storedUser.role === "attendee") {
    navigate("/attendee");
  } else if (storedUser.role === "organizer") {
    navigate("/organizer");
  }
};

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-header">
          <h2 className="signup-logo">
            <span>EH</span>EventHub
          </h2>

          <h1>Welcome back</h1>

          <p>
            Login to continue to EventHub
          </p>
        </div>

        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Login Button */}
          <button type="submit" className="signup-btn">
            Login
          </button>

        </form>

        <div className="login-text">
          Don't have an account?

          <button
            type="button"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
        </div>

      </div>
    </div>
  );
}

export default Login;
