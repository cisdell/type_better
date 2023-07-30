//libs
import { useState } from "react";
import { useEffect } from "react";

//components
// import Timer from '../../components/Timer';
import Word from "./Word";
import Brick from "./Brick";

//styles
import "./Gaming.css";

//data
import data from "../data.json";

let wordbank = data.words.map((word) => word.toLowerCase());
//
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
//shuffle words
shuffleArray(data)


export default function Gaming({ setGameOn }) {
  //states
  const [displayedWords, setDisplayedWords] = useState([]);
  const [wordsCount, setWordsCount] = useState(0);
  const [speed, setSpeed] = useState(1000);
  const [tryValue, setTryValue] = useState("");
  const [life, setLife] = useState([0, 0, 0, 0, 0]);

  // data for the Word component speed, alive
  let word_data = { s: speed, a: true };

  //function to push the words and update the number of words pushed
  const wordPush = () => {
    console.log("wordPush");
    let new_word = wordbank[wordsCount];
    setWordsCount(wordsCount + 1);
    console.log("current_word_count: "+ wordsCount)
    const new_list = [...displayedWords, new_word];
    setDisplayedWords(new_list);
    console.log(displayedWords);
  };

  //function to remove words from the word bank
  const removeWord = (wordToRemove) => {
    if (!displayedWords.includes(wordToRemove)) {
      return;
    }
    let i = displayedWords.indexOf(wordToRemove);
    // const updatedWords = displayedWords.filter((word)=> word!== wordToRemove)
    // displayedWords.splice(i, 1);
    //ran into issue because shifting the length of the array cause rendering issue on the html
    displayedWords[i] = "";
    setDisplayedWords(displayedWords);
  };

  //text input submit
  const submitTry = (e) => {
    e.preventDefault();
    if (displayedWords.includes(tryValue)) {
      removeWord(tryValue);
    }
    setTryValue(""); // should clear the field after hitting return
  };

  //reduceLife
  const reduceLife = () => {
    // console.log(life);
    if (life.length === 1) {
      console.log("game over");
      setGameOn(false);
    } else {
      life.pop();
      setLife(life);
    }
  };
  useEffect(() => {
    if (speed < 100) {
      return
    }
    else if (wordsCount % 20 === 0) {
      // const newSpeed = speed-200
      setSpeed(speed-200)
    }
  }, [wordsCount])

  useEffect(() => {
    // Call the wordPush function every 3 second
    const interval = setInterval(() => {
      wordPush();
    }, 1000);

    return () => {
      // Cleanup the interval on component unmount
      clearInterval(interval);
    };
  }, [wordPush]); // Empty dependency array ensures the useEffect runs only once on component mount

  return (
    <>
      <div className="gaming-container">
        <div>
          <p>hello! Start playing your game!</p>
          <div className="words-display">
            {displayedWords.map((w) => (
              <Word
                word={w}
                word_data={word_data}
                removeWord={removeWord}
                reduceLife={reduceLife}
              />
            ))}
          </div>
          <span className="ground">
            ------------------------------------GROUND-----------------------------------------
          </span>
          <div className="attempt-box">
            <form onSubmit={submitTry}>
              <label className="attempt-box">
                <span>Type in the words before they hit the ground!</span>
                <input
                  required
                  type="text"
                  size="40"
                  value={tryValue}
                  onChange={(e) => setTryValue(e.target.value)}
                />
              </label>
            </form>
          </div>
        </div>
        <div className="bricks-layout">
          {life.map((l) => (
            <Brick />
          ))}
        </div>
      </div>
    </>
  );
}
