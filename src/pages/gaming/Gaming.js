//libs
import { useState } from "react";
import { useEffect } from "react";
//components
// import Timer from '../../components/Timer';
// import Lifeblocks from '../../components/Lifeblocks';
//imported these guys on the side bar
import data from "../../data.json";

import Word from "../../components/Word";
import TestForm from "../../components/TestForm";

//styles
import "./Gaming.css";

export default function Gaming({ gameOn }) {
  // console.log(data)
  // var words = data.words;

  return (
    <>
      <p>hello! Start playing your game!</p>
      <div className="game-container">
        <Word/>
      </div>
    </>
  );
}
