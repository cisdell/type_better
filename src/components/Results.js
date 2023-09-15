import React from "react";

export default function Results({
  setGameOn,
  setGameOver,
  setResultPage,
  leaderboardData,
}) {
  const handleClose = () => {
    setGameOn(false);
    setGameOver(false);
    setResultPage(false);
  };
  //only extract email Id's
  for (let i = 0; i < leaderboardData.length; i++) {
    var email = leaderboardData[i]["email"];
    var id = email.substring(0, email.indexOf("@"));
    leaderboardData[i] = { id, ...leaderboardData[i] };
  }
  console.log(leaderboardData);

  return (
    <div className="results" id="modal">
      <div className="my-result">My Performance:</div>
      <ol className="result-list">
        {leaderboardData.map((item) => (
          <li>
            <div>User: {item["id"]}</div>
            <div>Clear Count: {item["clear_count"]}</div>
            <div>Date/Time: {item["login_time"]}</div>
          </li>
        ))}
      </ol>
      <button onClick={handleClose}>I'm Done!</button>
    </div>
  );
}
