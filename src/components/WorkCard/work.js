import React from 'react'
import './WorkCardStyles.css'
import WorkCard from './WorkCard'
import ProjectData from './WorkData'

function work() {
    return (
        <div>
            <div className='work-container'>
                <h1 className='project-heading'>Projects</h1>
                <div className='project-container'>
                    {
                        ProjectData.map((item, index) => {
                            return (
                                <WorkCard
                                    key={index}
                                    imgsrc={item.imgsrc}
                                    title={item.title}
                                    des={item.description}
                                    skills={item.skills}
                                    source={item.Source}
                                    view = {item.view}
                                />
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default work