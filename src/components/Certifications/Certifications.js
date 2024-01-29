import React from 'react'
import './Certifications.css'
import certificationsData from './certificatesData'
import { Link } from 'react-router-dom'

function Certifications() {
    return (
        <div className='certificate-container'>
            <h1 className='certificate-heading'>
                Certifications
            </h1>

            {
                certificationsData.map((item, ind) => {
                    return (
                        <div className='certificate-item'>
                            <p>{item.name}</p>
                            <Link to={item.link} className='btn' target='_blank'>view</Link>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default Certifications