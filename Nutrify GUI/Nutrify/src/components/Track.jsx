import React, { useEffect, useState } from 'react'
import Header from './Header'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
import FoodItem from './FoodItem'

const Track = () => {
  // useEffect(()=>{
  //   console.log("selected item",selectFood)
  //   console.log("search-item",searchItem)
  // })
  const logedUser = useContext(UserContext)
  const [searchItem,setSearchItem]= useState([])
  const[selectFood,setSelectedFood] = useState(null)

  function handleSearch(event){
    
    const user = JSON.parse(logedUser.loginUser)
   if(event.target.value.length!=0){
    fetch(`http://127.0.0.1:8000/food/${event.target.value}`,{
      method:"GET",
      headers:{
        "authorization":`bearer ${user.token}`
      }

    }).then((Response)=>Response.json()).
    then((data)=>{
      console.log(data)
      if(data.msg == undefined){
      setSearchItem(data)
      }
      else{
        setSearchItem([])
      }

    }).catch((err)=>{
      console.log(err)
    })
  }
  else{
    setSearchItem([])
  }

  }

  return (
    <div className='container main-food'>
      <h1>Track food</h1>
      <Header/>
      <div className="search">
        <input type="search" onChange={handleSearch} placeholder='search food item' />
      </div>
      <div className="search-item-list">
      
      {searchItem.length!=0?
      searchItem.map((item)=>{
        
        return <p key={item._id}  onClick={()=>{
          setSelectedFood(item)
          setSearchItem([])
        }} >{item.name} </p>
      }):
      null}
      </div>
      {
        selectFood!=null?
        <FoodItem food = {selectFood}/>
        :null
      }
      

    </div>
  )
}

export default Track