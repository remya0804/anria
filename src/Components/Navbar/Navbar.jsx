import React, { useEffect, useState } from 'react'
import './Navbar.css'

import logo from  '../../assets/logo_no_bg.png'

import { FaHome } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa";


const Navbar = () => {

    const [menu,setMenu] = useState(false);

    useEffect(() => {

        window.addEventListener('resize',() => {

            if(window.innerWidth > 880 && menu){

                setMenu(false);
            }
        })
    },[menu])

  return (
    
    <div className="navbar">

        {/* ********************** Navbar Logo   ********* */}

        <div className="navbar-logo">

            <img src={logo} alt="" />

            <h2 className="logo-title">

                Angamaly NRI Association

            </h2>

        </div>

        {/* ********************** small menu   ********* */}

        <div className="navbar-menu-small">

            <div className="menu-icon" onClick={() => setMenu(!menu)}>

                {menu  ? <IoMdClose /> : <IoMdMenu />}

            </div>

            {/* small menu media icons */}

            <div className="media-icons">

                <div className="facebook-icon">

                    <FaFacebook />

                    </div>

                    <div className="insta-icon">

                    <FaSquareInstagram /> 

                    </div>   

                </div>

        </div>

        {/* ********************** Navbar Menu   ********* */}

        <div className={menu ? "navbar-menu-list" : "navbar-menu"} >

            <div className="home-menu">

                {

                    menu ? <li className='home'>Home</li> : <FaHome className='home-icon' />     
                }    

            </div>

            <div className="about-menu">

                <li className='about'>About</li>

                { menu ? <FaCaretRight /> : ""}

                <ul className="about-submenu">

                    <li> Mission & Vision</li>
                    <li> Core Values</li>

                </ul>

            </div>

            <div className="cells-menu">

                <li className='cells'>Cells</li>

                { menu ? <FaCaretRight /> : ""}

                <ul className="cells-submenu">

                    <li>ANRIA Care</li>
                    <li>Welfare Cell</li>
                    <li>Jobs Cell</li>
                    <li>Women Cell</li>
                    <li>Kids Cell</li>
                    <li>Media Cell</li>
                    <li>Sports Cell</li>
                    <li>Arts Cell</li>
                    <li>Business Cell</li>

                </ul>

            </div>

            <div className="sectors-menu">

                <li className='sectors'>Sectors</li>

                { menu ? <FaCaretRight /> : ""}

                <ul className="sectors-submenu">

                    <li>Angamaly</li> 
                    <li>Ayyampuzha</li>
                    <li>Thuravoor</li>
                    <li>Sreemoolanagaram</li>
                    <li>Mookkannoor</li>
                    <li>Manjapra</li>
                    <li>Kalady</li>
                    <li>Kanjoor</li>
                    <li>Malayattoor</li>
                    <li>Nedumbassery</li>
                    <li>Karukkutty</li>
                    <li>Koratty</li>
                    <li>Parakkadavu</li>

                </ul>

            </div>

            <div className="news-menu">

                <li className='news'>News & Events</li>

                { menu ? <FaCaretRight /> : ""}

                <ul className="news-submenu">

                    <li>Upcoming Events</li>
                    <li>Past Events</li>
                    <li>ANRIA News</li>
                    <li>Angamaly News</li>
                    <li>Press Releases</li>

                </ul>

            </div>

            <div className="gallery-menu">

                <li className='gallery'>Gallery</li>

                { menu ? <FaCaretRight /> : ""}

                <ul className="gallery-submenu">

                    <li>Photo Gallery</li>
                    <li>Video Gallery</li>

                </ul>


            </div>

            <div className="leaders-menu">

                <li className='leaders'>Leaders</li>
                
            </div>
            <div className="sponsors-menu">

                <li className='sponsors'>Sponsors</li>

            </div>
            <div className="contact-menu">

                <li className='contact'>Contact</li>

            </div>
            <div className="login-menu">

                <li className='login'>Login</li>

            </div>
            
            
        </div>   

    </div>
  )
}

export default Navbar