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
  'abc','def','afdf','sdfsdfsdf'
];

export default function Gaming({ gameOn }) {
  //states
  const [displayedWords, setDisplayedWords] = useState([]);
  const [wordsCount, setWordsCount] = useState(0);
  const [speed, setSpeed] = useState(1000)
  const [tryValue, setTryValue] = useState('')
  // const []

  // data for the Word component
  let word_data = {s: speed, a: true };

  //function to push the words and update the number of words pushed
  const wordPush = () => {
    console.log("wordPush");
    let new_word = wordbank.shift();
    setWordsCount(wordsCount+1)
    setDisplayedWords([...displayedWords, new_word]);
    console.log(displayedWords)
  };
  // console.log(submissionAttempt)

  const submitTry = (e) => {
    e.preventDefault();
    setTryValue('')
    const wordInBank = () => {
      if (displayedWords.indexOf(tryValue) !== -1) {
        return true
      }
      return false
    }

    if (wordInBank()) {
      console.log('IN THE BANK')
    }
    else console.log('NOT IN THE BANK')


  }


  // useEffect(() => {
  //   randomCol();
  // }, [word_data]);
  return (
    <div className="gaming-container">
      <button onClick={wordPush}>MakeWord</button>
        <p>hello! Start playing your game!</p>

        <div className="words-display">
          {/* <Word word={word}/> */}
          {displayedWords.map((w) => (
            <Word word={w} word_data={word_data} />
          ))}
        </div>
        <span className="ground">------GROUND------</span>
        <div className="attempt-box">
        <form onSubmit={submitTry}>
        <label>
            <span>Type in the words before they hit the ground!</span>
            <input
              required
              type="text"
              onChange={(e)=> setTryValue(e.target.value)}
            />
        </label>
        </form>
        </div>
    </div>
  );
}
