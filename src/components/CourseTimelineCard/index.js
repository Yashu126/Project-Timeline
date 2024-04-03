import './index.css'

import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseCardDetails} = props
  const {courseTitle, description, duration, tagsList} = courseCardDetails
  return (
    <>
      <div className="course-header">
        <h3>{courseTitle}</h3>
        <p>
          <AiFillClockCircle />
          {duration}
        </p>
      </div>
      <p>{description}</p>
      <ul className="elements-con">
        {tagsList.map(each => (
          <li className="element" key={each.id}>
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
