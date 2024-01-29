import React from 'react'
import './HeroImgStyles.css'
import introImg from './introImg.jpg'
import { Link } from 'react-router-dom'

function HeroImg() {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={introImg} alt="introImg"></img>
        </div>
        <div className='content'>
            <p>HI, I'M SRINIVAS ANDUKURI</p>
            <h1>MERN Stack Developer</h1>
            <div>
                <Link to={'/project'} className='btn'>Projects</Link>
                <Link to={'/contact'} className='btn btn-light'>Contacts</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg