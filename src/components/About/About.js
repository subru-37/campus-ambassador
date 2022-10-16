import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import excel_img from './../../assets/excel_img.svg'

import './About.css'

function About() {

    const [slide, setSlide] = useState(1)
    const sliderRef = useRef();

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        fade: true,
        pauseOnHover: true
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
        setSlide(slide + 1);
    }

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
        setSlide(slide - 1);
    }

  return (
    <div className='about' id='about'>
        <div className='about_head'>
            <h1>WHAT IS <span class="blue">  EXCEL</span> ?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risus</p>
        </div>
        <div className='gallery_container'>
            <IoIosArrowBack onClick={gotoPrev} className='achSlider__prev'/>
            <div className='about_slider'>
                <Slider {...settings} ref={sliderRef}>
                    <div>
                        <img src={excel_img} alt='' className='slider_img'/>
                    </div>
                    <div>
                        <img src={excel_img} alt='' className='slider_img'/>
                    </div>
                    <div>
                        <img src={excel_img} alt='' className='slider_img'/>
                    </div>
                    <div>
                        <img src={excel_img} alt='' className='slider_img'/>
                    </div>
                    <div>
                        <img src={excel_img} alt='' className='slider_img'/>
                    </div>
                    <div>
                        <img src={excel_img} alt='' className='slider_img'/>
                    </div>
                </Slider>
            </div>
            <IoIosArrowForward onClick={gotoNext} className='achSlider__next'/>
        </div>
    </div>
  )
}

export default About
