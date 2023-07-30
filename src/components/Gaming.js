//libs
import { useState } from "react";
import { useEffect } from "react";

//components
// import Timer from '../../components/Timer';
// import Lifeblocks from '../../components/Lifeblocks';
//imported these guys on the side bar
import Word from "./Word";
import TestForm from "./TestForm";
import Brick from "./Brick"

//styles
import "./Gaming.css";

//data
import data from "../data.json";
let wordbank = data.words

// let wordbank = [
//   "andrew",
//   "endure",
//   "troop",
//   "floor",
//   "throw",
//   'abc','def','afdf','sdfsdfsdf'
// ];


export default function Gaming({ gameOn }) {
  //states
  const [displayedWords, setDisplayedWords] = useState([]);
  const [wordsCount, setWordsCount] = useState(0);
  const [speed, setSpeed] = useState(1000)
  const [tryValue, setTryValue] = useState('')
  const [life, setLife] = useState([0,0,0,0,0])
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


  //text input submit .
  const submitTry = async (e) => {
    e.preventDefault();
    if (displayedWords.includes(tryValue)) {
      await removeWord(tryValue)
    }
    setTryValue('') // should clear the field after hitting return
    console.log(displayedWords)
    console.log(life)
  }

  //reduceLife
  const reduceLife = async() => {
    if (life.length === 0) {
      console.log('game over')
    }
    life.unshift()
    setLife(life)
  }

  // useEffect(()=> {
  //   wordPush()
  //   // setTimeout(wordPush(), 1000)
  // }, [])

  // useEffect(() => {
  //   // Call the wordPush function every 1 second
  //   const interval = setInterval(() => {
  //     wordPush();
  //   }, 4000);

  //   return () => {
  //     // Cleanup the interval on component unmount
  //     clearInterval(interval);
  //   };
  // }, [wordPush]); // Empty dependency array ensures the useEffect runs only once on component mount


  return (
    <>
    <div className="gaming-container">
      <div>
      {/* <button onClick={wordPush}>MakeWord</button> */}
        {/* <span>
        {displayedWords.map(wo =>(<span>{wo}</span>))}
        </span> */}
        <p>hello! Start playing your game!</p>

        <div className="words-display">
          {/* <Word word={word}/> */}
          {displayedWords.map((w) => (
            <Word word={w} word_data={word_data} removeWord={removeWord} reduceLife={reduceLife}/>
          ))}
        </div>
        <span className="ground">------------------------------------GROUND-----------------------------------------</span>
        <div className="attempt-box">
        <form onSubmit={submitTry}>
        <label className="attempt-box">
            <span>Type in the words before they hit the ground!</span>
            <input
              required
              type="text"
              size="40"
              value={tryValue}
              onChange={(e)=> setTryValue(e.target.value)}
            />
        </label>
        </form>
        </div>
    </div>
    <div className="bricks-layout">
      {life.map((l)=>(<Brick/>))}
    </div>
      </div>

    </>
  );
}
