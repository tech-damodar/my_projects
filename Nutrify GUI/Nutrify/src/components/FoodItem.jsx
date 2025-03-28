import React, { useEffect, useState } from 'react';
import './Track.css'
const FoodItem = (props) => {

    const [food,setfood]=useState(props.food)
    const [Inifood,setInifood]=useState(props.food)
    const [quentity,setquentity]=useState(0)
    useEffect(()=>{
        
        setInifood(props.food)
        setfood(props.food)
    },[props.food])
    function inputHandle(event){
        
        setquentity(event.target.value)
        
    }
    function submitHandle(){
        
        let copyfood ={...food}
            copyfood.protein = (Inifood.protein/100)* quentity;
            copyfood.calories = (Inifood.calories/100)* quentity;
            copyfood.fat = (Inifood.fat/100)* quentity;
            copyfood.carbohydrates = (Inifood.carbohydrates/100)* quentity;
            copyfood.fiber = (Inifood.fiber/100)* quentity;
            console.log("calculated- ",copyfood)
           setfood(copyfood) 
        
    }
  return (
    <div className="main-card" >
      <div className="img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPZ8Hv38DtbZs2gqhTLkKT-MgbmHTHpdHVw&s" alt="" />
      </div>
      <div className="intro">
      <h2>{food.name}</h2>
      <p>protein : {food.protein}</p>
      </div>
      <div className="nutition">
        <div className="n-item">
            <p><span>calories :</span> {food.calories}</p>
            <p><span>carbohydrates :</span>{food.carbohydrates}</p>
        </div>
        <div className="n-item">
            <p><span>Fat :</span> {food.fat}</p>
            <p><span>Fiber :</span>{food.fiber}</p>
        </div>
        
      </div>
      <div className="nat-item">
        <input type="number" onChange={inputHandle} placeholder='enter Q.in grm' />
            <button onClick={submitHandle} className='btn'>calculate</button>
        </div>
    </div>
  );
};

export default FoodItem;
