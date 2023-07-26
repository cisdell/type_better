import React from "react";
import { Link } from "react-router-dom";
import {useAuthContext} from '../hooks/useAuthContext'
import {useLogout} from '../hooks/useLogout'
import { useLogin } from "../hooks/useLogin";

//styles and images
import "./Navbar.css";

export default function Navbar() {
  const {logout, isPending} = useLogout();
  const {user} = useAuthContext();
  const {login} = useLogin("GUESTMODE");

  return (
    <div className="navbar">
      <ul>
        <>
        {!user && (
          <>
            <li><Link to='signup'>Signup</Link></li>
            <li><Link to='login'>Login</Link></li>
            <li><a onClick={login}>Guest Mode</a></li>
          </>
        )}
        {user &&
          (
            <li>
              {!isPending && (
                <button className='btn' onClick={logout}>Logout</button>
              )}

            </li>
          )
}
        </>
      </ul>
    </div>
  );
}
