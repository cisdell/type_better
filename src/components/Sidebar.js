import {useState} from "react";

//components.
import Profile from "./Profile";
import Timer from "./Timer";
import Brick from "./Brick.js";

//styles
import "./Sidebar.css";

export default function Sidebar() {
  const [life, setLife] = useState(5)

  return (
    <div className="Sidebar">
      WELCOME!
      <Profile />
      <div className="Sidebar-content">
        <div className="Brick-stacks">
        </div>
      </div>
    </div>
  );
}
