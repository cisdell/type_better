//libs
import { useState } from "react";
import { useEffect } from "react";

export default function Word() {
  const word = "Andrew";
  const [counter, setCounter] = useState(5);
  const [left, setLeft] = useState(1);
  const [right, setRight] = useState(1);
  const [gridPos, setGridPos] = useState(1);

  const updateCounter = () => {
    if (counter === 15) {
      return;
    }
    setTimeout(() => setCounter(counter + 1), 500);
  };

  let wordCss = {
    "grid-column": "2 / 3",
    "grid-row": `${counter}`,
  };

  useEffect(() => {
    console.log("Current Counter is:" + counter);
    updateCounter();
  }, [counter]);

  return <div style={wordCss}>{word}</div>;
}
