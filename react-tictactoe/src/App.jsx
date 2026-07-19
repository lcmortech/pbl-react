import { useState } from "react";

export default function Square({value}){

  const [value, setValue] = useState(null)

  //changes Square to display an “X” when clicked
      function handleClick() {
    setValue('X');
    console.log('clicked!');
  }
    return (<button className="square" onClick={handleClick}>{value}</button>)
}



//Each Square has its own state: the value stored in each Square is completely independent of the others. When you call a set function in a component, React automatically updates the child components inside too.
function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
    <div className="board-row">
        <Square value={squares[0]}/>
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
    </div>
    <div className="board-row">
        <Square value={squares[3]}/>
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
    </div>
    <div className="board-row">
        <Square value={squares[6]}/>
        <Square value={squares[7]}/>
        <Square value={squares[8]}/>
    </div>
    </>
  )
}