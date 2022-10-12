import React from 'react'
import mascot from '../../assets/mascotArtboard.svg';
import './Main.css'

function Main() {
  const data = [
    {no: '10+',name:'WORKSHOPS'},
    {no: '5+',name:'LECTURES'},
    {no: '20+',name:'SPONSORS'}
  ]
  return (
    <div className='main' id='home'>
      <div className='home'>
        <img src={mascot} className='mascot' alt=''/>
        <div className='intro_text'>
          <h1>EXCEL MEC</h1>
          <h2>CAMPUS AMBASSADOR</h2>
        </div>
      </div>
      <div className='features'>
        {data.map((x,no)=>
        (
          <div className='box' key={no}>
            <h3 className='h3text'> {x.no}</h3>
            <h4 className='h4text'> {x.name}</h4>
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default Main