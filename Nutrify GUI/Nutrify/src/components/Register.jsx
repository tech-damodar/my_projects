import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
const Register = () => {

  const [userDetail,setUserDetail]=useState(
    {
      name:"",
      email:"",
      password:"",
      age:""
    }
  )
  const [message,setmessage]= useState({
    type:"invisible",
    text:""
  })

  function handleInput(event){
    setUserDetail((prevState)=>{
        return {...prevState,[event.target.name]:event.target.value}
    })

  }
  function handleOnsubmit(event){
    event.preventDefault()
    fetch("http://127.0.0.1:8000/register",{
      method:"POST",
      body:JSON.stringify(userDetail),
      headers:{
        "content-type":"application/json"
      }
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data)
    }).catch((err)=>{
      console.log(err)
    })

    setUserDetail({
      name:"",
      email:"",
      password:"",
      age:""
    })
    setmessage({
      type:"success",
      text:"User Registered"
    })
  }

  return (
    <div className="container">
      <div className="main-form">
            <h2>User Registertion</h2>
            <form action="">
            <input type="text" name="name" onChange={handleInput} value={userDetail.name} placeholder="Enter Name" />
            <input type="email" name="email" onChange={handleInput} value={userDetail.email} placeholder="Enter email" />
            <input type="text" name="password" onChange={handleInput} value={userDetail.password} placeholder="Enter Password" />
            <input type="number" name="age" onChange={handleInput} value={userDetail.age} placeholder="Enter Age" />
            </form>
            <div className="buttom">
            <button className="btn" onClick={handleOnsubmit}>submit</button>
            <p>I have Account ? </p>
            <Link to="/login">Login</Link>
            </div>
      <p className={message.type}>{message.text}</p>
      </div>
    </div>
  );
};

export default Register;
