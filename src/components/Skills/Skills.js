import React from 'react'
import SkillsData from './SkillsData'
import './Skills.css'

function Skills() {
    return (
        <div className='skill-container'>
            <h1 className='skill-head'>Skills</h1>
            <div className='skill-content'>
                <h4>Frontend</h4>
                {
                    SkillsData.frontend.map(item => {
                        return (
                            <div className='skill-item'>

                                <button className='btn'>{item}</button>
                            </div>
                        )
                    })
                }


            </div>
            <div className='skill-content'>
                <h4>Backend</h4>
                {
                    SkillsData.backend.map(item => {
                        return (
                            <div className='skill-item'>
                                <button className='btn'>{item}</button>
                            </div>
                        )
                    })
                }

            </div>
            <div className='skill-content'>
                <h4>Programing Languages</h4>
                {
                    SkillsData.programing.map(item => {
                        return (
                            <div className='skill-item'>
                                <button className='btn'>{item}</button>
                            </div>
                        )
                    })
                }


            </div>
            <div className='skill-content'>
                <h4>Database</h4>
                {
                    SkillsData.databases.map(item => {
                        return (
                            <div className='skill-item'>
                                <button className='btn'>{item}</button>
                            </div>
                        )
                    })
                }


            </div>

        </div>
    )
}

export default Skills