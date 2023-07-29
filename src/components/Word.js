//libs
import { useState } from "react";
import { useEffect } from "react";

export default function Word({ word, word_data }) {
  // console.log(word);
  // console.log(word_data);
  const { s, a } = word_data;
  const [row, setRow] = useState(1);

  //function to tha generate a num 1,2,3
  const generateNum = () => Math.floor(Math.random() * 3)+1;

  const [col, setCol] = useState(generateNum()) //generate a
  // const [gridPos, setGridPos] = useState(1);
  const [alive, setAlive] = useState(a);
  const speed = s;

  const updateRow = () => {
    if (row === 15) {
      setAlive(false);
      return;
    }
    setTimeout(() => setRow(row + 1), speed);
  };

  let wordCss = {
    "grid-column": `${col} / 3`,
    "grid-row": `${row}`,
  };

  useEffect(() => {
    // console.log("Current row count is:" + row);
    // console.log("Current col count is:" + col);
    updateRow();
  }, [row]);

  return alive && <div style={wordCss}>{word}</div>;
}
