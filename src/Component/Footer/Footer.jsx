import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faDribbble,faLinkedin,faTwitter } from '@fortawesome/free-brands-svg-icons';

import './footer.css'
export default function Footer() {
  return (
   <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-12">
    <div className="start">
      <h2 className="footer-headder">Location</h2>
      <p className="text">2215 John Daniel Drive
      Clark, MO 65243</p>
    </div>
    </div>
    <div className="col-lg-4 col-sm-12">

    <div className="mid">
      <h2 className="footer-headder">Around the Web
      </h2>
      <div className="icons">
      <FontAwesomeIcon className='icon-element' icon={faFacebook} />
      <FontAwesomeIcon className='icon-element' icon={faLinkedin} />
      <FontAwesomeIcon className='icon-element' icon={faTwitter} />
      <FontAwesomeIcon className='icon-element' icon={faDribbble} />

      </div>
    </div>
    </div>
    <div className="col-lg-4 col-sm-12">

    <div className="end">
      <h2 className="footer-headder">About Freelancer
      </h2>
      
      <p className="text">
      Freelance is a free to use, MIT licensed Bootstrap theme created by <a href="">Start Bootstrap .</a>
      </p>
    </div>
    </div>
    </div>
    </div>
   </footer>
  )
}
