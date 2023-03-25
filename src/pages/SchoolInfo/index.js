import React from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Schoolinfofetchcomponent from '../../components/Schoolinfofetchcomponent'

const SchoolInfo = () => {
  return (
    <div>
      SchoolInfo
      <Schoolinfofetchcomponent />
      <h4>Quick Links:</h4>
      <Link to={'/class-info'}>Navigate to Class Info</Link>
      <br />
      <Link to={'/subject-info'}>Navigate to Subject Info</Link>
    </div>
  )
}

export default SchoolInfo
