/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button/Button";
import events from "../../assets/Image/events.svg";
import eventsInnerImage from "../../assets/Image/EventsInnerImage.svg"
import './Events.css'
const Events = () => (
  <section  className="member">
    <div className="events">
      <div className="eventsHeading">
        WHAT IS EXCEL?
        </div>
        <div className="eventsPara">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risus 
      </div>
     <img src={eventsInnerImage} alt="eventsinnerimage" className="eventsInnerImage" />
    <img className="eventsImage" src={events} alt='event' />
    
    </div>
  </section>
);



export default Events;
