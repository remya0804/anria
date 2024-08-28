import React from 'react'

import './Footer.css';

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
  return (
    
    <div className="footer">

      <div className="footer-copyright">

        © 2024 Angamaly NRI Association. All rights reserved.

      </div>

      <div className="footer-media">

        <FaFacebookSquare />
        <FaInstagramSquare />

      </div>

        
    </div>
  )
}

export default Footer