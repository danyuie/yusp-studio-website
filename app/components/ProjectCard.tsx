import React, { useState } from 'react'
import Image from 'next/image';

const ProjectCard = (props:any ) => {
  const [project, setProject] = useState(props.project)
  // console.log(project)
  return (
    <div className='project-card'>
      {/* {project.name} */}
      <Image className='image' src={project.image.url} alt='' width={420} height={259} />
    </div>
  )
}

export default ProjectCard