//libs
import { useState, useEffect, useCallback } from "react";

//components
// import Timer from '../../components/Timer';
import Word from "./Word";
import Brick from "./Brick";
import Ending from "./Ending";

//assets
import clearedSound from '../assets/SoundEffects/cleared.mp3'
import gameOverSound from '../assets/SoundEffects/gameOverSound.mp3'
import music1 from '../assets/GameMusic/music1.mp3'
import music2 from '../assets/GameMusic/music2.mp3'
import music3 from '../assets/GameMusic/music3.mp3'
import music4 from '../assets/GameMusic/music4.mp3'
import music5 from '../assets/GameMusic/music5.mp3'
import music6 from '../assets/GameMusic/music6.mp3'


//data
import data from "../data.json";

let wordbank = data.words.map((word) => word.toLowerCase());
//
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }
// //shuffle words
// shuffleArray(wordbank)

//picks a random game sound
let gameSound = [music1,music2,music3,music4,music5,music6][Math.floor(Math.random()*6)];
const GameMusic = new Audio(gameSound);
export default function Gaming({ setGameOn }) {
  //states
  const [displayedWords, setDisplayedWords] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(0)
  const [wordsCount, setWordsCount] = useState(0);
  const [speed, setSpeed] = useState(2000);
  const [tryValue, setTryValue] = useState("");
  const [life, setLife] = useState([0, 0, 0, 0, 0]);
  const [clearedCount, setClearedCount] = useState(0);
  const [paused, setPaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false)
  // data for the Word component speed, alive
  let word_data = { s: speed, a: true };
  // const GameMusic = new Audio(gameSound);

  //function to push the words and update the number of words pushed
  const wordPush = () => {
    if (!paused) {
      let new_word = wordbank[wordsCount];
      setWordsCount(wordsCount + 1);
      // console.log("current_word_count: " + wordsCount);
      const new_list = [...displayedWords, new_word];
      setDisplayedWords(new_list);
      // console.log(displayedWords);
    }
  };

  //function to remove words from the word bank
  const removeWord = useCallback((wordToRemove) => {
    if (!displayedWords.includes(wordToRemove)) {
      return;
    }
    let i = displayedWords.indexOf(wordToRemove);
    // const updatedWords = displayedWords.filter((word)=> word!== wordToRemove)
    // displayedWords.splice(i, 1);
    //ran into issue because shifting the length of the array cause rendering issue on the html
    displayedWords[i] = "";
    // console.log('removed word :'+ wordToRemove)
    setDisplayedWords(displayedWords);
  }, [displayedWords])

  //text input submit
  const submitTry = (e) => {
    e.preventDefault();
    if (displayedWords.includes(tryValue)) {
      new Audio(clearedSound).play()
      removeWord(tryValue);
      setClearedCount(clearedCount + 1);
    }
    setTryValue(""); // should clear the field after hitting return
  };

  //reduceLife
  const reduceLife = useCallback(() => {
    if (life.length === 1) {
      console.log("game over");
      new Audio(gameOverSound).play()
      setPaused(true);
      setGameOver(true);
    } else {
      life.pop();
      setLife(life);
    }
  }, [life])

  //pause function
  const pauseGame = (e) => {
    if (e.key === ' ')
      setPaused((paused) => !paused);
  };
  const setChange = (e) => {
    const newValue = e.target.value.replace(/\s/g, '');
    setTryValue(newValue)
  }

  //if speed is less than .1 second then don't decrement it.
  useEffect(() => {
    if (speed < 100) {
      return;
    } else if (wordsCount % 20 === 0) {
      // const newSpeed = speed-200
      setSpeed(speed - 200);
    }
  }, [wordsCount]);

  useEffect(() => {
    // Call the wordPush function every 2 second
    const interval = setInterval(() => {
      wordPush();
    }, 2000);

    return () => {
      // Cleanup the interval on component unmount
      clearInterval(interval);
    };
  }, [wordPush]); // Empty dependency array ensures the useEffect runs only once on component mount

  //pause function
  useEffect(() => {
    // Add event listener for space bar key press
    window.addEventListener("keydown", pauseGame);
    return () => {
      // Remove the event listener on component unmount
      window.removeEventListener("keydown", pauseGame);
    }
  }, []);

  //game over function
  useEffect(() => {
    if (!paused) {
      GameMusic.play().catch(err => {
        console.log("Game Music Err: " + err)
      })
    } else {
      // setAudioPlaying(false)
      GameMusic.pause();
    }
    console.log(paused)
  }, [paused])


  return (
    <>
      <div className="gaming-container">
        {gameOver&&<Ending setPaused={setPaused} setGameOver={setGameOver} setGameOn={setGameOn}/>}
        <div>
          <p>To pause the game, press the spacebar.</p>
          <div className="game-stats">
            <span>Word count:{wordsCount}</span>
            <span>Cleared Count:{clearedCount}</span>
            <span>Current Speed:{speed}</span>
          </div>
          <div className="words-display">
            {displayedWords.map((w) => (
              <Word
                word={w}
                word_data={word_data}
                removeWord={removeWord}
                reduceLife={reduceLife}
                paused={paused}
              />
            ))}
          </div>
          <span className="ground">
            🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥
          </span>
          <div className="attempt-box">
            <form onSubmit={submitTry}>
              <label className="attempt-box">
                <span>
                  Type in the words before they hit the ground! Current Speed{" "}
                  {speed}
                </span>
                <br/>
                <input
                  required
                  type="text"
                  size="40"
                  value={tryValue}
                  onChange={setChange}
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
