import { Link } from "react-dom";
import movie from "../../assets/samplevid.webm";
//style
// import "./Landing.css";
// import

export default function Landing({ setGameOn }) {
  return (
    <div className="instructions" id="mid-body">
      <h2>Instructions</h2>

      <p>
        Before the words hit the bottom of the screen, type the words and hit
        enter to clear them away. Every word you miss will take away a life
        block. When you run out of blocks the game is over.
      </p>
      <video muted width="1000" height="800" controls="controls" autoplay loop>
        <source src={movie} type="video/webm" />
      </video>

      <button onClick={() => setGameOn(true)}>
        I AM READY TO BE A TYPING GOD
      </button>
    </div>
  );
}
