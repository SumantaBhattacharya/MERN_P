import React, { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "boxicons";
import "../App.css";
// import link from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axiosInstance.post("/auth/login", {
        email: formData.email,//"sumanta2004@gmail.com"
        password: formData.password // "CJnm@#9501"
      });

    /*
    console.log("Full response object:", response);
    console.log("Response data:", response.data);
    console.log("Access token:", response.data.data.accessToken);
    console.log("User data:", response.data.data.user);
    console.log("All cookies:", document.cookie);// httpOnly: false
    console.log("Specific cookie:", document.cookie.split(';').find(c => c.includes('refreshToken'))); 
    */
    
    // Store the access token
    localStorage.setItem("accessToken", response.data.data.accessToken);
    // console.log("Login successful!");

      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
        transition: Bounce,
      });

      setFormData({ email: "", password: "" });

      // Redirect after a short delay
      setTimeout(() => {
        // window.location.href = "/";
      }, 2000);
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col sm:flex-row justify-center items-center px-6 bg-neutral-950 text-white">
      {/* Left: Form */}
      <div className="flex flex-col items-center sm:items-start gap-6 w-full max-w-md">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
            Log in to your account
          </h1>
          <p className="text-neutral-400 text-sm">
            Enter your email and password to continue
          </p>
        </div>

        <div className="bg-neutral-900 rounded-2xl p-6 w-full shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
            <label htmlFor="email" className="text-neutral-300 text-sm">
              Email
            </label>
            <input
              value={formData.email}
              onChange={handleChange}
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            <label htmlFor="password" className="text-neutral-300 text-sm">
              Password
            </label>
            <input
              value={formData.password}
              onChange={handleChange}
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="p-2 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="bg-white text-black font-semibold py-2 rounded-lg hover:bg-neutral-200 transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-xs text-neutral-500 mt-4 text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-yellow-400 hover:underline">
              Sign up
            </a>
          </p>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};
