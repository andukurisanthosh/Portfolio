import React from 'react'
import './AboutContentStyles.css'
import { Link } from 'react-router-dom'
import hero from './Srinivas.JPG'
import Certifications from '../Certifications/Certifications'
import Skills from '../Skills/Skills'


function AboutContent() {
    return (
        <>
            <div className='about'>
                <div className="left">
                    <h1>Who Am I?</h1>
                    <p>
                        Im a MERN stack developer, I create responsive and secure websites.
                        Motivated and hardworking individual with a passion for software development seeks hands-on experience with a
                        team of professionals. Strong understanding of software development concepts and eagerness to learn new
                        technologies.
                    </p>
                    <Link to={'/contact'}>
                        <button className='btn'>Contact</button>
                    </Link>
                </div>
                <div className="right">
                    <img className='img' src={hero} alt='hero'></img>
                </div>
            </div>
            <Skills />
            <Certifications />
            
        </>

    )
}

export default AboutContent