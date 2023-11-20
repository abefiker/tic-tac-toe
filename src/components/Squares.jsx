import React from "react";

export default function Squares ({value,onSquareClick}) {
    return (
        <button
        className="square"
        onClick={onSquareClick}
      >
        {value}
      </button>
    );

}