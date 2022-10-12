import React from 'react'
import Grid from '@mui/material/Grid';
import './Rewards.css'
import { SvgIcon,createSvgIcon } from '@mui/material';
import RewardItem from './RewardItem';

export default function Rewards() {

  const Ray1Icon = createSvgIcon(
    <path d="M4,9C5.31,9 6.42,9.83 6.83,11H22V13H6.83C6.42,14.17 5.31,15 4,15A3,3 0 0,1 1,12A3,3 0 0,1 4,9Z" />,
    'Ray1',
  ); 
  const Ray2Icon = createSvgIcon(
    <path d="M20,9C18.69,9 17.58,9.83 17.17,11H2V13H17.17C17.58,14.17 18.69,15 20,15A3,3 0 0,0 23,12A3,3 0 0,0 20,9Z" />,
    'Ray2',
  );
  
  return (
    <div className="rewards">
      <div className="headline"> 
        <div className="left-rays">
          <Ray1Icon className= "svgrays"/>
          <Ray1Icon className= "svgrays"/>
        </div>
        <h1 className="rewards-text" sx={{ 
          textAlign: 'center'}} >PERKS AND REWARDS </h1> 
        <div className="right-rays" >
          <Ray2Icon className= "svgrays" /> 
          <Ray2Icon className= "svgrays" />
        </div>
      </div>    
      <div className='items'>
        <RewardItem />
        <RewardItem />
        <RewardItem />
      </div> 
    </div>
  )
}
