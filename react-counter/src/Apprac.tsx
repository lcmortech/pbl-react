import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


const AppPrac = () =>{
    //usestate goes at top of component
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
        onClick = {()=> setCount((count)=> count++)} 
        >
          Count is {count} 
          {/* upon clicking the button, execute the function setCount, increment variable count by 1 val
          setCount also initialized here (w/ a arrow function). */}
      </button>
    </section>
    
    <div className="ticks"></div>
    <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
            <ul>{/*Social links go here*/}
               <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li><a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
            </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export AppPrac;

