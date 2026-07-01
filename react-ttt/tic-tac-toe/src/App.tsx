import {useState} from 'react';

//3 - Setup for the tutorial
//6 - Building the board
//7 - Passing data through props (starting from default function)
//8 - Making an interactive component
//React Developer Tools
//Completing the game
//Lifting state up 
//freeze test
//Why immutability is important
//Taking turns
//Declaring a winner
function Square({value, onSquareClick}){

  //const [value, setValue] = useState(null)

  // function handleClick(){
  //   setValue('X')
  // }
  return (<button className="square" onClick={onSquareClick}>{value}</button>)
}
export default function Board(){
  const [xIsNext, setXIsNext] = useState(true) //bool
  const [square, setSquare] = useState(Array(9).fill(null)) //not defined

  // Now `squares` is ["X", null, null, null, null, null, null, null, null;
    function handleClick(i) {
       if (squares[i] || calculateWinner(squares)) {
      return;
      }
      const nextSquares = square.slice();
      nextSquares[i] = "X";
      setSquare(nextSquares);
    } 
      if (xIsNext) {
        nextSquares[i] = 'X';
      } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    }

    const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return( 
    <>
      <div className="board-row">
        <Square value={square[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={square[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={square[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={square[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={square[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={square[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={square[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={square[6]} onSquareClick={() => handleClick(7)}/>
        <Square value={square[7]} onSquareClick={() => handleClick(8)}/>
        <Square value={square[8]} onSquareClick={() => handleClick(9)}/>
      </div>
      </>
  )
}

function calcWin(squares{
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
})