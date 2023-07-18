//libs
import React from "react";

//components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
