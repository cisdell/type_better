//libs
import { useState } from "react";
import { useEffect } from "react";

//assets
// import cleared from '../assets/cleared.mp3'

export default function Word({
  word,
  word_data,
  removeWord,
  reduceLife,
  paused,
}) {
  // console.log(word);
  // console.log(word_data);
  const { s, a } = word_data;
  const [row, setRow] = useState(1);

  //function to tha generate a num 1,2,3
  const generateNum = () => Math.floor(Math.random() * 3) + 1;
  const [col, setCol] = useState(generateNum()); //generate a num
  const [alive, setAlive] = useState(a);
  const speed = s;

  const updateRow = () => {
    //case when the word is cleared
    if (paused) {
      return;
    } else if (word.length === 0) {
      setAlive(false);
    } else if (row === 17) {
      setAlive(false);
      removeWord(word);
      reduceLife();
      return;
      console.log("row updated");
    }
    setTimeout(() => setRow(row + 1), speed);
  };

  let wordCss = {
    "grid-column": `${col} / 3`,
    "grid-row": `${row}`,
  };

  useEffect(() => {
    updateRow();
  }, [row, paused]);

  return alive && <div style={wordCss}>{word}</div>;
}
