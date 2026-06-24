import {useState} from 'react';

//3 - Setup for the tutorial
//6 - Building the board
//7 - Passing data through props (starting from default function)
//8 - Making an interactive component
//React Developer Tools
//Completing the game
//Lifting state up 
function Square({value, onSquareClick}){

  //const [value, setValue] = useState(null)

  // function handleClick(){
  //   setValue('X')
  // }
  return (<button className="square" onClick={onSquareClick}>{value}</button>)
}
export default function Board(){
  const [square, setSquare] = useState(Array(9).fill(null))

    function handleClick(i) {
    const nextSquares = square.slice();
    nextSquares[i] = "X";
    setSquare(nextSquares);
  }

  return( 
    <>
      <div className="board-row">
        <Square value={square[0]} onSquareClick={{() => handleClick(0)}}/>
        <Square value={square[1]}/>
        <Square value={square[2]} />
      </div>
      <div className="board-row">
        <Square value={square[3]}/>
        <Square value={square[4]}/>
        <Square value={square[5]/>
      </div>
      <div className="board-row">
        <Square value={square[6]}/>
        <Square value={square[7]}/>
        <Square value={square[8]}/>
      </div>
      </>
  )
}