import {useState} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';


const AppPrac = () =>{
    //usestate goes at top of componnt
    const [count, setCount] = useState(0)
    
  return(
    <>
    <section id="center">
      <div className="hero">
        <img src="" alt={heroImg} className="base">
        <img src="" alt={reactLogo} className="framework">
        <img src="" alt={viteLogo} className="vite" /></img></img>
      </div>
      <div>
        <h1>Get started!</h1>
        <p>Edit <code>src/App.tsx</code>and save to test <code>HMR</code></p>
      </div>
      <button className="counter"
        onClick = {() => setCount((count) => count++)}>
          Count is {count}
      </button>
    </section>
    </>
  )
}

export AppPrac;

