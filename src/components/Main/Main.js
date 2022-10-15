import React,{useState} from 'react'
import mascot from '../../assets/mascotArtboard.svg';
import CountUp from 'react-countup';

import './Main.css'

function Main() {
  // const data = [
  //   {no: '10+',name:'WORKSHOPS'},
  //   {no: '5+',name:'LECTURES'},
  //   {no: '20+',name:'SPONSORS'}
  // ]
  const [onHover,setHoverChange] = useState(false);
  const styles1={
    background: onHover ? 'linear-gradient(180deg,#1cacd038 6.01%, #05eafa22 17.94%, #000000 100%)' : 'linear-gradient(180deg, #000000 6.01%, #05eafa22 82.06%, #1cacd038 100%)',
  }
  return (
    <div className='home_sec' id='home'>
      <div className='home'>
        <img src={mascot} className='mascot' alt=''/>
        <div className='home_title'>
          <div className='intro_text'>
            <h1>EXCEL MEC</h1>
            <h2>CAMPUS AMBASSADOR</h2>
          </div>
          <button className='reg_btn' onClick={()=>(setHoverChange(!onHover))} style={styles1} onMouseEnter={()=>(setHoverChange(!onHover))} onMouseOut={()=>(setHoverChange(!onHover))}>REGISTER</button>
        </div>
      </div>
      <div className='features'>
          <div className='home_highlights'>
            <h3><CountUp end={10} duration={2} enableScrollSpy={true} preserveValue={true}/>+</h3>
            <h4>WORKSHOPS </h4>
          </div>
          <div className='home_highlights'>
            <h3><CountUp end={5} duration={2} enableScrollSpy={true} preserveValue={true}/>+</h3>
            <h4>LECTURES </h4>
          </div>
          <div className='home_highlights'>
            <h3><CountUp end={20} duration={2} enableScrollSpy={true} preserveValue={true}/>+</h3>
            <h4>SPONSORS </h4>
          </div>
      </div>
    </div>
  )
}

export default Main