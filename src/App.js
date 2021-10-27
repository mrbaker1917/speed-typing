import React, { useState } from 'react'
import "./App.css";

function App() {

  const [ typetext, updateTypetext ] = useState("");

  function handleChange(e) {
    const {value} = e.target;

    updateTypetext(value)
  }

  return (
    <div>
      <h1>Speed Typing Game: How fast can you type?</h1>
      <textarea value={typetext} onChange={handleChange} />
      <h4>Time Remaining: </h4>
      <button>Start</button>
      <h1>Word Count:</h1>
    </div>
  );
}

export default App;
