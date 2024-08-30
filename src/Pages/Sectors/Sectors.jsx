import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './Sectors.css'

import { sectorsArray } from '../../assets/data'

const Sectors = () => {

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    
    
    <div className="sectors-container">

      <h1>Sectors</h1>

      <hr />

        <div className="sectors-slides-container">

          <Slider {...settings}>


          {

            sectorsArray.map((sector,idx) => {

              return <div className="sector-slides" key={idx}>

                <h2 className="sector-title">{sector.sector_Name} </h2>

                  <div className="sector-content">

                    <div className="sector-coordinators-container">

                      <div className="coordinator">

                        <h4 className="coordinator-name">{sector.sector_cordinator_name}</h4>

                        <p className="coordinator-position">{sector.sector_cordinator_position}</p>

                      </div>
                      {

                        sector.sector_j_cordinator_name==='' 
                        
                        ? ''

                        :  <div className="joint_coordinator">

                              <h4 className="joint_coordinator-name">{sector.sector_j_cordinator_name}</h4>

                              <p className="joint_coordinator-position">{sector.sector_j_cordinator_position}</p>

                            </div>


                      }
                      

                    </div>

                    <p>{sector.sector_Content}</p>

                  </div>
                
            </div>


            })
          }

        </Slider>

        </div>

      

        
    </div>
  )
}

export default Sectors