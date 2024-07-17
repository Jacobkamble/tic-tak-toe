import React, { useCallback, useEffect, useState } from "react";
import Board from "./Board";

const Game = ({ row, colums }) => {
  const [board, setBoard] = useState(Array(row * colums).fill(null));

  const [resetBoard, setReset] = useState(false);

  

  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
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

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = useCallback( (i) => {
      if (calculateWinner(board) || board[i]) {
        return;
      }
      const boardCopy = [...board];
      boardCopy[i] = xIsNext ? "X" : "O";
      setBoard(boardCopy);
      setXIsNext(!xIsNext);
    },
    [board]
  );

  const winner = calculateWinner(board);

  return (
    <>
      <Board row={row} column={colums} board={board} onClick={handleClick} />

      {winner ? "Winnner is " + winner : ""}

      {board.filter((i) => {
        return i;
      }).length === board.length && !winner
        ? "Draw"
        : ""}
      {}
    </>
  );
};

export default Game;
