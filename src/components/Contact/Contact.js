import React from "react";
import "./Contact.css";
// import line from "../../assets/Line1.svg";

function Contact() {
  const contact = [
    { name: "LOREM IPSUM", no: "93949448635" },
    { name: "LOREM IPSUM", no: "58463743902" },
  ];
  return (
    <div className="contact">
      <div className="line">
        {/* <img src={line} className="line1" alt="" /> */}
        <div className="contact_text">
          <h3>CONTACT</h3>
        </div>
        {/* <img src={line} className="line2" alt="" /> */}
      </div>
      <div className="contactNumber">
        {contact.map((x) => (
          <div className="contact_box">
            <h5> {x.name}</h5>
            <h5> {x.no}</h5>
          </div>
        ))}
      </div>
      <div className="locationMap">
        <div className="location">
          <div className="location_text">
            <h3>LOCATION</h3>
          </div>
          <div className="location_details">
            <h5>MODEL ENGINEERING COLLEGE</h5>
            <h5>THRIKKAKARA</h5>
            <h5>ERNAKULAM</h5>
          </div>
      </div>
      <div className="location_map">
        <iframe 
        title="model engineering college"
        className="location_model"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8620950487116!2d76.32679578356635!3d10.028236913798711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c5006491601%3A0xcf23e14245d4694d!2sGovernment%20Model%20Engineering%20College!5e0!3m2!1sen!2sin!4v1665515033877!5m2!1sen!2sin"
          
          style= {{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
    </div>
  );
}

export default Contact;
