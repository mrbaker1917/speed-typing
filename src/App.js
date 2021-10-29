import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const STARTING_TIME = 20
  const [typetext, updateTypetext] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0)
  const textFocus = useRef()


  function handleChange(e) {
    const { value } = e.target;

    updateTypetext(value);
  }

  function countWords(text) {
    const words_arr = text.trim().split(" ");
    const filteredWords = words_arr.filter((word) => word !== "");
    console.log(filteredWords.length);
    return filteredWords.length;
  }

  function startGame() {
    setIsTimeRunning(true)
    setTimeRemaining(STARTING_TIME)
    updateTypetext("")
    setWordCount(0)
  }

  function endGame() {
    setIsTimeRunning(false)
    setWordCount(countWords(typetext))
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      textFocus.current.focus()
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
        endGame()
      }
  }, [timeRemaining, isTimeRunning])

  return (
    <div>
      <h1>Speed Typing Game: How fast can you type?</h1>
      <textarea value={typetext} onChange={handleChange} disabled={!isTimeRunning} ref={textFocus} />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={() => startGame()} disabled={isTimeRunning}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
