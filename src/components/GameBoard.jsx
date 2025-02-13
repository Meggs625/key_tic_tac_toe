import {useState} from "react";
import './GameBoard.css'
import GameSpace from "./GameSpace";

export default function GameBoard() {

  const [currentBoard, setCurrentBoard] = useState(Array(9).fill(null));

  return (
    <section className="game-board-container">
      {currentBoard.map((val, idx) => (
        <GameSpace key={idx} value={val} index={idx}/>
      ))}
    </section>
  )
}