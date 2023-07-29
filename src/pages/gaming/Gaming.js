//libs
import { useState } from "react";
import { useEffect } from "react";

//components
// import Timer from '../../components/Timer';
// import Lifeblocks from '../../components/Lifeblocks';
//imported these guys on the side bar
import Word from "../../components/Word";
import TestForm from "../../components/TestForm";

//data
//import data from "../../data.json";
//styles
import "./Gaming.css";

let wordbank = [
  "andrew",
  "endure",
  "troop",
  "floor",
  "throw",
];

export default function Gaming({ gameOn }) {
  const [words, setWords] = useState([]);
  const [wordsCount, setWordsCount] = useState(0);

  // console.log(data)
  // var words = data.words;
  // let word = 'Andrew'
  // let word2 = 'YongTang'
  const wordPush = () => {
    console.log("wordPush");
    let new_word = wordbank.shift();
    setWords([...words, new_word]);
  };
  let randomCol = () => {
    return Math.floor(Math.random() * 3);
  };
  let word_data = { r: 1, c: ()=>randomCol(), s: 1000, a: true };
  useEffect(() => {
    randomCol();
  }, [word_data]);
  return (
    <>
      <p>hello! Start playing your game!</p>
      <div className="game-container">
        <button onClick={wordPush}>MakeWord</button>
        {/* <Word word={word}/> */}
        {words.map((w) => (
          <Word word={w} word_data={word_data} />
        ))}
      </div>
    </>
  );
}
