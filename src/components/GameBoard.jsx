import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function RestartButton({ handleRestart }) {
  return <button onClick={handleRestart}>Restart Game</button>;
}

function checkWinner(squares) {
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
    console.log(squares[a], squares[b], squares[c]);
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[b];
    }
  }
  return null;
}

export default function GameBoard() {
  const [nextIs, setnextIs] = useState("X");
  const [squares, setSquares] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  function handleClick(i) {
    const nextSquares = squares.slice();

    if (squares[i] || checkWinner(squares)) {
      return;
    }

    nextSquares[i] = nextIs;
    setSquares(nextSquares);
    nextIs === "X" ? setnextIs("O") : setnextIs("X");
  }

  function handleRestart() {
    const sq = [null, null, null, null, null, null, null, null, null];
    setSquares(sq);
  }
  const winner = checkWinner(squares);
  let status;
  if (winner) {
    status = "Winner :" + winner;
  } else {
    status = "Next Player is " + (nextIs === "X" ? "X" : "O");
  }
  return (
    <>
      <div>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <RestartButton handleRestart={handleRestart} />
    </>
  );
}
