//libs
import { useState } from "react";
import { useEffect } from "react";

export default function Word({word, word_data}) {

  console.log(word)
  console.log(word_data)
  const {r, c, s, a} = word_data
  const [row, setRow] = useState(r);
  const [col, setCol] = useState(c);
  // const [gridPos, setGridPos] = useState(1);
  const [alive, setAlive] = useState(a)
  const speed = s

  const updateRow = () => {
    if (row === 15) {
      setAlive(false);
      return
    }
    setTimeout(() => setRow(row + 1), speed);
  };

  let wordCss = {
    "grid-column": `${c} / 3`,
    "grid-row": `${row}`,
  };

  useEffect(() => {
    console.log("Current row count is:" + row);
    updateRow();
  }, [row]);

  return (alive && <div style={wordCss}>{word}</div>);
}
