import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectCardList = ( props:any ) => {
  return (
    <div className='project-card-list'>
      {props.projectList.map((project:any, index:number) => (
        <div>
            {<ProjectCard key={index} project={project.node} />}
        </div>
      ))}
    </div>
  )
}

export default ProjectCardList