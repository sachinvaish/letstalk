import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState();

  const googleAuth=()=>{
    window.open(
      `http://localhost:8080/auth/google/callback`,
      '_self'
    )
  }
  const googleLogout=()=>{
    window.open(
      `http://localhost:8080/auth/logout`,'_self'
    )
    setUser(null)
  }

  const getUser=async ()=>{
    const url = 'http://localhost:8080/auth/login/success';
    const result = await fetch(url);
    const res = await result.json();
    console.log(res);
    if(!res.error) setUser(res);
  }

  useEffect(()=>{
    getUser();
  },[])

  return (
    <section id='header'>
      <div className="container">
        <img id='hero-image' src="./images/bg-1.jpg" alt="" />
        <div id="header-content">
          <img className="logo-hero" src="./images/logo-white.png" alt="" />
          <h1 id='header-title'>Speak your heart out!</h1>
          <br/>
          {user && <h1 id='header-title'>Hi {user.name}</h1>}
          <div id="cta">
            {!user && <button className='btn btn-primary' onClick={googleAuth}>Login with Google</button>}
            {user && <button className='btn btn-primary' onClick={googleLogout}>Logout</button>}
            {/* <button className='btn btn-secondary'>Login</button>
            <button className='btn btn-primary'>Sign Up</button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
