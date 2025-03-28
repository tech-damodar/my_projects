import React from 'react'
import { useEffect,useContext } from 'react' 
import { UserContext } from '../context/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import  './Track.css'
const Header = () => {
    const navigate = useNavigate()
    const logedUser = useContext(UserContext)
  
    function logout(){
      localStorage.removeItem("nutrify-user");
      logedUser.setLoginUser(null)
      navigate("/login")
    }  

  return (
    <>
        <div className="hader">
        <ul>
          <li>Home</li>
          <li><Link to="/demo">Demo</Link></li>
          <li onClick={logout}>Logout</li>
        </ul>
      </div>
    </>
  )
}

export default Header