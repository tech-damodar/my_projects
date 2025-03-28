import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero_text">
            <h1>We Ensure better education for a better World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi ut, enim atque, sed a dolores tempore ipsa distinctio aliquam iure nostrum repellat error nam! Aspernatur doloribus aliquid veniam porro.</p>
            <button className='btn'>Explore More <img src = {dark_arrow}/> </button>
        </div>
    </div>
  )
}

export default Hero