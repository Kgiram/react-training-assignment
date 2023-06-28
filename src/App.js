import React, { useEffect, useState } from "react";
import "./App.css";
import Timer from "./Timer";

export default function FunctionalComponent() {
  const initialTimer = {
    timerMounted: false,
    timerStarted: false,
  };
  const [states, setStates] = useState(initialTimer);
  const [timerMounted, setTimerMounted] = useState(false)

  useEffect(() => {
    console.log("Application mounted");
  }, [])

  const addTimer = () => {
    setTimerMounted(!timerMounted)
  }

  return (
    <div className="App">
      <h1>Timer</h1>
      <button onClick={addTimer}>
        {timerMounted ? "REMOVE TIMER" : "ADD Timer"}
      </button>
      <br />
      <br />
      {timerMounted && <Timer />}
    </div>
  );
}