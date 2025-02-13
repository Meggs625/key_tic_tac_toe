import {useState} from "react";
import './GameBoard.css'
import GameSpace from "./GameSpace";

const PLAYER = {
  ONE: "X",
  TWO: "O"
}

const winningCombinations = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6]  
];

export default function GameBoard() {

  const [currentBoard, setCurrentBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(PLAYER.ONE);
  const [gameWinner, setGameWinner] = useState(null);

  const updateBoard = (idx) => {
    const copyCurrentBoard = [...currentBoard];
    copyCurrentBoard[idx] = turn;
    setCurrentBoard([...copyCurrentBoard]);
    checkForWin(copyCurrentBoard);
  }

  const checkForWin = (updatedBoard) => {
    let winner;

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (updatedBoard[a] && updatedBoard[a] === updatedBoard[b] && updatedBoard[a] === updatedBoard[c]) {
        winner = updatedBoard[a];
      }
    }
    if (winner) {
      setGameWinner(winner);
      storeGameData();
    } else {
      const newTurn = turn === PLAYER.ONE ? PLAYER.TWO : PLAYER.ONE;
      setTurn(newTurn)
    }
  }

  const storeGameData = () => {
    console.log("storing")
    setTimeout(() => {
      setCurrentBoard(Array(9).fill(null));
      setGameWinner(null)

    }, 1000)
  }

  return (
    <section className="main-view">
    {gameWinner && (<h1>{`Congratulations ${gameWinner}`}</h1>)}
    <section className="game-board-container">
      {currentBoard.map((val, idx) => (
        <GameSpace key={idx} value={currentBoard[idx]} index={idx} updateBoard={updateBoard}/>
      ))}
    </section>
    </section>
  )
}