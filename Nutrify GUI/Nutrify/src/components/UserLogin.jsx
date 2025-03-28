import { useState,useContext} from "react"
import {Link,useNavigate} from  "react-router-dom"
import { UserContext } from "../context/UserContext"
const UserLogin=()=>{


  const logedUser = useContext(UserContext)

 

  const navigate = useNavigate()
  const[userCred,setUserCred]= useState({
    email:"",
    password:""
  })
  const [message,setmessage]= useState({
    type:"invisible",
    text:""
  })
  function handleInput(event){
    setUserCred((prev)=>{
      return {...prev,[event.target.name]:event.target.value}
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    fetch("http://127.0.0.1:8000/login",{
      method:"POST",
      body:JSON.stringify(userCred),
      headers:{
        "content-type":"application/json"
      }
    }).then((res)=>{
      if(res.status == 401){
        setmessage({
          type:"success",
          text:"Envalid password"
        })
        navigate("/login")
      }
      else if(res.status == 404 ){
        setmessage({
          type:"success",
          text:"User not found"
        })
        navigate("/login")
      }
      else if(res.status == 200){
        setmessage({
          type:"success",
          text:"Login Successfull"
        })  
      }


      return res.json();
    }).
    then((data)=>{
      // console.log(data)
      if(data.token != undefined){
        localStorage.setItem("nutrify-user",JSON.stringify(data));
      logedUser.setLoginUser(data)
      navigate('/track')
      }
      




    })

    setUserCred({
      email:"",
    password:""
    })
    
  }
    





    return(
        <div className="container">
      <div className="main-form">
            <h2>login page</h2>
            <form action="">
            
            <input type="email" name="email" onChange={handleInput} placeholder="Enter email" value={userCred.email} />
            <input type="text" name="password" onChange={handleInput} placeholder="Enter Password" value={userCred.password} />
            </form>
            <div className="buttom">
            <button className="btn" onClick={handleSubmit} type="submit">submit</button>
            <p>Don't have Account ? </p>
            <Link to="/register">Register</Link>
            </div>
            <p className={message.type}>{message.text}</p>
      </div>
    </div>
    )
}

export default UserLogin