import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "boxicons";

function App() {
  const [isFormData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isError, setError] = useState("");
  const [isUsers, setUsers] = useState([]);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // --- validations ---
    if (isFormData.password.length < 8) {
      setError("Password must be at least 8 characters long!");
      return;
    }
    if (isFormData.password !== isFormData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // --- clear errors ---
    setError("");

    try {
      // Call your backend API
      const res = await fetch("http://localhost:4001/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: isFormData.username,
          email: isFormData.email,
          password: isFormData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to register");
      }

      // Update local state
      setUsers((prev) => [
        ...prev,
        { username: isFormData.username, email: isFormData.email },
      ]);

      // Reset form
      setFormData({ username: "", email: "", password: "", confirmPassword: "" });

      toast.success("User registered successfully!", {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center px-4">
      <div className="flex flex-col items-center sm:items-start gap-4 w-full max-w-md">
        <div className="w-full">
          <h1 className="text-yellow-400 text-3xl font-bold text-center sm:text-left">
            Create an Account
          </h1>
          <h3 className="text-blue-500 mt-2 text-center sm:text-left">
            Sign up to continue
          </h3>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="username" className="text-white mb-1 underline">
              Username
            </label>
            <input
              id="username"
              name="username"
              value={isFormData.username}
              onChange={handleChanges}
              type="text"
              placeholder="Enter your username"
              className="p-2 rounded-md w-full"
              required
            />

            <label htmlFor="email" className="text-white mb-1 underline">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={isFormData.email}
              onChange={handleChanges}
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md w-full"
              required
            />

            <label htmlFor="password" className="text-white mb-1 underline">
              Password
            </label>
            <input
              id="password"
              name="password"
              value={isFormData.password}
              onChange={handleChanges}
              type="password"
              placeholder="Enter your password"
              className="p-2 rounded-md w-full"
              required
            />

            <label
              htmlFor="confirmPassword"
              className="text-white mb-1 underline"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              value={isFormData.confirmPassword}
              onChange={handleChanges}
              type="password"
              placeholder="Confirm your password"
              className="p-2 rounded-md w-full"
              required
            />

            {isError && (
              <p className="text-red-500 text-sm">{isError}</p>
            )}

            <button className="bg-yellow-400 text-black flex justify-center items-center py-2 rounded-md gap-1 font-bold w-full">
              Sign up
              <box-icon type="solid" name="hand-right"></box-icon>
            </button>
          </form>
        </div>

        <ToastContainer />
      </div>

      {/* Registered users list */}
      <div className="hidden ml-6 sm:flex flex-col gap-4 p-4 bg-gray-900 rounded-lg shadow-lg w-72">
        <h2 className="text-yellow-400 text-lg font-bold text-center">
          Registered Users
        </h2>
        {isUsers.length === 0 ? (
          <p className="text-gray-500 text-center">No users yet</p>
        ) : (
          isUsers.map((elem, i) => (
            <p key={i} className="text-white text-sm">
              {elem.username} ({elem.email})
            </p>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
