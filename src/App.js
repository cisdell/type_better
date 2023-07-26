//libs
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

//functions
import { useGuest } from "./hooks/useLogin";
//styles
import "./App.css";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        {user && <Sidebar />}
        <div className="container">
          <Navbar />
          {/* <Signup /> */}
          <Routes>
            <Route path="/signup" element={!user ? <Signup /> : null} />
            <Route path="/login" element={!user ? <Login /> : null} />
            {/* <Route path="/guestmode" element={useGuest} /> */}

            {!user && <Route path="/logout" element={<Login />} />}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
