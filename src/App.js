import React, { useState } from "react";
import Cards from "./Cards";
import "./App.css";
import { Header } from "./Header";

const App = () => {
  const [scoreboard, setScoreboard] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const increaseScore = () => {
    setScoreboard(scoreboard + 1);
  };
  const checkBestscore = (v) => {
    if (bestScore < v) {
      setBestScore(v);
    }
  };
  const resetScore = () => {
    setScoreboard(0);
  };

  return (
    <div className="App">
      <Header bestScore={bestScore} scoreboard={scoreboard} />
      <Cards
        increaseScore={increaseScore}
        checkBestscore={checkBestscore}
        setScoreboard={setScoreboard}
        resetScore={resetScore}
      />
    </div>
  );
};

export default App;

/*
-point logic ()
-maxscore const (x)
-scoreboard state (x)
-bestscore state (x)
-cards object (img, text) (x)
-cards component (x)
-random cards render function onMount (x)
-functional components and hooks (x)
*/
