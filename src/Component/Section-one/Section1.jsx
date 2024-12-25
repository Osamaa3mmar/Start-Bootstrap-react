import React from 'react'
import face from "../../img/avatar.svg"
import Cut from '../Cut/Cut'
export default function Section1() {
  return (
    <div className='section-1'>
        <div className="container d-flex  flex-column align-items-center justify-content-center ">
      <img src={face} alt="" />
      <h1 className='fs-1 text-white'>Start Bootstrap</h1>
      <Cut/>
      <p className='fs-4'>
      Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </div>
  )
}
