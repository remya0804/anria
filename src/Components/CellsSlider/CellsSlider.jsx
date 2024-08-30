import React, { useEffect } from 'react'

import './CellsSlider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { cellsArray} from '../../assets/data'

import divider from '../../assets/divider_bg.png'

const CellsSlider = () => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
    
    <div className="cells-slider">

        <h1>ANRIA Cells</h1>

        {/* <img src={divider} alt="" /> */}

        {/* <hr /> */}

        <div className="cells-slider-container">  

                <Slider {...settings}>

                    {

                        cellsArray.map((item,idx) => {

                            return <div  key={idx} className='cells-slider-item'>

                                <div className="cells-slider-content">

                                    <img src={item.cImg} alt="" /> 

                                    <h3>{item.cTitle}</h3>                               

                                    <div className="cells-slider-button">

                                        <p>Read More</p>

                                        {/* <FaArrowRight /> */}

                                    </div> 

                                </div>
                                
                            </div>

                        })}
                    
                    </Slider>
        </div>

    </div>
  )
}

export default CellsSlider