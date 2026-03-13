import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter } from "react-router-dom"
import NavBar from './exam/NavBar'
//import './App.css'

function App() {
  

  return (
    <>
      <h2 style ={ {textAlign:'center'} }> Online Book Registeration Portal </h2>
        
       <BrowserRouter>
        <NavBar/>

       </BrowserRouter>

    </>
  )
}

export default App
