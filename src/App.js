import React, { useEffect, useState } from "react";
import "./App.css";
import Timer from "./Timer";

export default function FunctionalComponent() {
  const initialTimer = {
    timerMounted: false,
    timerStarted: false,
  };

  const [states,setStates] = useState(initialTimer);

  useEffect(() => {
    console.log("Application mounted");
  }, [])

 const changeTimerStatus = () => {
   setStates({  timerMounted: states.timerMounted,timerStarted: !states.timerStarted }, () => {
      if (states.timerStarted) alert("Timer started");
    });
  }

  const addTimer = () => {
    const newState = {
      timerMounted: !states.timerMounted,
      timerStarted: states.timerMounted ? false : states.timerStarted,
    };
    setStates({ ...newState });
  }

    return (
      <div className="App">
        <h1>Timer</h1>
        <button onClick={addTimer}>
          {console.log(states)}
          {states.timerMounted ? "REMOVE TIMER" : "ADD Timer"}
        </button>
        <br />
        <br />
        {states.timerMounted && (
          <>
            <button onClick={changeTimerStatus}>
              {states.timerStarted ? "STOP" : "START"}
            </button>
            <br />
            <br />
            <Timer timerStarted={states.timerStarted} />
          </>
        )}
      </div>
    );
  }


