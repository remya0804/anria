import React, { useEffect, useState } from 'react'

import './Home.css'

import { FaBookOpen } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa6";


import { sliderArray } from '../../assets/data'
import CellsSlider from '../../Components/CellsSlider/CellsSlider';
import HomeSlides from '../../Components/HomeSlides/HomeSlides';

const Home = () => {

  const [sliderIndex,setSliderIndex] = useState(0);

  useEffect(() => {

    const sliderTimer = setInterval(() => {

      if(sliderIndex< sliderArray.length-1){

        setSliderIndex(sliderIndex + 1);
      } else{

        setSliderIndex(0)
      }

    }, 3000);

    return () =>  clearInterval(sliderTimer);

  },[sliderIndex]);


  return (
    
    <div className="home-container">

       {/* ********************** Home slider   ********* */}
        
        <div className="home-slider">

             <div className='home-slider-img'>

                      <img src={sliderArray[sliderIndex].img_path} alt="" />

            </div>
            {/* slider buttons */}

            <div className="home-slider-buttons">

              {

                sliderArray.map((_,idx) => {

                  return <div key={idx} className={`${idx==sliderIndex ? 'slider-circle slider-circle-active' : 'slider-circle'  }`} onClick={() => setSliderIndex(idx)}></div>
                })
              }


            </div>
            
        </div>

        {/* ********************** Home About   ********* */}

        <div className="home-about">

          {/* about left */}

          <div className="home-about-left">

            <h1 className="home-about-title">

                Welcome to ANRIA

            </h1>

            <p className="home-about-para">Angamaly NRI Association (ANRIA), formed in March 2006, is one of the popular& reputed expatriate organizations in the UAE. Our association functions as a common platform for natives from Angamaly region to promote socio-cultural and charitable activities for the welfare of the members and their family. ANRIA is one of the largest organization in terms of its geographical area and with a strong membership of more than 2,000 NRIs residing in UAE. Residents of 1 Municipality and 12 Panchayats around Angamaly are members of ANRIA.</p>

            <p className="home-about-para">ANRIA was established in 2006 and it has functional base in Dubai. Being identified the large number of members from Angamaly region in other Emirates too; it was decided to form Chapters. Ras Al Khaimah Chapter formed in May 2015, Qatar Region was inaugurated in November 2016 and Angamaly Chapter inaugurated in 2015.</p>

          </div>

          {/* about right */}

          <div className="home-about-right">

            <div className="magazine">

              <FaBookOpen />

              <div className="magazine-title">

                <h3>ANRIA MAGAZINE</h3>

                <p>All about us</p>

              </div>

            </div>
            <div className="charity">

              <FaHandHoldingHeart />

              <div className="charity-title">

                <h3>JOIN ANRIA </h3>

                <p>Do the charity</p>

              </div>     

            </div>

          </div>

        </div>

        <CellsSlider />

        <HomeSlides />

        
    </div>
  )
}

export default Home