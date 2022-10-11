import React from 'react'
import { Main } from '../../components'
import './HomePage.css'
// import SimpleSlider from '../../components/ImageSlider/SimpleSlider'
import SimpleAccordion from '../../components/FAQ/SimpleAccordion'
function HomePage() {
  return (
    <div className='homePage'>
        <Main />
        {/* <SimpleSlider/> */}
        <SimpleAccordion/>
        
    </div>
  )
}

export default HomePage