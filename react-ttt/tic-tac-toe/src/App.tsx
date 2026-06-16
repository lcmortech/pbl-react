import {useState} from 'react'

//3 - Setup for the tutorial
//6 - Building the board
//7 - Passing data through props (starting from default function)
//8 - Making an interactive component
function Square(){

  const [value, setValue] = useState(null)

  function handleClick(){
    setValue('X')
  }
  return (<button className="square" onClick={handleClick}>{value}</button>)
}
export default function Board(){
  const [square, setSquares] = useState(null)

  return( 
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      </>
  )
}