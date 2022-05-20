import React, { useState } from "react";
import { Square } from "./Board";

export const TicTacToe = () => {
  const [turn, setTurn] = useState(Array(9).fill(null));
  const [x, setX] = useState(true);

  const win = winner(turn);
  let status;
  if (win) {
    status = "Winner : " + win;
  } else {
    status = "Player Turn : " + (x ? "X" : "O");
  }

  const changeTurn = (i) => {
    return (
      <Square
        value={turn[i]}
        onClick={() => {
          handleClick(i);
        }}
      />
    );
  };

  function handleClick(i) {
    const squares = turn.slice();

    if (squares[i] === null) {
      squares[i] = x ? "X" : "O";
      setTurn(squares);
      setX(!x);
    } else {
      alert("Can't do that");
    }
  }

  function winner(turns) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (turns[a] && turns[a] === turns[b] && turns[a] === turns[c]) {
        return turns[a];
      }
    }
    return null;
  }

  return (
    <div className="cont">
      <h1>
        <u>Tic Tac Toe</u>
      </h1>
      <h3>{status}</h3>
      <div className="cont">
        <div className="row">
          {changeTurn(0)}
          {changeTurn(1)}
          {changeTurn(2)}
        </div>
        <div className="row">
          {changeTurn(3)}
          {changeTurn(4)}
          {changeTurn(5)}
        </div>
        <div className="row">
          {changeTurn(6)}
          {changeTurn(7)}
          {changeTurn(8)}
        </div>
      </div>
    </div>
  );
};
