import { useState } from "react";
import { WINNING_COMBINATIONS } from "../../winning_combination";

function Gameboard({ onSelectSquare, activePlayerSymbol }) {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const HandleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevState) => {
      const updatedBoard = [...prevState.map((innerArray) => [...innerArray])];
      if (
        updatedBoard[rowIndex][colIndex] !== "X" &&
        updatedBoard[rowIndex][colIndex] !== "O"
      ) {
        updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

        const winner = checkWinner(updatedBoard);
        if (winner) {
          console.log(winner, "ssssss");
        }

        setTimeout(() => {
          onSelectSquare();
        }, 0);
      } else {
        return updatedBoard;
      }
      return updatedBoard;
    });
  };

  const checkWinner = (board) => {
    for (let combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (
        board[a.row][a.column] &&
        board[a.row][a.column] === board[b.row][b.column] &&
        board[a.row][a.column] === board[c.row][c.column]
      ) {
        return board[a.row][a.column]; // Return the winning symbol (X or O)
      }
    }
    return null;
  };

  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => HandleSelectSquare(rowIndex, colIndex)}
                  >
                    {col}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}

export default Gameboard;
