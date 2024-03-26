import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <>
      <h1>Tic-Tac-Toe Game</h1>
      <GameBoard />
    </>
  );
}

export default App;
