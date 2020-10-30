import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import "./App.css";

const App = () => {
  const [scoreboard, setScoreboard] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <header
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          left: "0",
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
          color: "white",
          backgroundImage: `url(' https://i.pinimg.com/originals/d2/c3/44/d2c344ce5f51508b6f8cc1bdc8497a80.gif  ')`,
        }}
      >
        <img
          className="App-logo"
          style={{ borderRadius: "5px", width: "150px", height: "150px" }}
          alt="icon"
          src="data:image/png;base64,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"
        ></img>
        <div>
          <h1>LOTR Memory Card Game</h1>
          <p>
            Get points by clicking on an image but don't click on any more than
            once!
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "white",
            color: "black",
            width: "180px",
            height: "150px",
            borderRadius: "5px",
          }}
        >
          <p>Max Score: 18</p>
          <p>Best Score: {bestScore}</p>
          <p>Current Score: {scoreboard}</p>
        </div>
      </header>

      <Cards />
    </div>
  );
};

export default App;

/*
-maxscore const (x)
-scoreboard state (x)
-bestscore state (x)
-cards object (img, text) (x)
-cards component (x)
-random cards render function onMount (x)
-functional components and hooks (x)
*/
