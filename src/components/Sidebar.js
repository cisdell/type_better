import {useState} from "react";

//components.
import Profile from "./Profile";
import Timer from "./Timer";
import Brick from "./Brick.js";

//styles
// import "./Sidebar.css";

export default function Sidebar() {
  const [life, setLife] = useState(5)

  return (
    <div className="sidebar">
      WELCOME!
      <Profile />
      <div className="sidebar-content">
        <div className="brick-stacks">
        </div>
      </div>
    </div>
  );
}
