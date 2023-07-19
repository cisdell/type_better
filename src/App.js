//libs
import React from "react";

//components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Signup />
        <Login />
      </div>
    </div>
  );
}

export default App;
