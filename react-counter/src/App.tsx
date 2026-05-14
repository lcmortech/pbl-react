import React from 'react';

const App = () =>{
   // [Current State, Setter Function] = useState(Initial State)
const [counter, setCounter] = useState(0)
const increment = () => setCounter(counter + 1)
const decrement = () => setCounter(counter -1)

return(
  <>
    <h1>Counter: {counter}</h1>
    <button onClick={increment}>Increase</button>
    <button onClick={decrement}>Decrease</button>
  </>
)
}

export default App