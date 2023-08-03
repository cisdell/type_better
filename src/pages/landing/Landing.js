import { Link } from "react-dom";
// import movie from "../../assets/piano.mov";
//style
// import "./Landing.css";
// import

export default function Landing({ setGameOn }) {
  return (
    <div className="landing">
      <h2>Instructions</h2>

      <p>
        Before the words hit the bottom of the screen, type the words and hit
        enter to clear them away. Every word you miss will take away a life
        block. When you run out of blocks the game is over.
      </p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Jk79QJCxPkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <button onClick={() =>setGameOn(true)}>I AM READY TO BE A TYPING GOD</button>
    </div>

  );
}
