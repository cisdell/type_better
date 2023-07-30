//libs
import { useState } from "react";
import { useEffect } from "react";

export default function Word({ word, word_data, removeWord, reduceLife }) {
  // console.log(word);
  // console.log(word_data);
  const { s, a } = word_data;
  const [row, setRow] = useState(1);

  //function to tha generate a num 1,2,3
  const generateNum = () => Math.floor(Math.random() * 3) + 1;
  const [col, setCol] = useState(generateNum()); //generate a
  const [alive, setAlive] = useState(a);
  const speed = s;

  const updateRow = async() => {
    if (row === 15) {
      await setAlive(false);
      await removeWord(word)
      await reduceLife()
      return;
    }
    setTimeout(() => setRow(row + 1), speed);
  };

  let wordCss = {
    "grid-column": `${col} / 3`,
    "grid-row": `${row}`,
  };

  useEffect(() => {
    updateRow();
  }, [row]);

  return alive && <div style={wordCss}>{word}</div>;
}
