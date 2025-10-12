// src/pages/Logout.jsx
import React from "react";
import axiosInstance from "../utils/axiosInstance";

export const Logout = () => {
  const handleLogout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
    } catch (err) {
      console.error(
        "Logout API failed, but continuing with frontend cleanup:",
        err.message
      );
    }
    // Clear local storage and redirect to login page
    localStorage.removeItem("accessToken");
    // console.log("Logged out successfully");
    window.location.href = "/login";
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-neutral-400 text-black font-bold py-2 px-4 rounded hover:bg-neutral-500 transition"
    >
      Logout
    </button>
  );
};
