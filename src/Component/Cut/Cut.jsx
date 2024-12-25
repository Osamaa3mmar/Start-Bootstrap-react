import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faStar } from '@fortawesome/free-solid-svg-icons'
import './cut.css'
export default function Cut() {
  return (
    <div className='cut-padding'>
      <div className="line rounded-pill"></div>
      <FontAwesomeIcon className='star' icon={faStar} />
      <div className="line rounded-pill"></div>

    </div>
  )
}
