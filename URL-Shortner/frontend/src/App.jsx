
import "./App.css";

import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx"

import Home from "./pages/Home.jsx"
import Features from "./pages/Features.jsx"

import {Login} from "./pages/Login.jsx"
import {Logout} from "./pages/LogoutButton.jsx"

import RegisterForm from "./pages/RegirterForm.jsx";
import AuthLayout from "./pages/AuthLayout.jsx";

function App() {

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <Home/>

      {/* Features Section */}
      <Features/>

      {/* Footer */}
      <Footer/>

      {/* <Login /> */}

      {/* <Logout /> */}

      {/* <RegisterForm/> */}

      <AuthLayout/>

    </div>
  );
}

export default App;

