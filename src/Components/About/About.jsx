import React from 'react'

import './About.css'

import { GoGoal } from "react-icons/go";
import { GoEye } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";

const About = () => {

  return (
    
    
    <div className="about-container">

        <h1>About Us</h1>

        <div className="about-slides">

            <div className="about-mission">

                <div className="mission-icon">

                    <GoGoal />

                </div>
                
                <h3>Mission</h3>

                <p>Contain all the expatriates from Angamaly and its surroundings remain as fraternity working for prosperity and overall development of all the people in the region.</p>
                
            </div>

            <div className="about-vision">

                <div className="vision-icon">

                    <GoEye />

                </div>
               
                <h3>Vision</h3>

                <p>Bring all the expatriates living in UAE to become members of ANRIA Engage in philanthropy Organize programs for the socio-cultural development of the community Engage in environmental activities Engage in activities to uplift the society.</p>

            </div>
            <div className="about-values">

                <div className="values-icon">

                    <IoDiamondOutline />

                </div>

                <h3>Core Values</h3>

                <p>Be patriotic to Homeland and loyal to the nation where you live Uphold integrity in all activities Uphold dignity of the organization always Maintain mutual respect Remain socially committed Always discharge responsibilities with no regard to political, religious and communal considerations.</p>

            </div>

        </div>

        
    </div>
  )
}

export default About