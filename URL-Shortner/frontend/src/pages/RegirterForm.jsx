import React, { useState } from "react";
import { registerUser } from "../api/user.api.js"; 
import { ToastContainer, toast, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
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

    // Enhanced validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      setLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long!");
      setLoading(false);
      return;
    }

    if (!/[!@#$%^&*()<>,./"']/.test(formData.password)) {
      setError(
        "Password must contain at least one special character: !@#$%^&*()<>,./'\""
      );
      setLoading(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Invalid email address");
      setLoading(false);
      return;
    }

    if (!/[A-Z]/.test(formData.password)) {
      setError("Password must contain at least one capital letter");
      setLoading(false);
      return;
    }

    try {
      const response = await registerUser(
        formData.username,
        formData.email,
        formData.password
      );

      // Store the access token
      localStorage.setItem("accessToken", response.data.accessToken); // ✅ Fixed: response.data.accessToken (not response.data.data.accessToken)
      
      toast.success("Registration successful!", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
        transition: Bounce,
      });

      setFormData({ 
        username: "", 
        email: "", 
        password: "", 
        confirmPassword: "" 
      });

      // Redirect after a short delay
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (err) {
      setError(err.message || "Registration failed");
      toast.error(err.message || "Registration failed", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
        transition: Bounce,
      });
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
            Create your account
          </h1>
          <p className="text-neutral-400 text-sm">
            Enter your details to get started
          </p>
        </div>

        <div className="bg-neutral-900 rounded-2xl p-6 w-full shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
            <label htmlFor="username" className="text-neutral-300 text-sm">
              Username
            </label>
            <input
              value={formData.username}
              onChange={handleChange}
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              className="p-2 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

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

            <label htmlFor="confirmPassword" className="text-neutral-300 text-sm">
              Confirm Password
            </label>
            <input
              value={formData.confirmPassword}
              onChange={handleChange}
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="p-2 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="bg-white text-black font-semibold py-2 rounded-lg hover:bg-neutral-200 transition disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {loading ? "Creating account..." : "Sign up"}
              <box-icon name="user-plus" type="solid"></box-icon>
            </button>
          </form>

          <div className="mt-4 p-3 bg-neutral-800 rounded-lg">
            <p className="text-neutral-400 text-xs mb-2">Password requirements:</p>
            <ul className="text-neutral-500 text-xs space-y-1">
              <li className="flex items-center gap-2">
                <box-icon name={formData.password.length >= 8 ? 'check-circle' : 'circle'} type={formData.password.length >= 8 ? 'solid' : 'regular'} color={formData.password.length >= 8 ? '#10b981' : '#6b7280'} size="12px"></box-icon>
                At least 8 characters
              </li>
              <li className="flex items-center gap-2">
                <box-icon name={/[A-Z]/.test(formData.password) ? 'check-circle' : 'circle'} type={/[A-Z]/.test(formData.password) ? 'solid' : 'regular'} color={/[A-Z]/.test(formData.password) ? '#10b981' : '#6b7280'} size="12px"></box-icon>
                One capital letter
              </li>
              <li className="flex items-center gap-2">
                <box-icon name={/[!@#$%^&*()<>,./"']/.test(formData.password) ? 'check-circle' : 'circle'} type={/[!@#$%^&*()<>,./"']/.test(formData.password) ? 'solid' : 'regular'} color={/[!@#$%^&*()<>,./"']/.test(formData.password) ? '#10b981' : '#6b7280'} size="12px"></box-icon>
                One special character
              </li>
            </ul>
          </div>

          <p className="text-xs text-neutral-500 mt-4 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-yellow-400 hover:underline">
              Login
            </a>
          </p>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default RegisterForm;