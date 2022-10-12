import React,{useState} from "react";
import {FaRegPlusSquare } from "react-icons/fa"; 
import { Typography } from '@mui/material';
import './Rewards.css'

export default function RewardItem(){
    return(
        <div className="rewarditem-parent">
            <div className="rewards3">
                <div className="circle-items">
                    <div className="item">
                        <h1> 1 </h1>
                    </div>
                </div>
                <div className="desc">
                    <div className='box'>
                        <h3 className='h3text'>LOREM IPSUM</h3>
                        <p className='h4text'>dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risu
                        </p>      
                    </div>    
                </div>  
            </div>      
        </div>         
    );
}
