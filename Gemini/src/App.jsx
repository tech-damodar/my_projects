import { createContext, useEffect, useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import MainComponent from './components/MainComponent'
import {searchContext} from './context/Context'
function App() {
  
 const [history,setHistory] = useState([])
 useEffect(()=>{
  console.log(history)
 },[history])
  return (
    <>
    <searchContext.Provider value={{history,setHistory}}>
      <SideBar/>
      <MainComponent/>
    </searchContext.Provider>
    </>
  )
}

export default App
