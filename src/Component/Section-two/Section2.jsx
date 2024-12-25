import React from 'react'
import img1 from "../../img/cabin.png"
import img2 from "../../img/cake.png"
import img3 from "../../img/circus.png"
import img4 from "../../img/game.png"
import img5 from "../../img/safe.png"
import img6 from "../../img/submarine.png"
import Cut from '../Cut/Cut'

export default function Section2() {
  return (
    <div className='section-2'>
        <div className="container d-flex  flex-column align-items-center justify-content-center">
            <h1 className='headder'>Portfolio</h1>
            <Cut/>
            <div className="cards ">
                <div className="row">
                <div className="img-card col-lg-4 col-md-6 col-sm-12 rounded overflow-hidden mb-5">
                    <img src={img1} alt="" className='img-fluid rounded' />
                    <p className="plus-icon">+</p>
                </div>
                <div className="img-card col-lg-4 col-md-6 col-sm-12 rounded overflow-hidden mb-5">
                    <img src={img2} alt="" className='img-fluid rounded' />
                    <p className="plus-icon">+</p>
                </div>
                <div className="img-card col-lg-4 col-md-6 col-sm-12 rounded overflow-hidden mb-5">
                    <img src={img3} alt="" className='img-fluid rounded' />
                    <p className="plus-icon">+</p>
                </div>
                <div className="img-card col-lg-4 col-md-6 col-sm-12 rounded overflow-hidden mb-5">
                    <img src={img4} alt="" className='img-fluid rounded' />
                    <p className="plus-icon ">+</p>
                </div>
                <div className="img-card col-lg-4 col-md-6 col-sm-12 rounded overflow-hidden mb-5">
                    <img src={img5} alt="" className='img-fluid rounded' />
                    <p className="plus-icon">+</p>
                </div>
                <div className="img-card col-lg-4 col-md-6 col-sm-12 rounded overflow-hidden mb-5">
                    <img src={img6} alt="" className='img-fluid rounded' />
                    <p className="plus-icon">+</p>
                </div>
                </div>
                
            </div>
            </div>
      
    </div>
  )
}
