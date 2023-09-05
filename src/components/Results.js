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
  // console.log(leaderboardData)
  // leaderboardData = [
  //   {
  //     clear_count: 50000,
  //     email: "cisdell@gmail.comcom",
  //     login_time: "Fri, 01 Sep 2023 21:45:16 GMT",
  //   },
  //   {
  //     clear_count: 25,
  //     email: "cisdell@gmail.com",
  //     login_time: "Thu, 17 Aug 2023 21:19:07 GMT",
  //   },
  //   {
  //     clear_count: 25,
  //     email: "cisdell@gmail.com",
  //     login_time: "Thu, 17 Aug 2023 21:19:07 GMT",
  //   },
  //   {
  //     clear_count: 10,
  //     email: "cisdell@gmail.com",
  //     login_time: "Wed, 16 Aug 2023 21:19:07 GMT",
  //   },
  //   {
  //     clear_count: 10,
  //     email: "cisdell@gmail.com",
  //     login_time: "Wed, 16 Aug 2023 21:19:07 GMT",
  //   },
  // ];

  return (
    <div className="results">
      <div className="my-result"></div>
      <ol className="result-list">
        {leaderboardData.map((item) => (
          <li>
            <div>User:    {item['email']}</div>
            <div>Clear Count:    {item['clear_count']}</div>
            <div>Date/Time:    {item['login_time']}</div>
          </li>
        ))}
      </ol>
      <button onClick={handleClose}>I'm Done!</button>
    </div>
  );
}
