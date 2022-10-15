import React, { useRef, useState, useEffect } from 'react'
import Slider from "react-slick";
import axios from 'axios'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import SingleSlide from './SingleSlide/SingleSlide';

import './ImageSlider.css'
import { useScreenWidth } from '../../../hooks/useScreenWidth';

const LANDING_CAROUSEL_URL = '/landing-carousel'

function ImageSlider() {

    const [landingCarousel, setLandingCarousel] = useState('')

    const sliderRef = useRef();
    const [width] = useScreenWidth()

    const settings = {
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

    useEffect(() => {
    
        async function getLandingCarousel() {
          try {
            const response = await axios.get(process.env.REACT_APP_DEPT_API + LANDING_CAROUSEL_URL);
            setLandingCarousel(response.data);
          } catch (error) {
            console.error(error);
          }
        }
        getLandingCarousel()
    }, [])

    const gotoNext = () => {
        sliderRef.current.slickNext();
    }

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    }

    const sortedCarousel = landingCarousel && landingCarousel.sort((a, b) => a.order_no < b.order_no ? -1 : 1)

  return (
    <div className='imageSlider'>
        <IoIosArrowBack onClick={gotoPrev} className='imageSlider__prev'/>
        <div className='imageSlider__container'>
            <Slider {...settings}  ref={sliderRef}>
                {sortedCarousel ? sortedCarousel.map((slide) => (
                    <SingleSlide
                        key={slide._id}
                        title={slide.title}
                        desc={slide.description}
                        image={slide.image && slide.image.url}
                    />
                )) : <></>}
            </Slider>
        </div>
        <IoIosArrowForward onClick={gotoNext} className='imageSlider__next'/>
    </div>
  )
}

export default ImageSlider