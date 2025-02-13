import React from "react";
import "./GameSpace.css"


// eslint-disable-next-line react/prop-types
export default function GameSpace({value, index, updateBoard}) {

  const handleUpdate = () => {
    if (value === null) {
      updateBoard(index)
    }
  }

  return (
    <section className="space-container">
      <button
        className="space-btn"
        onClick={() => handleUpdate()}
      >
      {value}
      </button>
    </section>
  )
}