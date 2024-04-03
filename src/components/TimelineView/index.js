import './index.css'
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="back-con">
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <Chrono
        theme={{
          primary: 'blue',
          secondary: 'white',
          color: 'blue',
        }}
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
      >
        {timelineItemsList.map(each => {
          if (each.categoryId === 'COURSE') {
            return <CourseTimelineCard key={each.id} courseCardDetails={each} />
          }
          return <ProjectTimelineCard key={each.id} projectCardDetails={each} />
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
