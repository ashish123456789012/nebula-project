import React from 'react'
import "./footer.css"

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Ashish Nagal</h4>
            <p>© {year} Ashish nagal All rights reserved</p>
            <p className='d-flex'>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-facebook mx-3'></i>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>If you have any questions or just want to say hello, feel free to drop us a message!</p>
            <p>info : shshnagal@gmail.com</p>
            <p>+91 9983667925</p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <p>Resume</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer