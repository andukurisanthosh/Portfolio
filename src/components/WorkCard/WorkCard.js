import React from 'react'
import './WorkCardStyles.css'
import { NavLink } from 'react-router-dom'

function WorkCard(props) {
    const skill = props.skills
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="" />
            <h2 className='project-title'>{props.title}</h2>
            <div className='pro-details'>
                <ul className='skills'>
                    {
                        skill.map((item, index)=>{
                            return(
                                <p>{item}</p>
                            )
                        })
                    }
                </ul>
                <p>{props.des}</p>
                <div className='pro-btns'>
                    <NavLink to={props.source} className='btn' target='_blank'>Source</NavLink>
                    {
                        (props.view && <NavLink to={props.view} className='btn' target='_blank'>View</NavLink>)
                    }
                    
                </div>
            </div>
        </div>

    )
}

export default WorkCard