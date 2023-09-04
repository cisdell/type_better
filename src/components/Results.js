import React from "react";

export default function Results({
  setGameOn,
  setGameOver,
  setResultPage,
  leaderBoard,
}) {
  const handleClose = () => {
    setGameOn(false);
    setGameOver(false);
    setResultPage(false);
  };
  return (
    <div className="results">
      <div>Results</div>
      <button onClick={handleClose}>I'm Done!</button>
    </div>
  );
}
