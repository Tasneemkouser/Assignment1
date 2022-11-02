import React from 'react'
import contactUs from "../images/contact-us.png";

function Footer() {
  return (
    <footer>
      <div className="bg-white">
        <div className="bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 col-12 text-center">
                <img src={contactUs} className="w-100" />
              </div>
              <div className="col-md-8 col-12 px-4">
                <h1 className='text-primary'>Contact Us</h1>
                <p>Please share your questions, suggestions and insights with us at l4i@swasti.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-primary py-3'>
        <div className="container text-center text-white">
          Lorem ispum dolor sit amet - legal stuff goes here
        </div>
      </div>
    </footer>
  )
}

export default Footer