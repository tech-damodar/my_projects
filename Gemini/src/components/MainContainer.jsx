import React from 'react'
import './MainComponent.css'
import { assets } from "../assets/assets";
const MainContainer = () => {

    

  return (
    <>
    <div className="main-container">
            <div className="greet">
                <p><span>Hello, Ram</span></p>
                <p>How Can I help you today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Brainstorm presentation ideas about a topic</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Help me find the latest trends</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Help me sound like an expert for an upcoming trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={assets.compass_icon} alt="" />
                </div>

            </div>

            
        </div>
    
    </>
  )
}

export default MainContainer