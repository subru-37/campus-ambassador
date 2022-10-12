import React from 'react'
import mec_logo from './../../assets/mec_logo.svg'
import excel_logo from './../../assets/excellogowithtext.svg'
import { AiOutlineInstagram, AiFillHeart, AiFillFacebook } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_head'>
        <div className='footer_logos'>
          <img src={mec_logo} alt=' ' className='logo_img'/>    
          <img src={excel_logo} alt=' ' className='logo_img'/>    
        </div>
        <div className='social_media'>
          <AiFillFacebook className='soc_med_icon'/>
          <AiOutlineInstagram className='soc_med_icon'/>
          <BsLinkedin className='soc_med_icon'/>
          <FiTwitter className='soc_med_icon'/>
        </div>
      </div>
      <div className='footer_btm'>
        <p>Made with</p>
        <AiFillHeart className='heart_icon'/>
        <p>Excel 2022</p>
      </div>
    </div>
  )
}

export default Footer