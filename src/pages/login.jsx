import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy login check – replace with backend API call later
    if (username === "admin" && password === "password123") {
      navigate("/admin");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-green-100">
      <form
        className="bg-green-200 p-10 rounded-2xl shadow-2xl w-full max-w-md flex flex-col gap-6 border border-gray-400"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-2xl font-bold text-green-950 mb-4">
          LOGIN
        </h2>
        <input
          type="text"
          placeholder="Username"
          className="px-4 py-3 rounded-xl border border-gray-300 text-base focus:outline-none focus:ring-4 focus:ring-green-300 transition"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-3 rounded-xl border border-gray-300 text-base focus:outline-none focus:ring-4 focus:ring-green-300 transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white font-bold py-3 text-base rounded-xl hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
