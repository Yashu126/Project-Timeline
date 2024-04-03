import './index.css'

import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectCardDetails} = props
  return (
    <div>
      <div className="img-con">
        <img src={projectCardDetails.imageUrl} alt="project" width="80%" />
      </div>
      <div className="course-header">
        <h3>{projectCardDetails.projectTitle}</h3>
        <p>
          <AiFillCalendar />
          {projectCardDetails.duration}
        </p>
      </div>
      <p>{projectCardDetails.description}</p>
      <a href={projectCardDetails.projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
