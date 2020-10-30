import React, { useState, useEffect } from "react";
import { charData } from "./charData";

const Cards = (props) => {
  const [clickedCards, setClickedCards] = useState([]);
  const randomCards = charData;

  function shuffle() {
    for (let i = randomCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomCards[i], randomCards[j]] = [randomCards[j], randomCards[i]];
    }
    console.log("shuflled");
  }

  useEffect(() => {
    shuffle();
  });

  //game logic
  function checkForPoint(e) {
    if (!clickedCards.includes(Number(e.target.closest(".card").id))) {
      setClickedCards((clickedCards) => [
        ...clickedCards,
        Number(e.target.closest(".card").id),
      ]);
      props.increaseScore();
    } else {
      props.checkBestscore(clickedCards.length);
      props.resetScore();
      setClickedCards([]);
    }
  }

  return (
    <div
      style={{
        margin: "170px auto auto ",
        width: "90%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      {randomCards.map((item) => {
        return (
          <div
            onClick={(e) => {
              checkForPoint(e);
              console.log(clickedCards);
            }}
            style={{
              margin: "10px",
              borderRadius: "5px",
              background: "white",
            }}
            key={item.id}
            id={item.id}
            className="card"
          >
            <img
              style={{ width: "280px", borderRadius: "5px 5px 0 0" }}
              alt={item.text}
              src={item.img}
            ></img>
            <p style={{ textAlign: "center" }}>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
