
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSignup = (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  if (!formData.role) {
    alert("Please select a role");
    return;
  }

  // Store user data
  localStorage.setItem(
    "user",
    JSON.stringify({
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    })
  );

  console.log("Signup Data:", formData);

  navigate("/login");
};

  return (
    <div className="signup-page">
      <div className="signup-card">

        <div className="signup-header">
          <h2 className="signup-logo">
            <span>EH</span>EventHub
          </h2>

          <h1>Create your account</h1>

          <p>
            Join EventHub to start booking or hosting events
          </p>
        </div>

        <form onSubmit={handleSignup}>

          {/* Full Name */}
          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

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
             <div className="password-group">
          {/* Password */}
          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label>Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
           </div>
          {/* Role */}
          <div className="form-group">
            <label>I want to</label>

            <div className="role-options">

              <label
                className={
                  formData.role === "attendee"
                    ? "role-option active"
                    : "role-option"
                }
              >
                <input
                  type="radio"
                  name="role"
                  value="attendee"
                  checked={formData.role === "attendee"}
                  onChange={handleChange}
                />

                <span className="radio-btn">Attend Events</span>
              </label>

              <label
                className={
                  formData.role === "organizer"
                    ? "role-option active"
                    : "role-option"
                }
              >
                <input
                  type="radio"
                  name="role"
                  value="organizer"
                  checked={formData.role === "organizer"}
                  onChange={handleChange}
                />

                <span className="radio-btn">Organize Events</span>
              </label>

            </div>
          </div>

          {/* Terms */}
          <label className="terms">
            <input type="checkbox" required />

            <span>
              I agree to the{" "}
              <a href="#">Terms of Service</a>
              {" & "}
              <a href="#">Privacy Policy</a>
            </span>
          </label>

          {/* Signup Button */}
          <button type="submit" className="signup-btn">
            Sign Up
          </button>

        </form>

        <div className="login-text">
          Already have an account?

          <button
            type="button"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
        </div>

      </div>
    </div>
  );
}

export default Signup;

