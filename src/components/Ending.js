import gameover from '../assets/gameover.png'

export default function Ending({setGameOn, setGameOver, setPaused}) {
  const closeOut = () => {
    setGameOn(false)
    setGameOver(false)
  }
  return (
    <div className="gameover">
      <img src={gameover} alt="gameover" width='500' height='500'/>
      <button onClick={closeOut}>I'm Done</button>
    </div>
  )
}
