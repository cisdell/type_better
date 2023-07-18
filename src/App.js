//libs
import React from "react";

//components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Signup from "./pages/signup/Signup";

//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Signup />
      </div>
    </div>
  );
}

export default App;
