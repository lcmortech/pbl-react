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

  function handleClick(i){
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }
  return (
    <>
    <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick()}/>
        <Square value={squares[4]}onSquareClick={() => handleClick()}/>
        <Square value={squares[5]}onSquareClick={() => handleClick()}/>
    </div>
    <div className="board-row">
        <Square value={squares[6]}onSquareClick={() => handleClick()}/>
        <Square value={squares[7]}onSquareClick={() => handleClick()}/>
        <Square value={squares[8]}onSquareClick={() => handleClick()}/>
    </div>
    </>
  )
}