import React from 'react'
import './HeroStyles.css'

function Hero(props) {
  return (
    <div>
        <div className='hero-img'>
            <div className="heading">
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    </div>
  )
}

export default Hero