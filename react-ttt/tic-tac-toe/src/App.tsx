import {useState} from 'react';


function Square(){
  //hooks
  const [value, setValue] = useState(null)

  //functions
  // function handleClick() {
  //   console.log('clicked!')
  // }
  function handleClick(){
    setValue('X')
  }
  //component return
  return(
    <button className="square" onClick={handleClick}>
      {value}     
    </button>
  )
}


export default function Board(){
  return (
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

//add next
// export default function Board() {
//   const [squares, setSquares] = useState(Array(9).fill(null));
//   return (
//     // ...
//   );