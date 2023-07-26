import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { useLogin } from "../hooks/useLogin";

//styles and images
import "./Navbar.css";

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();
  const { login } = useLogin();
  const [guestEmail, guestPW] = ["guest@gmail.com", "guest1234"];

  const guestLogin = () => {
    login(guestEmail, guestPW);
  };

  return (
    <div className="navbar">
      <ul>
        <>
          {!user && (
            <>
              <li>
                <Link to="signup">Signup</Link>
              </li>
              <li>
                <Link to="login">Login</Link>
              </li>
              <li>
                <a onClick={guestLogin}>Guest Mode</a>
              </li>
            </>
          )}
          {user && (
            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          )}
        </>
      </ul>
    </div>
  );
}
