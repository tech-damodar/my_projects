import React from 'react'
import Navbar from './components/navebar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/program/Program'
import Title from './components/Title'
const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Title subtitle ='Our program' title ='what we offer'/>
     <Program/>
    </div>
  )
}

export default App