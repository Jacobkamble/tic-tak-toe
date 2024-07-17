import React, { useCallback, useState } from "react";
import Board from "./Board";

const Game = ({ row, colums }) => {
  const [board, setBoard] = useState(Array(row * colums).fill(null));

  const [xIsNext, setXIsNext] = useState(true);



  const calculateWinner = (squares) => {
    // Check rows
    for (let i = 0; i < row; i++) {
      const start = i * colums;
      const line = squares.slice(start, start + colums);
      if (line.every((cell) => cell && cell === line[0])) {
        return line[0];
      }
    }

    // Check columns
    for (let i = 0; i < colums; i++) {
      const line = [];
      for (let j = 0; j < row; j++) {
        line.push(squares[i + j * colums]);
      }
      if (line.every((cell) => cell && cell === line[0])) {
        return line[0];
      }
    }

    // Check diagonals
    const mainDiagonal = [];
    const antiDiagonal = [];
    for (let i = 0; i < row; i++) {
      mainDiagonal.push(squares[i * (colums + 1)]);
      antiDiagonal.push(squares[(i + 1) * (colums - 1)]);
    }
    if (mainDiagonal.every((cell) => cell && cell === mainDiagonal[0])) {
      return mainDiagonal[0];
    }
    if (antiDiagonal.every((cell) => cell && cell === antiDiagonal[0])) {
      return antiDiagonal[0];
    }

    return null;
  };
  const handleClick = useCallback(
    (i) => {
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
