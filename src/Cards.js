import React, { useState, useEffect } from "react";
import { charData } from "./charData";

const Cards = () => {
  const [r, setR] = useState(0);
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
    console.log("rendered");
  });

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
            onClick={() => setR(r + 1)}
            style={{
              margin: "10px",
              borderRadius: "5px",
              background: "white",
            }}
            key={item.id}
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
