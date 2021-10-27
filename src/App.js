import React, { useState } from 'react'
import "./App.css";

function App() {

  const [ typetext, updateTypetext ] = useState("");

  function handleChange(e) {
    const {value} = e.target;

    updateTypetext(value)
  }

  function countWords(text) {
    const words_arr = text.trim().split(" ")
    const filteredWords = words_arr.filter(word => word !== "")
    console.log(filteredWords.length)
    return filteredWords.length;
  }

  return (
    <div>
      <h1>Speed Typing Game: How fast can you type?</h1>
      <textarea value={typetext} onChange={handleChange} />
      <h4>Time Remaining: </h4>
      <button onClick={() => countWords(typetext)}>Start</button>
      <h1>Word Count:</h1>
    </div>
  );
}

export default App;
