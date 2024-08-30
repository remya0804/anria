import React, { useEffect } from 'react'

import './Sponsors.css'

import {  sponsorArray } from '../../assets/data'

const Sponsors = () => {

  return (
    
    <div className="sponsors-container">

      <h1>Our Sponsors</h1>

      <p>ANRIA events have been supported by reputed sponsors all over UAE and India. ANRIA has strong relationship with the sponsors and always endeavour for mutually beneficial schemes and programs.</p>

      <div className="sponsors-slider-container">

        <div className="sponsors-slider">

          {

            sponsorArray.map((sponsor,idx) => {

              return <img src={sponsor.s_img_path} alt="" key={idx}/>

              
            })
          }
          {

            sponsorArray.map((sponsor,idx) => {

              return <img src={sponsor.s_img_path} alt="" key={idx}/>

              
            })
          }

        </div>

      </div>


    </div>
  )
}

export default Sponsors