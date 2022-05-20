import React from "react";
import { TicTacToe } from "./TicTacToe";

export const Square = ({ value, onClick }) => {
  return (
    <div>
      <button className="btn" onClick={() => onClick()}>
        {value}
      </button>
    </div>
  );
};
