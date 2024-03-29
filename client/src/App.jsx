import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section id='header'>
      <div className="container">
        <img id='hero-image' src="./images/bg-1.jpg" alt="" />
        <div id="header-content">
          <img className="logo-hero" src="./images/logo-white.png" alt="" />
          <h1 id='header-title'>Speak your heart out!</h1>
          <div id="cta">
            <button className='btn btn-secondary'>Login</button>
            <button className='btn btn-primary'>Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
