import React from 'react'
import './ContactFormStyles.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yl2hxqh', 'template_xu32ihy', form.current, 'bn0eHys0yPLq_XdIi')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully")
            }, (error) => {
                console.log(error.text);
                alert("Unable send the message")
            });
    };
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
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' placeholder='Name' name='from_name'></input>
                <input type='text' placeholder='Email' name='from_email'></input>
                <input type='text' placeholder='Subject' name='from_subject'></input>
                <textarea rows={'6'} placeholder='Type your message here ...' name='message'></textarea>
                <button className='btn'>Submit</button>
            </form>

        </div>
    )
}

export default ContactForm