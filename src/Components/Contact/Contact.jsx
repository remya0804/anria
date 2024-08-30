import React from 'react'

import './Contact.css'

const Contact = () => {
  return (

    <div className="contact-container">

        <h1>Contact Us</h1>

        <form action="" className="contact-form">

            <div className="contact-form-item">
              <label htmlFor="">Name</label>
              <input name='name' type="text" placeholder='Enter Your Name' />
            </div>

            <div className="contact-form-item">
              <label htmlFor="">Contact Number</label>
              <input name='number' type="tel" placeholder='Enter Your Contact Number' />
            </div>

            <div className="contact-form-item">
              <label htmlFor="">Email</label>
              <input name='email' type="email" placeholder='Enter Your Email' />
            </div>

            <div className="contact-form-item textarea">
              <label htmlFor="">Message</label>
              <textarea name="message" id="" placeholder='Enter Your Message'></textarea>
            </div>
            <button type="submit">Submit</button>
            
        </form>
    </div>
  )
}

export default Contact