import {Link} from "react-dom";

export default function Landing({gameOn}) {

  return (
    <div>
      <h2>Instructions</h2>
      <p>
        Before the words hit the bottom of the screen, type the words and hit
        enter to clear them away. Every word you miss will take away a life
        block. When you run out of blocks the game is over.
      </p>
      <video controls autoplay>
        tbh
      </video>
    </div>
  );
}
