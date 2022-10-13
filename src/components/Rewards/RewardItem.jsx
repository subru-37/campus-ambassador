import React,{useState} from "react";
import { Typography } from '@mui/material';
import './Rewards.css'

export default function RewardItem(){
    return(
        <div className="rewarditem-parent">
            <div className="rewards3">
                <div className="desc">
                    <div className='box'>
                        <div className="circle-items">
                            <div className="numbering">
                                <h1> 1 </h1>
                            </div>
                        </div>
                        <h3 className='h3text'>LOREM IPSUM</h3>
                        <h4 className='h4text'>dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risu</h4>      
                    </div>    
                </div>  
            </div>      
        </div>         
    );
}
