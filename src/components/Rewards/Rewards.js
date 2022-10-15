import React from 'react'
import './Rewards.css'

function Rewards() {
  return (
    <div className='rewards' id='rewards'>
      <div className='rewards_head'>
        <div className='abstract_line'>
          <div className='rewards_line '/>
          <div className='rewards_line lt_btm'/>
        </div>
        <h1>REWARDS AND PERKS</h1>
        <div className='abstract_line'>
          <div className='rewards_line '/>
          <div className='rewards_line rt_btm'/>
        </div>
      </div>
      <div className='rewards_mid'>
        <div className='reward_info'>
          <div className='reward_circle'>
            <h2>1</h2>
          </div>
          <div className='rewards_cont'>
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risus</p>
          </div>
        </div>
        <div className='reward_info'>
          <div className='reward_circle'>
            <h2>2</h2>
          </div>
          <div className='rewards_cont'>
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risus</p>
          </div>
        </div>
        <div className='reward_info'>
          <div className='reward_circle'>
            <h2>3</h2>
          </div>
          <div className='rewards_cont'>
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risus</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rewards