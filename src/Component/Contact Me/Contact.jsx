import React from 'react'
import './contact.css'
import Cut from '../Cut/Cut'
export default function Contact() {
  return (
  <div className='contact'>


<h1>Contact Me</h1>
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
    <label htmlFor="floatingInput">Email address</label>
  </div>
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
    <label htmlFor="floatingInput">Email address</label>
  </div>
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
    <label htmlFor="floatingInput">Email address</label>
  </div>
 <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}} defaultValue={""} />
  <label htmlFor="floatingTextarea2">Comments</label>
</div>
<button className='btn  btn-primary btn-lg'>Send </button>
</div>

  )
}
