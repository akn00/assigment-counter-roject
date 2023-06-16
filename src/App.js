import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);

      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => {setCounter(0)
      setIsRunning(false)}}>Reset</button>
    </div>
  );
}

export default App;
