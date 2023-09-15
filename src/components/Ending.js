import gameover from "../assets/gameover.png";

export default function Ending({ setGameOver, setResultPage }) {
  const closeOut = () => {
    setGameOver(false);
    setResultPage(true);
  };
  return (
    <div className="gameover" id="modal">
      <img src={gameover} alt="gameover" width="500" height="500" />
      <button onClick={closeOut}>Show me the Result</button>
    </div>
  );
}
