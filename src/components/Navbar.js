import React from "react";
import { Link } from "react-router-dom";
import {useAuthContext} from '../hooks/useAuthContext'
//styles and images
import "./Navbar.css";

export default function Navbar() {
  const {user} = useAuthContext();
  return (
    <div className="navbar">
      <ul>
        <>
        {!user && (
          <>
            <li><Link to='signup'>Signup</Link></li>
            <li><Link to='login'>Login</Link></li>
            <li><Link to="signup">Guest Mode</Link></li>
          </>
        )}
        </>
      </ul>
    </div>
  );
}
