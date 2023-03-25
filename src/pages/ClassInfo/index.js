import React from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Classinfofetchcomponent from '../../components/Classinfofetchcomponent'

const ClassInfo = () => {
  return (
    <div>
      ClassInfo
      <Classinfofetchcomponent />
      <h4>Quick Links:</h4>
      <Link to={'/school-info'}>Navigate to School Info</Link>
      <br />
      <Link to={'/subject-info'}>Navigate to Subject Info</Link>
    </div>
  )
}

export default ClassInfo
