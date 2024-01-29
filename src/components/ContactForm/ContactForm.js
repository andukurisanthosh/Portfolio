import React from 'react'
import './ContactFormStyles.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function ContactForm() {
    return (
        <div className='form'>
            <div className='connections'>
                <Link to={'https://www.linkedin.com/in/srinivasandukuri/'} target='_blank'>
                    <FaLinkedin
                        size={50}
                        style={{ color: '#fff', marginRight: '1rem' }}
                    />
                </Link>
                <Link to={'https://github.com/andukurisanthosh'} target='_blank'>
                    <FaGithub
                        size={50}
                        style={{ color: '#fff', marginRight: '1rem' }}
                    />
                </Link>

            </div>
            <form>
                <input type='text' placeholder='Name'></input>
                <input type='text' placeholder='Email'></input>
                <input type='text' placeholder='Subject'></input>
                <textarea rows={'6'} placeholder='Type your message here ...'></textarea>
                <button className='btn'>Submit</button>
            </form>

        </div>
    )
}

export default ContactForm