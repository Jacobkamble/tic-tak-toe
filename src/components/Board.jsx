import React from "react";

const Board = ({ row, column, onClick, board }) => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateRows: `repeat(${row},100px)`,
          gridTemplateColumns: `repeat(${column},100px)`,
        }}
      >
        {board.map((value, i) => {
          return (
            <div
              key={i}
              style={{
                width: "100px",
                height: "100px",
                border: "1px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => onClick(i)}
            >
              {value}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Board;
