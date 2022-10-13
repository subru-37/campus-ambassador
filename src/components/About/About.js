// import { WidthNormal } from '@mui/icons-material';
import React from 'react'
import Slider from "react-slick";
import excel_img from './../../assets/excel_img.svg'
import {useScreenWidth} from './../../../src/hooks/useScreenWidth'

import './About.css'

function About() {

    const [width] = useScreenWidth()

    var settings = {
        dots: width > 1200 ? true : false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        fade: true,
        pauseOnHover: true
      };

  return (
    <div className='about'>
        <div className='about_head'>
            <h1>WHAT IS EXCEL ?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risus</p>
        </div>
        <div className='about_slider'>
            <Slider {...settings}>
            <div>
                <img src={excel_img} alt=' ' className='slider_img'/>
            </div>
            <div>
                <img src={excel_img} alt=' ' className='slider_img'/>
            </div>
            <div>
                <img src={excel_img} alt=' ' className='slider_img'/>
            </div>
            <div>
                <img src={excel_img} alt=' ' className='slider_img'/>
            </div>
            <div>
                <img src={excel_img} alt=' ' className='slider_img'/>
            </div>
            <div>
                <img src={excel_img} alt=' ' className='slider_img'/>
            </div>
            </Slider>
        </div>
    </div>
  )
}

export default About