import {useState} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';


const AppPrac = () =>{
    //usestate goes at top of componnt
    const [count, setCount] = useState(0)
    
  return(
    <section id="center">
      <div className="hero">
        <img src={heroImg} alt="" />
        <img src={reactLogo} alt="" />
        <img src={viteLogo} alt="" />
      </div>
    </section>
  )
}

export AppPrac;

