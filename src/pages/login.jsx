import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy login check – replace with backend API call later
    if (username === "admin" && password === "password123") {
      navigate("/admin"); // redirect to admin page
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">LOGIN</h2>
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
