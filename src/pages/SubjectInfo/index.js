import React from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Subjectinfofetchcomponent from '../../components/Subjectinfofetchcomponent'

const SubjectInfo = () => {
  return (
    <div>
      Subject Info
     <Subjectinfofetchcomponent />
     <h4>Quick Links:</h4>
     <Link to={'/school-info'}>Navigate to School Info</Link> 
      <br />
      <Link to={'/class-info'}>Navigate to Class Info</Link>
      
      
    </div>
  )
}

export default SubjectInfo
