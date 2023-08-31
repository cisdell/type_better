import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { useLogin } from "../hooks/useLogin";

//styles and images
// import "./Navbar.css";

export default function Navbar({setGameOn, setSoundOn, soundOn}) {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();
  const { login } = useLogin();
  const [guestEmail, guestPW] = ["guest@gmail.com", "guest1234"];

  console.log(soundOn)
  const guestLogin = () => {
    login(guestEmail, guestPW);
  };
  const handleClick = () => {
    setGameOn(false)
    logout()
  }

  return (
    <nav className="navbar">
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
              <li className="guestmode">
                <a onClick={guestLogin}>Guest Mode</a>
              </li>
            </>
          )}
          {user && (
            <li>
              <button className="btn" onClick={()=> setSoundOn(!soundOn)}>
                SoundOn/Off
              </button>
              <button className="btn" onClick={handleClick}>
                Logout
              </button>
            </li>
          )}
        </>
      </ul>
    </nav>
  );
}
