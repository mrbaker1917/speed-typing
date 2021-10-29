import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [typetext, updateTypetext] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

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

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
        setIsTimeRunning(false)
      }
  }, [timeRemaining, isTimeRunning])

  return (
    <div>
      <h1>Speed Typing Game: How fast can you type?</h1>
      <textarea value={typetext} onChange={handleChange} />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={() => setIsTimeRunning(true)}>Start</button>
      <h1>Word Count:</h1>
    </div>
  );
}

export default App;
