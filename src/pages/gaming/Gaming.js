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
  const wordPush = async() => {
    console.log("wordPush");
    let new_word = wordbank.shift();
    await setWordsCount(wordsCount+1)
    await setDisplayedWords([...displayedWords, new_word]);
    console.log(displayedWords)
  };
  // console.log(submissionAttempt)

  //function to remove words from the word bank
  const removeWord = async (wordToRemove) => {
    if (!displayedWords.includes(wordToRemove)) {
      return
    }
    let i = displayedWords.indexOf(wordToRemove)
    await displayedWords.splice(i,1)
    await setDisplayedWords(displayedWords)
  }

  const submitTry = async (e) => {
    e.preventDefault();
    if (displayedWords.includes(tryValue)) {
      await removeWord(tryValue)
    }
    setTryValue('')
    console.log(displayedWords)
  }

  return (
    <div className="gaming-container">
      <button onClick={wordPush}>MakeWord</button>
        {/* <span>
        {displayedWords.map(wo =>(<span>{wo}</span>))}
        </span> */}
        <p>hello! Start playing your game!</p>

        <div className="words-display">
          {/* <Word word={word}/> */}
          {displayedWords.map((w) => (
            <Word word={w} word_data={word_data} removeWord={removeWord} />
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
              value={tryValue}
              onChange={(e)=> setTryValue(e.target.value)}
            />
        </label>
        </form>
        </div>
    </div>
  );
}
