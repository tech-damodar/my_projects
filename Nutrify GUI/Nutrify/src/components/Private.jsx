import React from 'react'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Private = ({ component: Component }) => {

    const logedUser = useContext(UserContext)
    return (
    
    logedUser.loginUser!==null?
    <Component/>
    :
    <Navigate to="/login"/>
    
  )
}

export default Private