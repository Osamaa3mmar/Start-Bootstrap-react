import React from 'react'
import Cut from '../Cut/Cut'

export default function Section3() {
  return (
    <div className='section-3'>
        <div className="container d-flex  flex-column align-items-center justify-content-center">
            <div className="header">About</div>
            <Cut/>
            <div className="row py-3">
                <div className="gap col-lg-2"></div>
                <div className="col-lg-4 col-sm-8">
                    <p className="par">Freelancer is a free bootstrap theme 
                        created by Start Bootstrap. 
                        The download includes the complete 
                        source files including HTML, CSS, and 
                        JavaScript as well as optional SASS stylesheets
                         for easy customization.
                    </p>
                </div>
                <div className="col-lg-4 col-sm-8">
                    <p className="par">Freelancer is a free bootstrap theme 
                        created by Start Bootstrap. 
                        The download includes the complete 
                        source files including HTML, CSS, and 
                        JavaScript as well as optional SASS stylesheets
                         for easy customization.
                    </p>
                </div>
                <div className="gap col-lg-2"></div>

                <button className='btn btn-xl btn-outline-light mt-4 m-auto'>Free Download !</button>
            </div>
        </div>
    </div>
  )
}
