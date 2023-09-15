//style
// import "./Brick.css";
//assets
import legobrick from "../assets/legobrick.png";

export default function Brick() {
  return (
    <div className="brick">
      <img src={legobrick} alt="legobrick" width="150" height="100" />
    </div>
  );
}
