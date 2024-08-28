import React from 'react'

import './HomeSlides.css'
import { newsArray } from '../../assets/data'

import img_1 from '../../assets/img_1.jpeg'
import img_2 from '../../assets/img_2.jpeg'

const HomeSlides = () => {
  return (

    <div className="homeslide">

      <h1>Gallery</h1>

      <hr />

        <div className="home-slides">    

          {/* ***************** Videos Container ******************* */}

          <div className="home-slide-container">

            <div className="home-slide-title">

              <h2>Videos</h2>

            </div>

            {/* video slide */}

            <div className="home-video-slide">

              <div className="slide-video">

                <iframe  src="https://www.youtube.com/embed/NY6YO5SyrGY"> </iframe>
                <iframe  src="https://www.youtube.com/embed/Iy1XeN9_Fik"></iframe>

              </div>

              <div className="home-slide-button">

                <p>View More</p>

              </div>

            </div>

          </div>

          {/* ***************** Images Container ******************* */}

          <div className="home-slide-container">

            <div className="home-slide-title">

              <h2>Photos</h2>

            </div>

            {/* video slide */}

            <div className="home-image-slide">

              <div className="slide-image">

                <img src={img_1} alt="" />
                <img src={img_2} alt="" />

              </div>

              <div className="home-slide-button">

                <p>View More</p>

              </div>

            </div>

          </div>

          {/* ***************** Slide Container ******************* */}

          <div className="home-slide-container">

            <div className="home-slide-title">

              <h2>News</h2>

            </div>

            {/* news slide */}

            <div className="home-news-slide">

              <div className="home-news-title">

                <h4>{newsArray[0].nTitle}</h4>

              </div>

              <div className="home-news-content">

                <p>{newsArray[0].nContent}</p>

              </div>

              <div className="home-slide-button">

                <p>View More</p>

              </div>

            </div>

          </div>

        </div>

      </div>
  )
}

export default HomeSlides