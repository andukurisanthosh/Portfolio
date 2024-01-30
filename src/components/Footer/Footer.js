import React from 'react'
import './FooterStyles.css'
import { FaGithub, FaInstagram, FaLinkedin, FaLocationArrow, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaLocationArrow
                            size={20}
                            style={{ color: '#fff', marginRight: '2rem' }}
                        />
                        <div>
                            <p>Hyderabad</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4>
                            <FaPhone
                                size={20}
                                style={{ color: '#fff', marginRight: '2rem' }}
                            />
                            +91-6281015128
                        </h4>
                    </div>
                    <div className='email'>
                        <h4>
                            <FaMailBulk
                                size={20}
                                style={{ color: '#fff', marginRight: '2rem' }}
                            />
                            andukurisrinivas04@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About</h4>
                    <p>This is me Srinivas Andukuri,
                        I enjoy working on new projects and design challenges
                    </p>
                    <div className='social'>

                        <FaInstagram
                            size={20}
                            style={{ color: '#fff', marginRight: '1rem' }}
                        />
                        <FaTwitter
                            size={20}
                            style={{ color: '#fff', marginRight: '1rem' }}
                        />
                        <FaLinkedin
                            size={20}
                            style={{ color: '#fff', marginRight: '1rem' }}
                        />
                         <FaGithub
                            size={20}
                            style={{ color: '#fff', marginRight: '1rem' }}
                        />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer