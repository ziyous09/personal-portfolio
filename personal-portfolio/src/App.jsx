import React from 'react'
import { Home, About,SkillStack, Work, ContactUs } from './Container/Index'
import Navbar from './Component/NavBar/Navbar'  
import './App.css'
const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <SkillStack/>
      <Work/>
      <ContactUs/>
        
     
      
    </div>
  )
}

export default App