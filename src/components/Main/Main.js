import React from 'react'
import mascot from '../../assets/mascotArtboard.svg';
import CountUp from 'react-countup';

import './Main.css'

function Main() {
  // const data = [
  //   {no: '10+',name:'WORKSHOPS'},
  //   {no: '5+',name:'LECTURES'},
  //   {no: '20+',name:'SPONSORS'}
  // ]
  return (
    <div className='home_sec' id='home'>
      <div className='home'>
        <img src={mascot} className='mascot' alt=''/>
        <div className='intro_text'>
          <h1 className='h1text'>EXCEL MEC</h1>
          <h3 className='h3text'>CAMPUS AMBASSADOR</h3>
        </div>
      </div>
      <div className='features'>
          <div className='home_highlights'>
            <h3><CountUp end={10} duration={3} enableScrollSpy={true} preserveValue={true}/>+</h3>
            <h4>WORKSHOPS </h4>
          </div>
          <div className='home_highlights'>
            <h3><CountUp end={5} duration={3} enableScrollSpy={true} preserveValue={true}/>+</h3>
            <h4>LECTURES </h4>
          </div>
          <div className='home_highlights'>
            <h3><CountUp end={20} duration={3} enableScrollSpy={true} preserveValue={true}/>+</h3>
            <h4>SPONSORS </h4>
          </div>
      </div>
    </div>
  )
}

export default Main