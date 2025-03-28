import './App.css'
import Register from './components/Register'
import Track from './components/Track'
import UserLogin from './components/UserLogin'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { UserContext } from './context/UserContext'
import { useState,useEffect } from 'react'
import Private from './components/Private'
import Demo from './components/Demo'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const [loginUser,setLoginUser]= useState(localStorage.getItem("nutrify-user"))
  
  return (
    <>
    <UserContext.Provider value={{loginUser,setLoginUser}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/track" element={<Private component = {Track}/>}/>
        <Route path="/demo" element={<Private component = {Demo}/>}/>

      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </>
  )
}

export default App
